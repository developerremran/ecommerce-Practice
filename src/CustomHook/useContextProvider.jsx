import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useContextProvider = () => {
     const auth = useContext(AuthContext)

     return auth
};

export default useContextProvider;