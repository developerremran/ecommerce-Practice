import { useQuery } from "@tanstack/react-query";
import useContextProvider from "./useContextProvider";


const useUser = () => {
   const {loading} = useContextProvider()
    const { data: user = [] ,refetch} = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [user, refetch]
};

export default useUser;