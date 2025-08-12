import React, { ReactNode } from 'react'
import { MdError } from 'react-icons/md'

type errorModalProps = { title?: string, children?: ReactNode, handle: () => void, titleButton: string }
const ErrorModal: React.FC<errorModalProps> = ({ title, children, handle, titleButton }) => {
      return (
            <div className="flex flex-col items-center justify-center h-64 bg-[#0b1425] text-white p-6 rounded-xl">
                  <MdError className='text-red-500 my-4' size={50} />
                  <h2 className="text-lg font-semibold mb-2">{title}</h2>
                  {children}
                  <button
                        onClick={handle}
                        className=" cursor-pointer px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm transition"
                  >
                        {titleButton}
                  </button>
            </div>
      )
}

export default ErrorModal