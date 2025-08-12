"use client";
import useWindow from "@/hooks/useWindow";
import { menuItems } from "@/lib/static/static";
import { usePathname } from "next/navigation";
import React, { JSX, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Button from "../common/Button";
import { IoLogIn } from "react-icons/io5";
import Modal from "../common/Modal";
import AuthModal from "../auth/AuthModal";
import Image from "next/image";
import logo from "../../../public/images/logo.svg"
function Navbar(): JSX.Element {
  const pathName = usePathname();
  const menu = menuItems;
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [open, setIsOpen] = useState<boolean>(false)
  const size = useWindow()
  const handleOpenMenu = () => {
    setIsOpen(!open)
  }
  return (
    <>
      {openModal && (
        <Modal title="ورود به سامانه" isOpen={openModal} onClose={() => setOpenModal(false)} >
          <AuthModal />
        </Modal>
      )}
      <nav className="fixed top-0 left-0 w-full border-b bg-asli border-asli shadow-md shadow-gray-900 z-[9999] ">
        <div className="flex flex-row-reverse flex-nowrap md:gap-4 items-center justify-between mx-auto p-4 px-4 md:px-6">
          {/* Brand */}
          <a
            href="https://spaceomid.com/"
            className="flex flex-row-reverse items-center space-x-3 rtl:space-x-reverse"
          >
            <Image alt="SpaceOmid |امید فضا" src={logo} className="w-40" loading="lazy" width={100} />
            <span className="sr-only">
              شرکت امید فضا
            </span>
          </a>
          {/* Right navbar */}
          <div className="flex gap-2 lg:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">

            <Button type="iconButton" typeButton="button" title="Open main menu" icon={FiMenu} style="lg:hidden" iconSize={24} handle={handleOpenMenu} />

            {size.width && size.width > 365 ? (
              <Button type="primary" title="ورود | عضویت" handle={() => setOpenModal(true)} />
            ) : (
              <Button type="iconButton" title="ورود | عضویت" icon={IoLogIn} iconSize={24}  handle={() => setOpenModal(true)} />
            )}

          </div>
          {/* Items Menu */}
          {size.width && size.width > 1200 ? (
            <MenuDesktop menu={menu} pathName={pathName} />
          ) : (
            <>
              {/* Overlay */}
              {open && (
                <div
                  className="fixed inset-0 backdrop-blur-md z-30"
                  onClick={handleOpenMenu}
                />
              )}

              {/* Drawer */}
              <MenuMobile menu={menu} pathName={pathName} handleOpen={handleOpenMenu} open={open} />
            </>
          )}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
