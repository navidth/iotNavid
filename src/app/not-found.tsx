import Link from "next/link";

export default function NotFound() {

      return (
            <div className="min-h-[60vh] bg-[#0B1425] text-[#ededed] flex items-center justify-center p-6">
                  <div className=" w-full flex items-center justify-center lg:flex-row flex-col max-w[1000px]   gap-8 md:gap-12">
                        {/* سمت راست */}
                        <aside className="bg-gradient-to-b from-white/5 to-white/5 rounded-xl p-7 shadow-[0_12px_40px_rgba(2,8,20,0.6)] flex items-center justify-center min-h-[260px] w-1/3 ">
                              <div className="w-[240px] h-[240px] relative flex items-center justify-center">
                                    {/* SVG */}
                                    <svg width="170" height="170" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                          <defs>
                                                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                                                      <stop offset="0" stopColor="#0ff" stopOpacity="0.95" />
                                                      <stop offset="1" stopColor="#6be5ff" stopOpacity="0.8" />
                                                </linearGradient>
                                          </defs>
                                          <rect x="8" y="20" rx="12" ry="12" width="104" height="72" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                                          <rect x="22" y="32" rx="6" ry="6" width="76" height="44" fill="url(#g2)" opacity="0.06" />
                                          <g transform="translate(30,42)" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.3">
                                                <path d="M0 6 L24 6" strokeLinecap="round" />
                                                <path d="M0 12 L24 12" strokeLinecap="round" />
                                          </g>
                                          <rect x="52" y="62" width="16" height="6" rx="2" fill="rgba(255,255,255,0.04)" />
                                    </svg>

                                    {/* چراغ چشمک‌زن */}
                                    <div className="absolute top-7 right-7 w-[18px] h-[18px] rounded-full bg-[#00d1ff] shadow-[0_0_16px_rgba(0,209,255,0.24)] animate-[blink_1.8s_infinite]" />

                                    <style>{`
               @keyframes blink {
                 0%,40% {transform:scale(1);opacity:1}
                 50% {transform:scale(0.6);opacity:0.4}
                 100% {transform:scale(1);opacity:1}
               }
             `}</style>

                                    {/* موج‌های پایین */}
                                    <div className="absolute left-8 bottom-8 flex gap-1.5 items-end">
                                          {[8, 14, 22].map((h, i) => (
                                                <div
                                                      key={i}
                                                      className="w-[6px] rounded-sm bg-white/30"
                                                      style={{
                                                            height: `${h}px`,
                                                            transformOrigin: "bottom",
                                                            animation: `ripple 1.4s infinite ${i * 0.2}s`
                                                      }}
                                                />
                                          ))}
                                    </div>

                                    <style>{`
               @keyframes ripple {
                 0% {transform:scaleY(0.7);opacity:0.5}
                 50% {transform:scaleY(1.2);opacity:1}
                 100% {transform:scaleY(0.7);opacity:0.5}
               }
             `}</style>
                              </div>
                        </aside>
                        {/* متن */}
                        <div className="p-6 text-right">
                              <div className="inline-block bg-white/5 text-[#97a3b8] px-3 py-1 rounded-full text-[13px] mb-3">
                                    اوپسسسسسس!
                              </div>

                              <h1 className="text-[44px] my-2 whitespace-normal lg:whitespace-nowrap ">۴۰۴ — صفحه مورد نظر یافت نشد! </h1>
                              <p className="text-[#97a3b8] leading-relaxed flex flex-col gap-2">
                                    <span>
                                          ممکن است آدرس اشتباه یا قدیمی باشد.
                                    </span>
                                    <span>
                                          در صورت بروز مشکل لطفاً با تیم پشتیبانی تماس بگیرید.
                                    </span>
                              </p>

                              <div className="mt-4 flex gap-3">
                                    <Link
                                          href="/"
                                          className="px-4 py-3 rounded-lg font-semibold cursor-pointer bg-gradient-to-r from-[#00d1ff] to-[#6be5ff] hover:bg-gradient-to-r duration-700 hover:from-[#02aad0] hover:to-[#6be4ffdb] text-[#05202a]"
                                    >
                                          بازگشت به صفحه اصلی
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}