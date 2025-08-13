import Image from "next/image"
import image from "../../../public/images/satellite/Hod-Hod_2.jpg"
import Link from "next/link"
type CardProps = {
      id: number,
      link: string,
      label: string,
      about: string,
      lunch: number,
      lastPacket: number,
      isActive: boolean
}
const Card = ({ data }: { data: CardProps }) => {
      return (
            <div className="max-w-xs bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <Link href={`/satellites/${data.link}`}>
                        <Image className="rounded-t-lg h-[60%] " src={image} alt={data.label} />
                  </Link>
                  <div className="p-5 overflow-y-auto h-[250px] ">
                        <Link href={`/satellites/${data.link}`}>
                              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{data.label}</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.about}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              <span className="font-bold text-white ml-3">زمان پرتاب: </span>
                              <span>
                                    {new Date(data.lunch).toLocaleDateString("fa-IR", {
                                          day: "numeric",
                                          year: "numeric",
                                          month: "long",
                                          hour: "numeric",
                                          minute: "numeric",
                                          second: "numeric"
                                    })}
                              </span>
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              <span className="font-bold text-white ml-3">آخرین پکت دریافتی: </span>
                              <span>
                                    {new Date(data.lastPacket).toLocaleDateString("fa-IR", {
                                          day: "numeric",
                                          year: "numeric",
                                          month: "long",
                                          hour: "numeric",
                                          minute: "numeric",
                                          second: "numeric"
                                    })}
                              </span>
                        </p>

                  </div>
                  <div className="flex items-center justify-start p-3 mb-6">
                        <Link href={`/satellites/${data.link}`} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ${data.isActive ? "hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" : "hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-500 opacity-75 dark:focus:ring-red-600"}`}>
                              {data.isActive ? "فعال" : "غیرفعال"}

                        </Link>
                  </div>
            </div>

      )
}

export default Card