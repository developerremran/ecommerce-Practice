
import useContextProvider from '../../CustomHook/useContextProvider';

const AdminDashboard = () => {
    const {user} = useContextProvider()
    console.log(user);
    return (
        <div>
  
            <h2 className='text-6xl font-bold text-center mt-28'>Welcome to Admin Panel  </h2>
        </div>
    );
};

export default AdminDashboard;