import React, {useEffect} from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import { Link,Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { activeUser, loginStatus } from "../slices/userSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Root() {
    document.body.style = 'background: #F7F9FB;';
    let loginInfo = useSelector((state) => state);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => { 
         if(loginInfo.userInfo.status == 0){
             navigate("/login");
            }
    }, []);

    let handleLogout = () => {
        dispatch(activeUser(null));
        localStorage.setItem("user", null);            
        dispatch(loginStatus(0));
        localStorage.setItem("status", 0);   
        navigate("/login");
    }

  return (  
     <>
        <nav className="px-10 py-5 border-gray-200 rounded bg-white">
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
            <div className="max-w-navContainer flex flex-wrap items-center justify-between mx-auto">
                <Link className='flex items-center' to='/'>
                    <img src="/logo.png" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> 
                </Link>
                <a href="" className="flex items-center">
                </a> 
                <button onClick={handleLogout} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> 
                <AiOutlineLogout />
                </button>
            </div>
        </nav>
        <div className='max-w-mainContainer mx-auto mt-[40px]'>
            <Outlet/>
        </div>
     </> 
  )
}

export default Root


{/*  */}
