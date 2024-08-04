import logo from "../assests/images/logo.png"
import React, { useRef } from 'react';

function Navbar() {
    const sidenavRef = useRef(null);

    const close = () => {
        if (sidenavRef.current) {
            sidenavRef.current.style.right = "-50%";
            sidenavRef.current.style.transition = "2s";
        }
    };

    const open = () => {
        if (sidenavRef.current) {
            sidenavRef.current.style.right = "0";
            sidenavRef.current.style.transition = "2s";
        }
    };

    return (
        <>
            <nav className="bg-white flex justify-between px-4 md:px-8 py-2 md:py-4 fixed top-0 w-full md:border-b shadow-sm z-10">
                <img className="hidden md:block" src={logo} alt="Logo" />
                <ion-icon data-Menu="Menu-Button" class="block md:hidden text-3xl z-10" name="menu" onClick={open}></ion-icon>
    
                <ul data-nav-options="navlinks-Container" className="max-md:bg-slate-300 max-md:w-[45vw] md:gap-20 items-center flex max-md:justify-evenly max-md:flex-col max-md:min-h-screen left-0 top-0 max-md:absolute max-md:hidden">
                    {/* <li>
                        <select className="bg-transparent" name="Product">
                            <option value="E-BIKE"><a href="#">PRODUCT</a></option>
                            <option value="E-BIKE"><a href="#">E-BIKE</a></option>
                            <option value="SMART HELMET"><a href="#">SMART HELMET</a></option>
                            <option value="SPORTS GEARS"><a href="#">SPORTS GEARS</a></option>
                            <option value="SAFETY GEARS"><a href="#">SAFETY GEARS</a></option>
                        </select>
                    </li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">CONTACT</a></li> */}
                </ul>

                <nav id="sidenav" ref={sidenavRef} className="fixed top-0 right-[-50%] w-[50%] h-full bg-white shadow-lg transition-transform duration-500">
                    <div className="flex justify-end p-4">
                        <p id="closenav" className="cursor-pointer text-xl" onClick={close}>X</p>
                    </div>
                    <ul id="sidenav_list" className="flex flex-col gap-4 p-4">
                    
                  <li className="bg-gray-600 outline-none border-none">
                        <select className="text-black bg-gray-300 border-none outline-none" name="Product">
                            <option value="E-BIKE" className="text-black"><a href="#"></a>Product</option>
                            <option value="E-BIKE"><a href="#">E-BIKE</a></option>
                            <option value="SMART HELMET"><a href="#">SMART HELMET</a></option>
                            <option value="SPORTS GEARS"><a href="#">SPORTS GEARS</a></option>
                            <option value="SAFETY GEARS"><a href="#">SAFETY GEARS</a></option>
                        </select>
                    </li>
                    
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">CONTACT</a></li>
                
                 
                    </ul>
                </nav>

                <div className="flex gap-3 items-center">
                    <button className="bg-white py-1 md:py-2 px-2 md:px-4 rounded-md shadow-md">LOG IN</button>
                    <button className="bg-[#42454A] py-1 md:py-2 px-2 md:px-4 rounded-md text-gray-200 shadow-md">SIGN UP</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
