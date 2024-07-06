import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar()
{
    return(
        <div>
            <div className="bg-sky-100 text-black text-center p-3 flex gap-x-2 justify-center max-[600px]:flex max-[600px]:flex-row max-[600px]:justify-between ">
                <div className="max-[600px]:text-[13px] max-[600px]:w-[300px] ">Navigate Your Ideal Career Path with Tailored Expert Advice</div> 
                <span className="text-blue-600 cursor-pointer inline">Contact Expert</span>
            </div>

            <div className="max-w-[1200px] text-center py-6 px-2 flex flex-row justify-between mx-auto">

                {/* Left div */}
                <div className="flex flex-row gap-x-6 items-center">

                    {/* Logo */}
                    <div>
                        <img className="w-[100px]" src="pics/logo.png"></img>
                    </div>

                    <div className="bg-blue-600 text-white hidden min-[900px]:flex  flex-row items-center gap-x-2 p-2 px-4 rounded-lg">
                        <div>Courses</div>
                        <IoIosArrowDown />
                    </div>

                </div>

                {/* Right div */}
                <div className="flex flex-row items-center gap-x-5">
                    <div className="hidden min-[900px]:flex">Refer And Earn</div>
                    <div className="hidden min-[900px]:flex">Resources</div>
                    <div className="hidden min-[900px]:flex">About Us</div>
                    <div className="bg-gray-200 text-black rounded-md p-2 px-4">Login</div>
                    <div className="bg-blue-600 text-white hidden min-[900px]:flex  flex-row items-center gap-x-2 p-2 px-4 rounded-lg">Try For Free</div>

                    {/* Hamburger ICON */}
                    <div className="flex min-[900px]:hidden">
                    <RxHamburgerMenu />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;