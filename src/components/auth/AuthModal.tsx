import { useState } from 'react';
import dynamic from 'next/dynamic';

export type AuthModalType = "login" | "signup" | "forgetPass";
export type AuthComponentProps = {
      setAuthType: (type: AuthModalType) => void;
};

// Load components dynamically once (not in useEffect)
const Login = dynamic(() => import("./Login"));
const Signup = dynamic(() => import("./SignUp"));
const ForgetPass = dynamic(() => import("./ForgetPass"));

const AuthModal = () => {
      const [authType, setAuthType] = useState<AuthModalType>("login");

      const componentsMap: Record<AuthModalType, React.ComponentType<AuthComponentProps>> = {
            login: Login,
            signup: Signup,
            forgetPass: ForgetPass,
      };

      const Component = componentsMap[authType];

      return <Component setAuthType={setAuthType} />;
};

export default AuthModal;
