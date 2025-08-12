"use client"
import { MenuItems } from "@/types/type";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const FeatureCards = ({ items }: { items: MenuItems }) => {
      return (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
                        <motion.article
                              key={item.id}
                              className="flex flex-col items-center justify-start bg-[#111c2f] border border-[#1e293b] rounded-2xl shadow-lg p-6 h-full transition hover:shadow-xl hover:border-[#2c3e50]"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.5, delay: item.id * 0.2 }}
                        >
                              {typeof item.icon === 'string' || (item.icon && 'src' in item.icon) ? (
                                    <Image src={item.icon as string | StaticImageData} alt={`آیکون ${item.label}`}
                                          width={72}
                                          height={72}
                                          className="mb-4" />
                              ) : null}
                              <h3 className="text-xl font-bold text-[#ededed] text-center">
                                    {item.label}
                              </h3>
                              <p className="text-sm text-[#cbd5e1] text-center mt-3 leading-relaxed">
                                    {item.value}
                              </p>
                        </motion.article>
                  ))}
            </div>
      )
}

export default FeatureCards