import {useEffect, useState} from 'react';
import invalid from '../../../../assets/images/auth/account-activation/invalid.png'
import success from '../../../../assets/images/auth/account-activation/success.png'
//import Login from '../Login/Login.tsx';


function AccountActivation() {
    const [statusImage, setStatusImage] = useState("");
    const [message, setMessage] = useState("");
    const [description, setDescription] = useState("");
    const [buttonLabel, setButtonLabel] = useState("");

    //account activation response
    const token = "No"

   // response event
    const getActivationResponse = (token) => {
        if(token === "Yes") {
            setStatusImage(success);
            setMessage("Success !");
            setDescription("Your account has been activated successfully. Please login to continue.");
            setButtonLabel("Back to Login")
        } else {
            setStatusImage(invalid);
            setMessage("Invalid or Expired Link");
            setDescription("The verification link is invalid or has expired. Please request a new verification email.");
            setButtonLabel("Request New Verification Email")
        }
    }

    useEffect(() => {
        getActivationResponse(token)
    }, []);

    const submit = () => {

    }
    return(
        <div className="flex justify-center items-center min-h-screen bg-home bg-circle-gradient relative px-6 ">
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="relative z-10 max-w-lg  w-full p-10 bg-white shadow-lg rounded-lg text-center">
                <div className="pb-6">
                    <img
                        src={statusImage}
                        alt="status image"
                        className="rounded-full w-20 mx-auto " />
                </div>
                <form
                    onSubmit={ (e)=> {
                        e.preventDefault();
                        submit();
                    }}
                    className="space-y-6" >
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700">
                            { message }
                        </h1>
                    </div>
                    <div className='pb-6'>
                        <p className="text-gray-600 text-xl pt-4">
                            { description }
                        </p>
                    </div>
                    <div>
                        <button  className="btn bg-jybekBtn-600 hover:bg-jybekBtn-400 text-white text-2xl w-full py-2 rounded-md my-6" >
                            { buttonLabel }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountActivation;
