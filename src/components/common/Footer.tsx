// components/Footer.tsx
"use client";
import Link from "next/link";
import { MenuItems } from "@/types/type";
import { FaInstagramSquare, FaLinkedin, FaTelegram, FaTelegramPlane, FaWhatsappSquare } from "react-icons/fa";
import { BaleIcon } from "@/lib/static/customElemnt";
import { menuItems, menuStickyMain } from "@/lib/static/static";
import { convertToPersian } from "@/lib/Helpers/funcHelper";

export default function Footer() {
      const itemsFooter: MenuItems = [
            {
                  id: 1,
                  link: "https://www.linkedin.com/company/spaceomid-co/",
                  label: "Linkedin",
                  icon: FaLinkedin,
            },
            {
                  id: 2,
                  link: "https://t.me/spaceID_org",
                  label: "Telegram",
                  icon: FaTelegram,
            },
            {
                  id: 3,
                  link: "https://www.instagram.com/spaceomid",
                  label: "Instagram",
                  icon: FaInstagramSquare,
            },
            {
                  id: 4,
                  link: "https://web.bale.ai/chat?uid=5720366003",
                  label: "Bale",
                  icon: BaleIcon,
            },
            {
                  id: 5,
                  link: "https://api.whatsapp.com/send/?phone=989301979189&text&type=phone_number&app_absent=0",
                  label: "Whatsapp",
                  icon: FaWhatsappSquare,
            },
      ]
      const menu = menuItems.filter((item) => item.id > 3)
      const service = menuStickyMain
      return (
            <footer className="bg-[#101d3a] text-white py-10 border-t border-white/10 ">
                  <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:px-0 px-8 gap-16">
                        {/* لینک‌های شرکت */}
                        <div className="" >
                              <h4 className="text-lg font-semibold mb-3 text-white">شرکت</h4>
                              <ul className="space-y-2 text-sm text-white/80">
                                    {menu && menu.map((item) => {
                                          if (!item.link) return null
                                          return (
                                                <li key={item.id} >
                                                      <Link href={item.link} className="whitespace-nowrap hover:text-[oklch(62.3%_0.214_259.815)]">
                                                            {item.label}
                                                      </Link>
                                                </li>
                                          )
                                    })}
                              </ul>
                        </div>
                        {/* محصولات */}
                        <div>
                              <h4 className="text-lg font-semibold mb-3 text-white">محصولات</h4>
                              <ul className="space-y-2 text-sm text-white/80">
                                    {menu && menu.map((item) => {
                                          if (!item.link) return null
                                          return (
                                                <li key={item.id} >
                                                      <Link href={item.link} className="whitespace-nowrap hover:text-[oklch(62.3%_0.214_259.815)]">
                                                            {item.label}
                                                      </Link>
                                                </li>
                                          )
                                    })}
                              </ul>
                        </div>
                        {/* خدمات */}
                        <div>
                              <h4 className="text-lg font-semibold mb-3 text-white">خدمات</h4>
                              <ul className="space-y-2 text-sm text-white/80">
                                    {service && service.map((item) => {
                                          if (!item.link) return null
                                          return (
                                                <li key={item.id} >
                                                      <Link href={item.link} className="whitespace-nowrap hover:text-[oklch(62.3%_0.214_259.815)]">
                                                            {item.label}
                                                      </Link>
                                                </li>
                                          )
                                    })}
                              </ul>
                        </div>
                        {/* شبکه‌های اجتماعی */}
                        <div>
                              <h4 className="text-lg font-semibold mb-3 text-white">ما را دنبال کنید</h4>
                              <div className="flex flex-wrap gap-2 items-center justify-start space-x-4 text-white text-xl">
                                    {itemsFooter && itemsFooter.map((item) => {
                                          if (!item.link) return null;
                                          return (
                                                <Link key={item.id} href={item.link} className="hover:scale-110 transition">
                                                      {typeof item.icon === "function" && <item.icon />}
                                                </Link>
                                          )
                                    })}
                              </div>
                        </div>
                        {/* لوگو و توضیح کوتاه */}
                        <div className="col-span-2" >
                              <h3 className="text-xl font-semibold mb-2 text-white">امیدفضا</h3>
                              <p className="text-sm text-white/70 leading-relaxed">
                                    اولین شرکت خصوصی در طراحی و ساخت ماهواره‌های سنجشی و مخابراتی، طراح و مجری منظومه ماهواره‌های‌ دو نما، شتاب‌دهنده طرح‌های سخت‎‌‌ افزاری و نرم افزاری در فناوری‌ها و کاربردهای فضاپایه و فضاگرا‌ می‌باشد.</p>
                        </div>
                        {/* اطلاعات تماس */}
                        <div className="col-span-2" >
                              <h4 className="text-lg font-semibold mb-3 text-white">تماس با ما</h4>
                              <p className="text-sm text-white/70">
                                    تهران، محله هروی، حسین آباد، خیابان شهیداحمدآبادی، گلزار غربی، پلاک 8<br />
                              </p>
                              <p className="text-sm  text-white/70 my-3">
                                    {`تماس: ${convertToPersian("91551252")}-${convertToPersian("021")}`}
                              </p>
                              <p className="text-sm text-white/70">
                                    رایانامه: info@spaceomid.com
                              </p>
                        </div>
                  </div>

                  {/* کپی‌رایت */}
                  <div className="mt-10 text-center text-sm text-white/50 border-t border-white/10 pt-6">
                        © {new Date().getFullYear()} کلیه حقوق مادی و معنوی این سامانه متعلق به  <a href='https://spaceomid.com/' target='_blank' className='font-bold border-b mx-2 hover:text-gray-200 whitespace-nowrap'>شرکت امیدفضا</a> می‌باشد. هرگونه استفاده غیرمجاز پیگرد قانونی دارد.
                  </div>
            </footer>
      );
}
