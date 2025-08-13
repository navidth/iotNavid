import Link from 'next/link'
import React from 'react'
import { MenuItems } from '@/types/type';

function MenuDesktop({ menu, pathName }: { menu: MenuItems, pathName: string }) {
      return (
            <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
            >
                  <ul
                        dir="rtl"
                        className="flex font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "
                  >
                        {menu &&
                              menu.map((item) => {
                                    if (!item.link) return false
                                    return (
                                          <li key={item.id}>
                                                <Link
                                                      href={item.link}
                                                      className={`py-2 h-4 px-3 border-[#00d1ff] hover:border-b-2 hover:text-hover ${item.link === pathName
                                                            ? "text-[#00d1ff] border-b-2"
                                                            : "text-asli"
                                                            } `}
                                                      aria-current="page"
                                                >
                                                      {item.label}
                                                </Link>
                                          </li>
                                    )
                              })}
                  </ul>
            </div>
      )
}

export default MenuDesktop