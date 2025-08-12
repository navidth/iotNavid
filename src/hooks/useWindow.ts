import { useEffect, useState } from "react"

function useWindow() {
      const [width, setWidth] = useState<number | null>(null)
      const [height, setHeight] = useState<number | null>(null)
      useEffect(() => {
            const handleResize = () => {
                  setWidth(window.innerWidth)
                  setHeight(window.innerHeight)
            }
            window.addEventListener("resize", handleResize)
            handleResize()
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      return { width, height }

}

export default useWindow