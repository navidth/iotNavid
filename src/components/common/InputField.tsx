import React, { ReactNode, useState } from "react"
import { IconType } from 'react-icons';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

type inputProps = {
      icon?: IconType
      label: string
      placeholder?: string
      styleInput?: string
      children?: ReactNode
      type?: "text" | "file" | "password" | "email" | "number" | "tel"
}

const InputField: React.FC<inputProps> = ({ icon: IconComponent, label, placeholder, children, styleInput, type = "text" }) => {
      const [show, setShow] = useState<boolean>(false)

      const handleShowPassword = () => {
            setShow(!show)
      }
      const isPassword = type === "password"

      return (
            <div className="my-3">
                  <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium  text-gray-200 ">{label}</label>
                  <div className="relative mb-6">
                        {IconComponent &&
                              <div className="absolute inset-y-0 text-gray-500 start-0 flex items-center ps-3 pointer-events-none">
                                    <IconComponent size={20} />
                              </div>
                        }
                        <input type={isPassword ? (show ? "text" : "password") : type} id="input-group-1" className={`bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-400 focus:bg-gray-200 focus:border-gray-400 focus-visible:outline-0 block ps-14 p-2.5 w-full ${styleInput}`} placeholder={placeholder} />
                        {isPassword &&
                              <div className="absolute inset-y-0 text-gray-500 end-2 flex items-center ps-3 cursor-pointer hover:text-gray-600 duration-300 ">
                                    {show ? (
                                          <BiSolidHide size={20} onClick={handleShowPassword} />
                                    ) : (

                                          <BiSolidShow size={20} onClick={handleShowPassword} />
                                    )}
                              </div>}
                  </div>
                  {children}
            </div>
      )
}

export default InputField