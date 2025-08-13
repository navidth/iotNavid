import { testSattelite } from '@/lib/static/static'
import React from 'react'
import image1 from "../../../../public/images/satellite/Hod-Hod_2.jpg"
import image2 from "../../../../public/images/satellite/hodhod.png"
import Image from 'next/image'
const page = () => {
      const formatPercent = (p: number) => `${p}%`;
      const formatTemp = (t: number | undefined) =>
            t === undefined ? "—" : `${t}°C`;
      const data = testSattelite
      const datas = {
            powerMw: 4000,
            batteries: [
                  { id: 1, percent: 0, tempC: 0 },
                  { id: 2, percent: 0, tempC: 0 },
            ],
            obcTempC: 29,
            gnsTempC: 0,
            sbandTempC: 0,
            uhfTempC: 40,
            date: "2024/4/3",
            time: "14:25:13",
      };
      return (
            <div className='w-full p-8' >
                  <div>
                        <h1 className='font-bold text-4xl' >
                              {data[0].label}
                        </h1>
                  </div>
                  <div className='my-5 flex items-center justify-center gap-8'>
                        <div className='w-1/2'>
                              <div>
                                    <p>
                                          {data[0].about}
                                    </p>
                                    <p className='my-10' >
                                          ماهواره HOD-HOD-1A یک سیگنال بیکن را با استفاده از یک فرستنده-گیرنده LoRa در باندهای فرکانسی UHF و S-BAND ارسال خواهد کرد که شامل اطلاعاتی مانند وضعیت باتری، داده‌های واحد اندازه‌گیری اینرسی (IMU)، دماها و موارد دیگر خواهد بود.
                                    </p>
                              </div>
                              <div className="bg-gray-800 p-4 rounded-md shadow-md w-full max-w-3xl overflow-x-auto  text-left">
                                    <h2 className="text-lg font-semibold mb-4">TLEs</h2>
                                    <pre className="font-mono text-sm text-slate-200 whitespace-pre">
                                          {`2024-199AK

1 61768U 24199AK  25223.22730051  .00014399  00000-0  42488-3 0  9992
2 61768  97.3450  91.8313 0006705 346.3412  13.7649 15.35071202 86565`}
                                    </pre>
                              </div>
                              <div className="my-10 max-w-md bg-gray-800 rounded-lg shadow-md p-4 rtl" dir="rtl">
                                    <h3 className="text-2xl font-semibold mb-3">آخرین تله‌متری</h3>

                                    <div className="flex items-center gap-3 mb-3">
                                          <span className="text-sm opacity-70">🔋</span>
                                          <div className="text-sm">
                                                <div>
                                                      <span className="font-medium">توان خروجی:</span>{" "}
                                                      <span className="font-semibold">{datas.powerMw} میلی‌وات</span>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 mb-3">
                                          {datas.batteries.map((b) => (
                                                <div key={b.id} className="flex items-center justify-center gap-3">
                                                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-400">
                                                            <span className="text-sm font-medium">{b.id}</span>
                                                      </div>
                                                      <div className="flex-1 text-sm">
                                                            <div>
                                                                  <span className="font-medium">باتری {b.id}:</span>{" "}
                                                                  <span className="font-semibold">{formatPercent(b.percent)}</span>
                                                            </div>
                                                            <div className="text-xs text-gray-400">
                                                                  دما: <span className="font-medium">{formatTemp(b.tempC)}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-base mb-3">
                                          <div className="flex items-center gap-2">
                                                <span className='text-xl'>💻</span>
                                                <div>
                                                      <div className="font-medium">OBC</div>
                                                      <div className="text-xs text-gray-400">{formatTemp(datas.obcTempC)}</div>
                                                </div>
                                          </div>

                                          <div className="flex items-center gap-2">
                                                <span className='text-xl'>🛰️</span>
                                                <div>
                                                      <div className="font-medium">GNS</div>
                                                      <div className="text-xs text-gray-400">{formatTemp(datas.gnsTempC)}</div>
                                                </div>
                                          </div>

                                          <div className="flex items-center gap-2">
                                                <span className='text-xl'>📡</span>
                                                <div>
                                                      <div className="font-medium">S-Band</div>
                                                      <div className="text-xs text-gray-400">{formatTemp(datas.sbandTempC)}</div>
                                                </div>
                                          </div>

                                          <div className="flex items-center gap-2">
                                                <span className='text-xl'>📻</span>
                                                <div>
                                                      <div className="font-medium">UHF-Band</div>
                                                      <div className="text-xs text-gray-400">{formatTemp(datas.uhfTempC)}</div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                          <div className="flex items-center gap-2">
                                                <span className='text-xl'>📅</span>
                                                <span>{datas.date}</span>
                                          </div>

                                          <div className="flex items-center gap-2 text-gray-400">
                                                <span className='text-xl'>⏱️</span>
                                                <span>{datas.time}</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex items-center gap-8'>
                              <Image src={image1} className='aspect-square' width={300} alt='asd' />
                              <Image src={image2} className='aspect-square' width={300} alt='as' />
                        </div>
                  </div>
            </div>
      )
}

export default page