"use client"
import { convertToPersian } from "@/lib/Helpers/funcHelper";
import { MenuItems } from "@/types/type";
import { motion } from "framer-motion";
import React, { FC } from "react";

export type GetStartedProps = {
      items: MenuItems;
};
const GetStarted: FC<GetStartedProps> = ({ items }) => {
      return (


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items && items.map((item, index) => (
                        <motion.article
                              key={item.id}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              className="flex flex-col items-center justify-start bg-[#111c2f] border border-[#1e293b] rounded-2xl shadow-lg p-6 h-full transition hover:shadow-xl hover:border-[#2c3e50]"
                        >
                              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold shadow-md mb-4">
                                    {convertToPersian(String(item.id))}
                              </div>
                              <h3 className="text-lg md:text-xl font-semibold text-[#ededed] text-center">
                                    {item.label}
                              </h3>
                              <p className="text-sm text-[#cbd5e1] text-center mt-3 leading-relaxed">
                                    {item.value}
                              </p>
                        </motion.article>
                  ))}
            </div>
      );
};

export default GetStarted;
