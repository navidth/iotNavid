"use client"

import dynamic from "next/dynamic";

const GlobeClient = dynamic(() => import("./GlobeClient"), { ssr: false });

const MyGlobe = () => {
      return (
            <GlobeClient />
      )
}

export default MyGlobe