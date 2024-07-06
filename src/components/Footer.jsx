import {footerData} from '../data'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer()
{
    return(
        <div className="bg-black text-white">
            <div className="pt-1  max-w-[1000px] w-[90%] mx-auto">

                <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pb-6 border-b-[1px] border-gray-600">

                    <div>
                        <img className="w-[100px]" src="pics/logoWhite.png"></img>
                    </div>

                    <div className="flex flex-col items-center gap-y-1">
                        <div className="bg-blue-600 max-[670px]:mt-6 text-white px-4 py-1 rounded-lg border-[1px] border-white">Schedule 1-on-1 Call Now</div>
                        <div className="text-white">Speak With Our Leading Advisor</div>
                    </div>
                </div>

                <div className="pt-6 flex sm:flex-row flex-col justify-between">
                   {/* Programs */}
                    <div className="sm:w-[30%] flex flex-col gap-y-1">
                        <div className='text-xl'>Programs</div>
                       {
                        footerData.map((element , index) =>{
                            return(
                                <div key={index} className='flex flex-row justify-between mt-4'>
                                    <div className='text-white font-semibold'>{element}</div>
                                    <div className='text-white font-semibold text-xl'>+</div>
                                </div>
                            )
                        })
                       }
                    </div>

                    {/* Contact */}
                    <div className="max-[670px]:mt-8 sm:w-[45%] text-white">
                        <div className='text-xl pb-1'>Contact Us</div>
                        <div>Email us (For Data Science Queries): admissions@accredian.com</div>
                        <div>Email us (For Product Management Queries):pm@accredian.com</div>
                        <div>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</div>
                        <div>Product Management Admission Helpline:+91 9625811095</div>
                        <div>Enrolled Student Helpline: +91 7969322507</div>
                        <div>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                        Haryana 122015</div>
                        <div>Why Accerdian</div>
                        <div className='text-xl mt-1'>Follow Us</div>

                        <div className='flex flex-row gap-x-4 pt-2'>
                            <div className='bg-white p-[1px] rounded-sm'>
                            <FaFacebookF className="text-black" />
                            </div>

                            <div className='bg-white p-[1px] rounded-sm'>
                            <FaLinkedinIn className="text-black" />
                            </div>

                            <FaTwitter className="text-white text-lg" />
                            <FaInstagram className="text-white text-xl" />
                            <FaYoutube className="text-white text-xl" />
                        </div>
                    </div>

                    {/* about */}
                    <div className="w-[15%] text-white text-[15px] hidden md:flex flex-col">
                        <div className='text-xl'>About</div>
                        <div className='mt-1'>About</div>
                        <div className='mt-1'>Carrer</div>
                        <div className='mt-1'>Blog</div>
                        <div className='mt-1'>Admission</div>
                        <div className='mt-1'>Referral Policy</div>
                        <div className='mt-1'>Privacy Policy</div>
                        <div className='mt-1'>Terms Of Service</div>
                        <div className='mt-1'>Master FAQs</div>
                    </div>


                </div>
                <div className='text-white text-center  mt-10'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</div>

            </div>
        </div>
    )
}

export default Footer;