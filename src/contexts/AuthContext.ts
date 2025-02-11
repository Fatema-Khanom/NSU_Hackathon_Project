import { createContext } from "react";
import { LoginData, OtpData, RegisterData } from "../utils/details";
import authService from "../services/authService";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (data: LoginData) => boolean;
    logout: () => void;
    createAccount: (data: RegisterData) => boolean;
    checkOTP: (data: OtpData) => boolean;
    resendOtp: (email: string) => boolean;
    forgotPassword: (email: string) => boolean;
  }

  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  const authSystem =  authService;

  export const AuthProvider = ({ children }: { children: React.ReactNode }) => {  

    const 



    }
