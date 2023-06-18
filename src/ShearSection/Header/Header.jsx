import React, { useContext } from 'react';
import { FaSearch, FaUserCircle, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import useContextProvider from '../../CustomHook/useContextProvider';

const Header = () => {


    const { user, logOut} = useContextProvider();



    const logOutUser= () =>{
        logOut()
    }

    return (
        <div className='mainContainer relative  '>
            <div className="navbar   h-[100px] text-white absolute z-10 w-full">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <a className="normal-case font-bold italic text-5xl">Fashion Store</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><Link>Home    </Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Shop</summary>
                                <ul className="p-2 text-black">
                                    <li><Link>Shop 1     </Link></li>
                                    <li><Link>Shop 2    </Link></li>
                                    <li><Link>Shop 3     </Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link>Collection</Link> </li>
                        <li><Link to='/blog'>BLog </Link> </li>
                        <li><Link>Contact Us</Link></li>
                        {
                            user? <><li onClick={logOutUser}><Link>LogOut</Link></li></> : <></>
                        }
                        <li><Link to='/admin-panel'>Dashboard</Link></li>
                        


                    </ul>
                </div>


                <div className="navbar-end pe-5">
                    <ul className='flex gap-8 text-2xl '>
                        <li><FaSearch></FaSearch></li>

                        {
                            user ?
                                <>
                                    <FaUserCircle></FaUserCircle>

                                </>
                                :
                                <>
                                    <Link to='/register'><FaUserCircle></FaUserCircle></Link>

                                </>
                        }


                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary -mr-3">0+</span>
                            <li className=''><FaHeart></FaHeart> </li>
                        </div>

                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary -mr-3">0+</span>
                            <li><FaShoppingBag></FaShoppingBag>  </li>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;