"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCenter, setZoom } from "@/store/slices/mapSlice";

function MyMap() {
  const { center, zoom } = useAppSelector((state) => state.map);
  const dispatch = useAppDispatch();
  function MapEventHandler() {
    useMapEvents({
      moveend: (e) => {
        const map = e.target;
        dispatch(setCenter([map.getCenter().lat, map.getCenter().lng]));
        dispatch(setZoom(map.getZoom()));
      },
    });
    return null;
  }
  return (
    <MapContainer
      className="md:w-[900px] md:h-[400px] w-full h-[60%]"
      center={[35.6895, 51.389]}
      zoomControl={false}
      zoom={2}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapEventHandler />
    </MapContainer>
  );
}

export default MyMap;
