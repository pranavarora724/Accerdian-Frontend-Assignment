import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { categories, tableData } from '../data'
function Hero2(props) {
    return (
        <div>
            <div className="mt-12 font-semibold">
                <div className="text-center text-lg sm:text-2xl">What Are <span className="text-blue-600">Referral Benefits ?</span></div>

                <div className="mt-10 mx-auto max-w-[1000px] w-[90%] flex flex-row justify-between">
                    <div className="w-2"></div>
                    <div className="flex flex-row gap-x-2 items-center">
                        <div>Enrolled</div>
                        <div className="border border-black pr-[2px] flex flex-row justify-between items-center w-[34px] cursor-pointer rounded-full h-[17px]">
                            <div className="w-1"></div>
                            <div className="h-[12px] w-[12px] rounded-full bg-blue-700"></div>
                        </div>
                    </div>
                </div>
                {/* Flex 1 */}
                <div className="mt-2 flex flex-row gap-x-10 mx-auto max-w-[1000px] w-[90%]">

                    {/* Left div */}
                    <div className="w-[300px]
                     hidden min-[900px]:flex
                    ">

                       <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden">
                       <div className=" flex flex-row justify-between bg-blue-600 text-white py-4 px-2 items-center">
                            <div>All Programs</div>
                            <div><IoIosArrowForward />
                            </div>
                        </div>

                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} className={`flex flex-row justify-between py-4 px-2 items-center gap-x-2 ${(index == 0) ? (``) : (`border-t border-black`)}`}>
                                        <div>{category}</div>
                                        <div><IoIosArrowForward /></div>
                                    </div>
                                )
                            })
                        }
                       </div>

                    </div>

                    {/* Right div */}
                    <div className="">
                        <table className="bg-sky-50 rounded-2xl overflow-hidden
                         shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                         max-[600px]:text-[13px]
                        ">
                            <tr className="bg-blue-300 ">
                                <th className="py-4 text-left pl-4 text-blue-700">Programs</th>
                                <th className="md:w-[160px] text-center py-4 text-blue-700">Referrer Bonus</th>
                                <th className="md:w-[160px] text-center py-4 text-blue-700" >Referee Bonus</th>
                            </tr>

                            {
                                tableData.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="p-4">
                                                <div className="flex flex-row  gap-x-4 items-center">
                                                    <div className="flex flex-col items-center w-[35px] ">
                                                        <img className=" w-[20px]  " src="pics/hat.svg"></img>
                                                        <img className=" w-[10px] -mt-2" src="pics/hatBase.svg"></img>
                                                    </div>
                                                    <div>{element.program}</div>
                                                </div>
                                            </td>
                                            <td className="p-4 border-l-2 border-r-2 border-gray-500 text-center">{element.referrer}</td>
                                            <td className="p-4 text-center">{element.referee}</td>
                                        </tr>
                                    )
                                })
                            }

                        </table>
                    </div>  

                </div>

                {/* Show more Button */}
                <div className="mt-6 mx-auto max-w-[1000px] w-[90%] flex flex-row justify-between">
                    <div className="w-2"></div>
                    <div className="flex flex-row gap-x-4 px-4 items-center border border-gray-400 rounded-lg py-1">
                        <div className="text-gray-600 font-light">Show More</div>
                        <div>
                        <IoIosArrowDown className="font-extralight text-gray-400" />
                        </div>
                        
                    </div>
                </div>

                {/* Refer Now Button */}
                <div className=" flex flex-row justify-center items-center mt-6">
                    <div onClick={()=>{props.setDisplayModal(true)}} className="bg-blue-600 cursor-pointer text-white px-8 py-2 rounded-lg">Refer Now</div>
                </div>

            </div>
        </div>
    )
}

export default Hero2;