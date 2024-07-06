import { useState } from "react";

function FAQcomponent(props)
{
    const [show , setShow] = useState(false);

    function handleClick()
    {
        if(show == true)
            setShow(false)
        else
        setShow(true)

    }
    return(
        <div>
             <div className='flex flex-row gap-x-10 items-center justify-start  mt-6'>
                                 {/* Left */}
                                 <div className={`hidden min-[900px]:flex justify-center w-[200px] text-center py-2  rounded-md ${(show==true)?(`text-blue-600 shadow-[-10px_-10px_20px_1px_rgba(0,0,0,0.1),_10px_10px_20px_1px_rgba(45,78,255,0.15)]`):(`border-2 border-gray-500`)}`}><div>{props.title}</div></div>

                                 {/* Right */}
                                 <div className='mx-auto min-[900px]:w-[80%] w-[95%] flex flex-col gap-y-2'>
                                     {/* Question */}
                                     <div onClick={()=>{handleClick()}} className={`${(show==true)?(`text-blue-600 font-semibold`):(``)}`}>{props.question} </div>

                                     {/* Answer */}
                                    {
                                     (show == true) ? ( <div className="w-fit pl-2">{props.answer}</div>):(<div></div>)
                                    }
                                 </div>
                             </div>
        </div>
    )
}

export default FAQcomponent;