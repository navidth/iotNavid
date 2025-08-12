import { MdEmail, MdKey } from "react-icons/md"
import InputField from "../common/InputField"
import Button from "../common/Button"
import { AuthModalType } from "./AuthModal";
type forgetPass = {
      setAuthType: (type: AuthModalType) => void;
}
const ForgetPass = ({ setAuthType }: forgetPass) => {
      const handleChange = () => {
            setAuthType("signup")
      }
      return (
            <div>
                  <form className="max-w-sm mx-auto">
                        <InputField label="ایمیل" type="email" icon={MdEmail} placeholder="ایمیل خود را وارد کنید..." />
                        <InputField label="رمز عبور" type="password" icon={MdKey} placeholder="رمز عبور خود را وارد کنید..." />
                        <div className="w-full flex justify-center" >
                              <Button type="primary" title="عضویت در سامانه" typeButton="submit" handle={() => console.log("first")} style="" />
                        </div>
                  </form>
                  {/* footer modal */}
                  <div className="w-full">
                        <div className="flex items-center justify-center gap-5">
                              <a onClick={handleChange} className="underline text-blue-600 ">
                                    ورود به سامانه
                              </a>
                        </div>
                  </div>
            </div>

      )
}

export default ForgetPass