import { ButtonProps } from '@/types/type'
import React from 'react'
import { IconType } from 'react-icons';

const getButtonType = (type: ButtonProps["type"]) => {
      switch (type) {
            case "primary":
                  return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";
            case "secondary":
                  return "text-gray-700 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400";
            case "tertiary":
                  return "text-blue-700 border border-blue-700 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300";
            case "iconButton":
                  return "rounded-full bg-transparent hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-400";
            default:
                  return "";
      }
}

const Button: React.FC<ButtonProps> = ({ handle, width, title, color, type, style, icon: IconComponent, disabled = false, iconColor, iconSize, typeButton = "button" }) => {
      const customStyle: React.CSSProperties = {
            width,
            backgroundColor: color,
      };
      return (
            <button
                  onClick={handle}
                  disabled={disabled}
                  type={typeButton}
                  className={`font-medium duration-500 rounded-lg ${disabled ? "pointer-events-none" : "cursor-pointer"} text-base p-2  text-center flex items-center gap-4 ${getButtonType(type)} ${style}`}
                  style={customStyle}
            >
                  {IconComponent && <IconComponent size={iconSize} className={`${iconColor}`} />}
                  {type !== 'iconButton' ? title : <span className='sr-only' >{title}</span>}
            </button>
      )
}

export default Button