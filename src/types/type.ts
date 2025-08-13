import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { UrlObject } from "url";

export type MenuItems = Array<{
      id: number;
      label?: string;
      icon?: StaticImageData | IconType;
      link?: string | UrlObject;
      value?: string;
}>

export interface ButtonProps {
      handle: () => void
      type: "primary" | "secondary" | "tertiary" | "default" | "iconButton",
      title: string
      typeButton?: "submit" | "button"
      width?: number | string
      color?: string
      style?: string
      icon?: IconType
      disabled?: boolean
      iconColor?: string
      iconSize?: string | number
}