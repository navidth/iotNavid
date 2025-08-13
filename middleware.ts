// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
      const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            '8.8.8.8';
      console.log("ip", ip)
      const res = await fetch(`https://ipapi.co/${ip}/json/`)
      const location = await res.json()
      console.log("location", location)
      // می‌تونی داده رو به header اضافه کنی تا در صفحات بخونی
      const response = NextResponse.next()
      response.headers.set('x-country', location.country_name || '')
      response.headers.set('x-city', location.city || '')

      return response
}

// تعیین مسیرهایی که Middleware اجرا میشه (مثلاً همه صفحه‌ها)
export const config = {
      matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
