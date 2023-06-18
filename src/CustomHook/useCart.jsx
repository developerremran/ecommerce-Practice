
import { useQuery } from '@tanstack/react-query';
import useContextProvider from './useContextProvider';
import useAxiosSecure from './useAxiosSecure.JSX';

const useCart = () => {
    const { user, loading } = useContextProvider();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    
    const { data: cart = [] ,refetch} = useQuery({
        queryKey: ['carts'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/carts')
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch];

}
export default useCart;