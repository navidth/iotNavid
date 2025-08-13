import { MdEmail, MdKey } from "react-icons/md"
import InputField from "../common/InputField"
import Button from "../common/Button"
import { AuthModalType } from "./AuthModal";

type LoginProps = {
  setAuthType: (type: AuthModalType) => void;
}
const Login = ({ setAuthType }: LoginProps) => {
  const handleChange = (type:AuthModalType) => {
    setAuthType(type)
  }
  return (
    <div>
      <form className="max-w-sm mx-auto mb-10">
        <InputField label="ایمیل" type="email" icon={MdEmail} placeholder="ایمیل خود را وارد کنید..." />
        <InputField label="رمز عبور" type="password" icon={MdKey} placeholder="رمز عبور خود را وارد کنید..." />
        <div className="w-full flex justify-center" >
          <Button type="primary" title="ورود به سامانه" typeButton="submit" handle={() => console.log("first")} style="w-full flex justify-center" />
        </div>
      </form>
      {/* footer modal */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-5">
          <a onClick={()=>{handleChange("signup")}} className="text-blue-600 hover:underline cursor-pointer ">
            ثبت‌نام در سامانه
          </a>
           <a onClick={()=>handleChange("forgetPass")} className="text-blue-600 hover:underline cursor-pointer ">
             فراموشی رمز عبور
          </a>
        </div>
      </div>
    </div>

  )
}

export default Login