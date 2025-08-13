// app/api/geoip/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
      try {
            // تلاش برای پیدا کردن IP واقعی کاربر (اگر اپ روی proxy یا vercel اجرا شده)
            const forwarded = request.headers.get("x-forwarded-for") || "";
            const ip = forwarded.split(",").map(s => s.trim()).find(Boolean) || request.headers.get("x-real-ip") || "";

            // اگر نتونستیم از هدر IP بگیریم، می‌تونیم ip-api را بدون ip صدا بزنیم تا از IP فراخوانی‌کننده استفاده کنه
            const lookupUrl = ip ? `http://ip-api.com/json/${ip}?fields=countryCode` : `http://ip-api.com/json/?fields=countryCode`;

            const res = await fetch(lookupUrl);
            if (!res.ok) {
                  return NextResponse.json({ error: "failed to lookup ip" }, { status: 502 });
            }
            const data = await res.json();
            
            console.log("IP Country", data.countryCode)
            return NextResponse.json({ countryCode: data.countryCode || null });
      } catch (err) {
            console.error("geoip error:", err);
            return NextResponse.json({ error: "internal" }, { status: 500 });
      }
}
