import { RxCrossCircled } from "react-icons/rx";
import { formSubmitAPI } from "../Services/Operations/FormSubmitAPI";

import { useForm } from "react-hook-form";

function ReferForm(props) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();


    // Hadling form Submission
    function formSubmitHandler(data) {
        console.log("formData");
        console.log(data);

        formSubmitAPI(data.firstName , data.lastName , data.email , data.phoneNumber , data.referralFirstName , data.referralLastName , data.referralEmail , data.referralPhoneNumber , data.message)

    }

    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="w-11/12 max-w-[650px] relative rounded-lg border bg-white border-gray-400 text-black p-6">

            <div className="text-blue-600 text-xl text-center" >Referral Form</div>
                <form onSubmit={handleSubmit(formSubmitHandler)} className='flex flex-col '>

                    <div className="mt-4">
                        <div className="text-black text-lg">Your Details</div>
                        <div className="w-full h-[1px] bg-black"></div>
                    </div>
                    {/* First and Last NAme */}
                    <div className="flex sm:flex-row flex-col gap-y-2 gap-x-5 mt-2 text-black">
                        {/* Firs Name */}
                        <div className="sm:w-[47%]">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="bg-sky-100 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                type="text"
                                name='firstName'
                                id='firstName'

                                {...register("firstName", {
                                    required: true
                                })}

                                placeholder="Enter First Name"
                            ></input>

                            {/* Displaying ERROR */}
                            {
                                errors.firstName && (
                                    <p className="text-pink-300 text-sm">Enter First Name</p>
                                )
                            }
                        </div>
                        {/* LAst Name */}
                        <div className="sm:w-[47%]">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="bg-sky-100 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                type="text"
                                name="lastName"
                                id="lastName"

                                {...register("lastName", {
                                    required: true
                                })}

                                placeholder="Enter Last Name"
                            ></input>

                            {/* Displaying ERROR */}
                            {
                                errors.lastName && (
                                    <p className="text-pink-300 text-sm">Enter Last Name</p>
                                )
                            }
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="mt-2 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            className="bg-sky-100 p-2 rounded-lg mt-1"
                            type="email"
                            name="email"
                            id="email"

                            {...register("email", {
                                required: true
                            })}

                            placeholder="Enter Email Address"
                        ></input>

                        {/* dsiplying ERROR */}
                        {
                            errors.email && (
                                <p className="text-pink-300 text-sm"> Enter email</p>
                            )
                        }
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="mt-2 flex flex-col">Phone Number</label>
                        <div className="flex flex-row gap-x-5 items-center">
                           
                            {/* Phone Number */}
                            <div className="w-[100%]">
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    className="bg-sky-100 p-2 w-[100%] rounded-lg mt-1"
                                    id="phoneNumber"
                                    placeholder="12345 67890"
                                    {...register("phoneNumber", {
                                        required: { value: true, message: "Enter Phone Number" },
                                        minLength: { value: 8, message: 'At least 8 digits required' },
                                        maxLength: { value: 10, message: 'Cannot be greater than 10 digits' }
                                    })}
                                ></input>
                            </div>
                        </div>
                        {/* Displying error */}
                        {
                            errors.phoneNumber && (
                                <p className="text-pink-300 text-sm">{errors.phoneNumber.message}</p>
                            )
                        }
                        
                    </div>

                    <div>
                        <div className="text-black text-lg mt-12">Referral Details</div>
                        <div className="w-full h-[0.8px] bg-black"></div>
                    </div>

                    {/* First and Last NAme */}
                    <div className="flex sm:flex-row flex-col gap-y-2 gap-x-5 mt-2 text-black">
                        {/* Firs Name */}
                        <div className="sm:w-[47%]">
                            <label htmlFor="referralFirstName">Referral First Name</label>
                            <input
                                className="bg-sky-100 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                type="text"
                                name='referralFirstName'
                                id='referralFirstName'

                                {...register("referralFirstName", {
                                    required: true
                                })}

                                placeholder="Enter First Name"
                            ></input>

                            {/* Displaying ERROR */}
                            {
                                errors.referralFirstName && (
                                    <p className="text-pink-300 text-sm">Enter First Name</p>
                                )
                            }
                        </div>
                        {/* LAst Name */}
                        <div className="sm:w-[47%]">
                            <label htmlFor="referralLastName">Referral Last Name</label>
                            <input
                                className="bg-sky-100 w-[100%] p-2 pr-0 rounded-lg mt-1"
                                type="text"
                                name="referralLastName"
                                id="referralLastName"

                                {...register("referralLastName", {
                                    required: true
                                })}

                                placeholder="Enter Last Name"
                            ></input>

                            {/* Displaying ERROR */}
                            {
                                errors.referralLastName && (
                                    <p className="text-pink-300 text-sm">Enter Last Name</p>
                                )
                            }
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="mt-2 flex flex-col">
                        <label htmlFor="referralEmail">Referral Email</label>
                        <input
                            className="bg-sky-100 p-2 rounded-lg mt-1"
                            type="email"
                            name="referralEmail"
                            id="referralEmail"

                            {...register("referralEmail", {
                                required: true
                            })}

                            placeholder="Enter Email Address"
                        ></input>

                        {/* dsiplying ERROR */}
                        {
                            errors.referralEmail && (
                                <p className="text-pink-300 text-sm"> Enter email</p>
                            )
                        }
                    </div>

                     {/* Phone Number */}
                     <div>
                        <label className="mt-2 flex flex-col">Referral Phone Number</label>
                        <div className="flex flex-row gap-x-5 items-center">
                           
                            {/* Phone Number */}
                            <div className="w-[100%]">
                                <input
                                    type="number"
                                    name="referralPhoneNumber"
                                    className="bg-sky-100 p-2 w-[100%] rounded-lg mt-1"
                                    id="referralPhoneNumber"
                                    placeholder="12345 67890"
                                    {...register("referralPhoneNumber", {
                                        required: { value: true, message: "Enter Phone Number" },
                                        minLength: { value: 8, message: 'At least 8 digits required' },
                                        maxLength: { value: 10, message: 'Cannot be greater than 10 digits' }
                                    })}
                                ></input>
                            </div>
                        </div>
                        {/* Displying error */}
                        {
                            errors.referralPhoneNumber && (
                                <p className="text-pink-300 text-sm">{errors.phoneNumber.message}</p>
                            )
                        }
                        
                    </div>



                    {/* MEssage Field*/}
                    <div className="mt-2 flex flex-col">
                        <label htmlFor="message">Tell About Your Referral</label>
                        <textarea
                            className="bg-sky-100 p-2 rounded-lg mt-1"
                            name="message"
                            id="message"
                            

                            {...register("message", {
                                required: true
                            })}

                            rows={5}
                            placeholder="Enter Message"
                        ></textarea>
                        {/* Displaying error */}
                        {
                            errors.message && (
                                <p className="text-pink-300 text-sm">Enter Message Please</p>
                            )
                        }
                    </div>



                    {/* Submit Button */}
                    <div className="mt-4 flex justify-center">
                        <button className='mx-auto bg-blue-600 p-2 px-4 rounded-lg text-white hover:scale-95 transition-all duration-200' >Submit</button>
                    </div>

                </form>

                <div onClick={() => { props.setDisplayModal(false) }} className="absolute top-2 right-2 text-black font-semibold cursor-pointer">
                    <RxCrossCircled />
                </div>

            </div>
        </div>
    )
}

export default ReferForm;