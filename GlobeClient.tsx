import React, { useEffect, useRef, useState, useMemo } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorModal from "../common/ErrorModal";
import useWindow from "@/hooks/useWindow";

type PropertiesProps = Record<string, string | number | null>
type Coordinate = [number, number];
type LinearRing = Coordinate[];
type PolygonCoordinates = LinearRing[];
type MultiPolygonCoordinates = PolygonCoordinates[];
type Geometry =
      | { type: "Polygon"; coordinates: PolygonCoordinates }
      | { type: "MultiPolygon"; coordinates: MultiPolygonCoordinates };

type Feature = {
      properties: PropertiesProps;
      geometry: Geometry;
};

const tileEarthNight = "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg";

export default function GlobeClient() {
      const size = useWindow()
      const globeEl = useRef<GlobeMethods>(undefined);
      const [countries, setCountries] = useState<Feature[] | null>(null);
      const [userCountryCode, setUserCountryCode] = useState<string | null>(null);
      const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
            async function fetchCountry() {
                  try {
                        const r = await fetch(`${window.location.href}api/geoip`);
                        const j = await r.json();
                        if (j.countryCode) setUserCountryCode(j.countryCode.toUpperCase());
                  } catch (e) {
                        console.error("geoip fetch failed", e);
                  }
            }

            async function fetchCountriesGeoJSON() {
                  try {
                        const res = await fetch("/countries.geojson");
                        const geo = await res.json();
                        setCountries(geo.features || []);
                  } catch (e) {
                        console.error("failed to load countries geojson", e);
                  } finally {
                        setLoading(false);
                  }
            }

            fetchCountry();
            fetchCountriesGeoJSON();
      }, []);

      // کمک برای گرفتن کد کشور
      function getIsoCode(props: PropertiesProps) {
            return (
                  props.ISO_A2 ||
                  props.ISO_A3 ||
                  props.ADM0_A3 ||
                  props.iso_a2 ||
                  props.iso_a3 ||
                  props["ISO3166-1-Alpha-2"] ||
                  props["ISO_A2"] ||
                  props["ADMIN0_A3"] ||
                  null
            );
      }

      // محاسبه مرکز کشور فقط وقتی که داده تغییر کند
      const centerCoords = useMemo(() => {
            if (!countries || !userCountryCode) return null;

            const userCountry = countries.find(
                  (c) => {
                        const code = getIsoCode(c.properties);
                        return typeof code === "string" && code.toUpperCase() === userCountryCode;
                  }

            );
            if (!userCountry) return null;

            let latSum = 0,
                  lngSum = 0,
                  count = 0;

            function processPolygon(polygon: PolygonCoordinates) {
                  polygon[0].forEach(([lng, lat]: [number, number], i: number) => {
                        // فقط هر 10 نقطه یک بار برای کاهش محاسبات
                        if (i % 10 === 0) {
                              latSum += lat;
                              lngSum += lng;
                              count++;
                        }
                  });
            }

            if (userCountry.geometry.type === "Polygon") {
                  processPolygon(userCountry.geometry.coordinates as PolygonCoordinates);
            } else if (userCountry.geometry.type === "MultiPolygon") {
                  (userCountry.geometry.coordinates as MultiPolygonCoordinates)
                        .forEach(poly => processPolygon(poly));
            }

            if (count === 0) return null;
            return { lat: latSum / count, lng: lngSum / count };
      }, [countries, userCountryCode]);

      useEffect(() => {
            if (!globeEl.current) return;

            // حالت اولیه: دورتر از زمین
            globeEl.current.pointOfView(
                  { lat: 32.4207, lng: 53.6830, altitude: 3.5 },
                  0 // بدون انیمیشن (فقط موقع mount)
            );

            // کمی بعد شروع حرکت به سمت کشور کاربر
            const timer = setTimeout(() => {
                  if (centerCoords) {
                        globeEl.current?.pointOfView(
                              { lat: centerCoords.lat, lng: centerCoords.lng, altitude: 1.5 },
                              2000 // انیمیشن 2 ثانیه‌ای
                        );
                  }
            }, 800); // 0.8 ثانیه مکث قبل از شروع انیمیشن

            return () => clearTimeout(timer);
      }, [centerCoords]);

      if (loading) return <LoadingSpinner loading={loading} />;
      if (!countries) return <ErrorModal title={"خطا در بارگذاری نقشه"} titleButton={"تلاش مجدد"} handle={() => window.location.reload()} >
            <p className="text-sm text-gray-300 text-center max-w-xs mb-4">
                  متأسفانه در دریافت داده‌های GeoJSON مشکلی پیش آمد. لطفاً اتصال اینترنت خود را بررسی کرده و صفحه را دوباره بارگذاری کنید.
            </p>

      </ErrorModal>;

      return (
            <Globe
                  ref={globeEl}
                  globeImageUrl={tileEarthNight}
                  backgroundColor="#0B1425"
                  polygonsData={countries || []}
                  width={size && size.width && size.width > 768 ? Number(size.width / 2) : undefined}
                  polygonAltitude={0.005}
                  polygonCapColor={(obj) => {
                        const properties = (obj as { properties: PropertiesProps }).properties;
                        if (!properties) return "rgba(120,120,120,0.6)";

                        const code = getIsoCode(properties);
                        if (typeof code === "string" && code) {
                              return code.toUpperCase() === userCountryCode ? "#FC8B14" : "rgba(120,120,120,0.6)";
                        }
                        return "rgba(120,120,120,0.6)";
                  }}
                  polygonSideColor={() => "rgba(0,0,0,0.25)"}
                  polygonStrokeColor={() => "#000000"}
                  showAtmosphere={false}
                  animateIn={true}
            />
      );
}
