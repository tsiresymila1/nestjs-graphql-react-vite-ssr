import * as React from "react";
import {AuthContextType} from "../@types/auth";

const AuthContext = React.createContext<AuthContextType>(null!);
export const AuthContextProvider =  AuthContext.Provider;
export const useAuth =  () => {
    return React.useContext(AuthContext);
}
