import { useQuery } from "@tanstack/react-query";
import useContextProvider from "../../CustomHook/useContextProvider";

const ManageItem = () => {
    const {user} = useContextProvider()
    const { data: carts = [], refetch } = useQuery(['carts'], async () => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return res.json()
    })
    console.log(carts);

     
    return (

        <div>

            
         


        </div>
    );
};

export default ManageItem;