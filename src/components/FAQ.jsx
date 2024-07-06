import { useState } from 'react';
import {faqData} from '../data'
import FAQcomponent from './FAQcomponent';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function FAQ()
{

    const [show , setShow] = useState(false);

    function handleClick(){
        if(show == true)
            setShow(false);
        else
        setShow(true);
    }

    return(
        <div>
            <div className="text-lg md:text-2xl text-center font-semibold mt-14">Frequently Asked <span className="text-blue-600">Questions</span></div>

            <div className='mt-6 max-w-[1000px] w-[90%] mx-auto '>

                {
                    faqData.map((element , index)=>{
                        return(
                            

                            <FAQcomponent key={index} question={element.question} answer= {element.answer} title={element.title}/>
                        )
                    })
                }
            </div>

            <div className='relative mt-10 mb-10 max-w-[1050px] w-[90%] mx-auto bg-blue-600 py-12 rounded-lg flex md:flex-row flex-col px-10 justify-between items-center'>

               {/* Left */}
                <div className='md:w-[70%] min-[900px]:w-[80%] relative z-50 flex flex-row items-center gap-x-4'>

                    <div className='bg-blue-400 p-[3px] rounded-lg'>
                    <div className='bg-white p-1 sm:p-2 rounded-lg'>
                        <img className='w-[40px] h-[30px] ' src='pics/headphone.svg'></img>
                    </div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div className='text-white font-semibold text-md md:text-xl'>Want to delve deeper into the program?</div>
                        <div className='text-white font-light text-[14px]'>Share your details to receive expert insights from our program team!</div>
                    </div>
                </div>

                {/* Right */}
                <div className='relative z-50 max-[786px]:mt-10 flex flex-row gap-x-2 text-blue-600  bg-white py-2 px-4 h-fit items-center rounded-lg'>
                    <div>Get In Touch</div>
                    <div><IoIosArrowForward />
                    </div>
                </div>

                <img className='absolute bottom-0 right-[8.5%] w-[24%] z-30' src='pics/circle1.svg'></img>
                <img className='absolute bottom-0 right-[5%] w-[32%] z-20' src='pics/circle2.svg'></img>
                <img className='absolute bottom-0 right-0 w-[43%] z-10' src='pics/circle3.svg'></img>
            </div>
        </div>
    )
}

export default FAQ;