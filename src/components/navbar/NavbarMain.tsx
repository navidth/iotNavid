"use client"
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuItems } from "@/types/type";


const NavbarMain = ({ items }: { items: MenuItems }) => {

      const [isStuck, setIsStuck] = useState(false);
      const navRef = useRef(null);
      useEffect(() => {
            const observer = new IntersectionObserver(
                  ([entry]) => {
                        setIsStuck(!entry.isIntersecting);
                  },
                  {
                        root: null,
                        rootMargin: "-96px 0px 0px 0px",
                        threshold: 0,
                  }
            );

            if (navRef.current) {
                  observer.observe(navRef.current);
            }

            return () => {
                  if (navRef.current) {
                        observer.unobserve(navRef.current);
                  }
            };
      }, []);
      return (
            <>
                  <div ref={navRef} className="h-1 pointer-events-none"></div>
                  <nav
                        id="navigationMain"
                        className={`flex-no-wrap sticky mt-8 mb-16 overflow-x-auto md:overflow-x-hidden md:hover:overflow-x-auto duration-300 z-[999] flex items-center justify-between py-5 bg-asli  ${isStuck ? "rounded-none w-screen top-24" : "top-16 md:rounded-full  mx-auto lg:w-[1069.600px] md:w-[550px] w-auto "} `} style={{ boxShadow: "rgba(80, 80, 80, 0.2) 0px 2px 8px 0px" }}>
                        <div className="ml-4">
                              <p className="flex items-center gap-4 text-sm md:ps-10 ps-3 text-[#00d1ff]">
                                    <span className="whitespace-nowrap" >
                                          یک صنعت را انتخاب کنید
                                    </span>
                                    <span>
                                          <MdKeyboardArrowLeft size={16} />
                                    </span>
                              </p>
                        </div>
                        {/* <!-- Left navigation links --> */}
                        <ul
                              className="!flex items-center gap-6 justify-evenly w-full ml-6"
                        >
                              {items && items.map((item) => {
                                    if (!item.link) return null
                                    return (
                                          <li key={item.id} className="lg:mb-0 lg:pe-2">
                                                <Link
                                                      className="whitespace-nowrap text-asli transition duration-200 hover:ease-in-out motion-reduce:transition-none lg:px-2  "
                                                      href={item.link}
                                                >{item.label}</Link>
                                          </li>
                                    )
                              })}
                        </ul>
                  </nav>
            </>
      )
}

export default NavbarMain