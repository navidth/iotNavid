"use client";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./MyMap"), {
      ssr: false,
});

function Map() {
      return (
            <div className="w-full h-[400px] sm:h-[500px] flex items-center justify-center ">
                  <DynamicMap />
            </div>
      )
}

export default Map