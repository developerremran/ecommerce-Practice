import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useContextProvider from '../../CustomHook/useContextProvider';
import AdminLayout from '../../MainLayout/AdminLayout';
import useAdmin from '../../CustomHook/useAdmin';

const Dashboard = () => {
    const { user } = useContextProvider();
    // console.log(user);
 
    // TODO : SET THE AFTER IN ADMIN SECTION LOGIC 
    const isAdmin = true;
    // const [isAdmin, isAdminLoading] = useAdmin()

    return (
        <div className='max-w-full'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-28 mt-36">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-full h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className='text-4xl'><Link to='/'><FaUserCircle></FaUserCircle></Link></li>
                        <hr className='h-[2px] bg-gray-400' />
                    
                       {
                        isAdmin? 
                        <>
                        <li className='text-xl font-bold'><Link to='admin-dashboard'>Admin Dashboard</Link></li>
                        <hr className='h-[2px] bg-gray-400' />
                        <li className='text-xl font-bold'><Link to='manage-user'>Manage User</Link></li>
                        <hr className='h-[2px] bg-gray-400' />
                        <li className='text-xl font-bold'><Link to='item-add'>Add item</Link></li>
                        <hr className='h-[2px] bg-gray-400' />

                        <li className='text-xl font-bold'><Link to='/'>Post Upload</Link></li>
                        </> 
                        :
                        <>
                        <li className='text-xl font-bold'><Link to='/'>Home</Link></li>
                        <hr className='h-[2px] bg-gray-400' />
                        <li className='text-xl font-bold'><Link to='manage-item'>My Item</Link></li>
                        <hr className='h-[2px] bg-gray-400' />
                        <li className='text-xl font-bold'><Link to='/'>Payment</Link></li>
                        </>
                       }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;