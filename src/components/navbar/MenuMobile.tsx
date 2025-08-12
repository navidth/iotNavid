import { MenuItems } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdClose } from 'react-icons/md'
import logo from "../../../public/images/logo.svg"

function MenuMobile({ menu, pathName, open, handleOpen }: { menu: MenuItems, pathName: string, open: boolean, handleOpen: () => void }) {
      return (
            <div
                  dir="rtl"
                  id="drawer-navigation"
                  className={`fixed top-0 right-0 z-full h-screen duration-500 overflow-y-auto transition-transform bg-asli w-64 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                  aria-labelledby="drawer-navigation-label"
            >
                  <div className="flex items-center justify-between w-full p-2">
                        <a
                              href="https://spaceomid.com/"
                              className="flex flex-row-reverse items-center space-x-3 rtl:space-x-reverse"
                        >
                              <Image alt="SpaceOmid |امید فضا" src={logo} className="w-32" loading="lazy" width={100} />
                              <span className="sr-only">
                                    شرکت امید فضا
                              </span>
                        </a>
                        <button
                              type="button"
                              data-drawer-hide="drawer-navigation"
                              aria-controls="drawer-navigation"
                              className="text-gray-400 bg-transparent hover:bg-gray-800 rounded-lg text-sm w-8 h-8 inline-flex items-center cursor-pointer justify-center"
                              onClick={handleOpen}
                        >
                              <MdClose size={24} />
                              <span className="sr-only">Close menu</span>
                        </button>
                  </div>

                  <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                              {menu?.map((item) => {
                                    if (!item.link) return null
                                    return (
                                          <li key={item.id} className={`flex flex-row-reverse justify-center items-center  p-2  ${item.link === pathName
                                                ? " text-white  bg-blue-600 rounded-none"
                                                : "hover:bg-gray-800"
                                                }  `} >
                                                <Link
                                                      href={item.link}
                                                      className={`block w-full px-3`}
                                                      aria-current="page"
                                                      onClick={handleOpen} // optionally close on click
                                                >
                                                      {item.label}
                                                </Link>
                                                {typeof item.icon === "function" && <item.icon size={24} className={`${item.link === pathName
                                                      ? " text-white"
                                                      : " text-gray-500"
                                                      }`} />}
                                          </li>
                                    )

                              })}
                        </ul>
                  </div>
            </div>
      )
}

export default MenuMobile