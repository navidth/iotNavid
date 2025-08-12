import { MenuItems } from "@/types/type";
import { MdOutlineShoppingCart, MdSatelliteAlt } from "react-icons/md";
import { RiHome5Fill, RiRadarFill } from "react-icons/ri";

export const menuItems: MenuItems = [
  {
    id: 1,
    link: "/",
    label: "خانه",
    icon: RiHome5Fill
  },
  {
    id: 2,
    link: "/products",
    label: "محصولات",
    icon: MdOutlineShoppingCart
  },
  {
    id: 3,
    link: "/stations",
    label: "ایستگاه‌ها",
    icon: RiRadarFill
  },
  {
    id: 4,
    link: "/packet",
    label: "پکت‌ها",
    icon: RiRadarFill
  },
  {
    id: 5,
    link: "/satellites",
    label: "ماهواره‌ها",
    icon: MdSatelliteAlt,
  }
];
// test for design
export const testSattelite = [
  {
    id: 1,
    link: "HOD-HOD-1A",
    label: "HOD-HOD-1A",
    about: "HOD-HOD-1A اولین ماهواره در منظومه‌ی «HOD-HOD» (IOD) است.این ماهواره یک CubeSat با ابعاد ۱۰ × ۱۰ × ۳۰ سانتی‌متر (۳U) بوده و وزن آن ۴ کیلوگرم است و طول عمر عملیاتی آن ۴ سال می‌باشد.",
    lunch: 1730891520000,
    lastPacket: 1746815280000,
    isActive: false
  }
]
export const menuStickyMain: MenuItems = [
  {
    id: 1,
    label: "کشاورزی",
    link: "/farming"
  },
  {
    id: 2,
    label: "پهپاد",
    link: "/drone"
  },
  {
    id: 3,
    label: "حمل‌ و نقل",
    link: "/transportation"
  },
  {
    id: 4,
    label: "صنعت برق",
    link: "/electrical"
  },
]