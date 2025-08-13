import Card from "@/components/common/Card"
import { testSattelite } from "@/lib/static/static"

const page = () => {
      const data = testSattelite
      return (
            <div className="px-5 grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-10 ">
                  <Card data={data[0]} />
            </div>
      )
}

export default page