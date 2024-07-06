import { MdPersonAddAlt1 } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { LuClipboardSignature } from "react-icons/lu";
import ReferForm from "./ReferForm";

function Hero(props) {
    return (
        <div>

            <div className="mt-12 bg-sky-100 max-w-[500px] w-[90%] flex flex-row  px-8 py-2 mx-auto rounded-full justify-between">
                <div className="text-blue-600 flex flex-col items-center">
                    <div className="">Refer</div>
                    <div className=" flex justify-center items-center h-[2px] font-bold">.</div>
                </div>
                <div>Benefits</div>
                <div>FAQs</div>
                <div>Support</div>
            </div>

            {/* Flex Box 1 */}
            <div className="w-fit relative mt-6 flex flex-col sm:flex-row sm:justify-between bg-sky-100 items-center mx-auto rounded-2xl
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            ">

                {/* Left Div */}
                <div className="w-[350px] px-4">
                    <div className="text-2xl sm:text-4xl font-semibold">Let's Learn & Earn</div>

                    <div className="mt-6 text-lg sm:text-xl font-semibold">Get a Chance to win up-to <span className="text-xl sm:text-2xl text-blue-600 font-semibold">Rs. 15,000</span></div>

                    <div onClick={()=>{props.setDisplayModal(true)}} className="bg-blue-600 text-white p-2 px-4 mt-6 w-fit rounded-lg cursor-pointer">Refer Now</div>

                </div>

                {/* Right div */}
                <div className="overflow-hidden relative ">
                    <img className="w-[350px] sm:w-[500px]  scale-125 relative z-10" src="pics/heroImage1.png"></img>

                   
                        <img className="absolute z-20 bottom-2 left-10 h-[70px] w-[70px] " src="pics/cash.png"></img>

                        <img className="absolute z-5 right-6 top-40 rotate-90 h-[70px] w-[70px] " src="pics/cash.png"></img>

                        <img className="absolute z-5 right-0 top-0 rotate-180 h-[70px] w-[70px] " src="pics/cash.png"></img>

                        <img className="absolute z-5 left-32 top-10 rotate-180 h-[70px] w-[70px] " src="pics/cash.png"></img>
                   
                </div>

                <img className="absolute hidden sm:flex z-5 left-0 top-0 rotate-180 h-[70px] w-[70px] " src="pics/cash.png"></img>

            </div>

            {/* Flex Box 2 */}
            <div className="mt-10 bg-sky-100">

                <div className="text-center pt-4">How Do I <span className="text-blue-600"> Refer ?</span></div>

                <div className=" max-w-[900px] w-[90%] mx-auto mb-10 ">

                    <div className="overflow-hidden  relative">
                        <img className="w-[90%] mb-[100px] scale-125 mx-auto " src="pics/ThreeCircles.png"></img>

                        <div className="absolute w-[100%] min-[950px]:top-[34%] min-[700px]:top-[32%] top-[30%] max-[500px]:top-[25%] flex ">
                            <div className="w-[90%]  max-[500px]:px-4 mx-auto gap-12 grid grid-cols-3 ">
                            <div className="rounded-full h-[100%]  flex flex-col items-center min-[600px]:gap-y-4 gap-y-2">
                                <div className="text-blue-600 min-[950px]:text-6xl md:text-5xl text-3xl max-[500px]:text-xl"><MdPersonAddAlt1 />
                                </div>
                                <div className="min-[600px]:w-[75%] w-[100%] text-center text-[7px] min-[600px]:text-[11px] min-[800px]:text-[13px] min-[1000px]:text-[15px]">Submit Referrals Easily via Our Website's Referral Section</div>
                            </div>
                            <div className="rounded-full h-[100%]  flex flex-col items-center min-[600px]:gap-y-4 gap-y-2">
                                <div className="text-blue-600 min-[950px]:text-6xl md:text-5xl text-3xl max-[500px]:text-xl"><LuClipboardSignature />
                                </div>
                                <div className="min-[600px]:w-[75%] w-[100%] text-center text-[7px] min-[600px]:text-[11px] min-[800px]:text-[13px] min-[1000px]:text-[15px]">Earn rewards once your referral joins an Accredian program.</div>
                            </div>
                            <div className="rounded-full h-[100%]  flex flex-col items-center min-[600px]:gap-y-4 gap-y-2">
                                <div className="text-blue-600 min-[950px]:text-6xl md:text-5xl text-3xl max-[500px]:text-xl"><BsBriefcaseFill />
                                </div>
                                <div className="min-[600px]:w-[75%] w-[100%] text-center text-[7px] min-[600px]:text-[11px] min-[800px]:text-[13px] min-[1000px]:text-[15px]">Both parties receive a bonus 30 days after program enrollment.</div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row justify-center items-center">
                    <div onClick={()=>{props.setDisplayModal(true)}} className="text-white cursor-pointer bg-blue-600 p-2 px-8 mb-4 rounded-lg">Refer Now</div>
                </div>
                
            </div>

            {
                (props.displayModal) ? (<ReferForm displayModal={props.displayModal} setDisplayModal={props.setDisplayModal} />):(<div></div>)
            }

        </div>
    )
}

export default Hero;