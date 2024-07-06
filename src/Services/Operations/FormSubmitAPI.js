import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
// import "dotenv/config"

export async function formSubmitAPI(firstName , lastName , email , phoneNumber , referralFirstName , referralLastName , referralEmail , referralPhoneNumber , message)
{
    const toastID = toast.loading('Loading...');
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    const API_URL = BASE_URL + "form/saveFormData"
    
    try {
        
        const response = await apiConnector("POST" , `${API_URL}` , {
            firstName:firstName , 
            lastName:lastName , 
            email:email,
            phoneNumber:phoneNumber,

            referralFirstName:referralFirstName,
            referralLastName:referralLastName,
            referralEmail:referralEmail,
            referralPhoneNumber:referralPhoneNumber,

            message:message
        })

        if(response?.data?.success == false)
            throw new Error(response?.data?.message);

        console.log("Printing logi API result");
        console.log(response);

        toast.success("Referral Submitted Successfully");

        
    } catch (error) {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
       
    }

    toast.remove(toastID);
}
