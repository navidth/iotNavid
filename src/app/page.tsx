import Map from "@/components/map/Map";
// import headerImage from "../../public/images/imageHeader.png"
import NavbarMain from "@/components/navbar/NavbarMain";
import FeatureCards from "@/components/low-level/FeatureCards";
import GetStarted from "@/components/low-level/GetStarted";
import { MenuItems } from "@/types/type";
import icon1 from "../../public/images/featureMain/Create four icons fo.png"
import icon2 from "../../public/images/featureMain/Create four icons fo2.png"
import icon3 from "../../public/images/featureMain/Create four icons fo3.png"
import icon4 from "../../public/images/featureMain/Create four icons fo4.png"
import { menuStickyMain } from "@/lib/static/static";
import MyGlobe from "@/components/map/MyGlobe";
export default function Home() {
  const menuSticky = menuStickyMain
  const itemsGetStart: MenuItems = [
    {
      id: 1,
      label: "یک مودم ماهواره‌ای بگیرید",
      value: "یک مودم مناسب انتخاب کرده و پیشنهاد می‌کنیم از فروشنده مجاز خریداری کنید.",
    },
    {
      id: 2,
      label: "انتخاب برنامه",
      value: "بسته دیتا و پلن مناسب پروژه‌تان را انتخاب و فعال‌سازی کنید.",
    },
    {
      id: 3,
      label: "طراحی و نصب",
      value: "با راهنمایی مهندسین ما، تجهیزات را نصب و راه‌اندازی کنید.",
    },
    {
      id: 4,
      label: "شروع به کار",
      value: "اکنون آماده‌اید؛ از اینترنت اشیاء ماهواره‌ای ما استفاده کنید.",
    },
  ];
  const itemsReport: MenuItems = [
    {
      id: 1,
      label: "کم‌مصرف",
      value: "طراحی‌شده با پروتکل‌های بهینه برای مصرف پایین انرژی و عملکرد پایدار در طولانی‌مدت.",
      icon: icon1,
    },
    {
      id: 2,
      label: "مقرون‌به‌صرفه",
      value: "تولید مبتنی بر دانش بومی و توان داخلی، با هزینه‌ای اقتصادی و دسترسی آسان برای همه.",
      icon: icon2,
    },
    {
      id: 3,
      label: "ارتباط دوطرفه",
      value: "ارتباط ایمن و اختصاصی بین دستگاه‌ها و سرور، با قابلیت دریافت و ارسال اطلاعات.",
      icon: icon3,
    },
    {
      id: 4,
      label: "پوشش سراسری",
      value: "اتصال نقطه‌به‌نقطه در تمام مناطق؛ بدون محدودیت جغرافیایی، حتی در مناطق دورافتاده.",
      icon: icon4,
    },
  ];
  return (
    <div className=" ">
      {/* header */}
      <header className=" w-full" role="banner">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-10" >
          <div className=" w-full md:w-1/2 mt-4"> 
            {/* <Image priority  src={headerImage} className="w-full mix-blend-lighten " alt="نقشه جهانی اینترنت اشیاء با اتصال ماهواره‌ای به شبکه برق، کشاورزی، پهپادها، پایش نفت و ارتباطات جهانی." /> */}
          <MyGlobe /> 
          </div>
          <div className="w-full md:w-1/2 text-center md:text-center sm:mt-0 mt-8">
            <h1 className="sm:text-2xl text-3xl font-bold text-white">
              اتصال امن ماهواره‌ای <span className="text-primary">امیدفضا</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              اینترنت اشیاء امن، اختصاصی برای همه صنایع
            </p>
          </div>
        </div>
      </header>


      {/* <!-- Navbar --> */}
      <NavbarMain items={menuSticky} />
      {/* map */}
      <div className="w-full flex items-center justify-center flex-col gap-6 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center text-[#ededed]" >
            نمایش آنلاین موقعیت ماهواره‌ها
          </h1>
        </div>
        <Map />
      </div>

      {/* Reports */}
      <section
        aria-labelledby="features-heading"
        className="w-full max-w-screen-xl mx-auto px-4 md:px-8 mt-12 md:my-24"
      >
        <h1
          id="features-heading"
          className="text-2xl md:text-4xl font-bold text-center text-[#ededed] mb-8 md:mb-12"
        >
          ویژگی‌های کلیدی سامانه
        </h1>
        <FeatureCards items={itemsReport} />
      </section>

      {/* get started */}
      <section
        aria-labelledby="get-started-heading"
        className="w-full max-w-screen-xl mx-auto px-4 md:px-8 my-20 md:my-32"
      >
        <div className="flex items-center flex-col gap-6 justify-center mb-14">
          <h1
            id="get-started-heading"
            className="text-2xl md:text-4xl font-bold text-center text-[#ededed]"
          >
            قدم‌به‌قدم شروع کنید
          </h1>
          <p className="text-center text-base md:text-lg text-[#cbd5e1] max-w-2xl leading-loose">
            چه پژوهشگر باشید یا یک سازمان بزرگ، فقط با چند مرحله ساده می‌توانید اینترنت اشیاء امن را وارد پروژه خود کنید.
          </p>
        </div>
        <GetStarted items={itemsGetStart} />
      </section>
    </div >
  );
}
