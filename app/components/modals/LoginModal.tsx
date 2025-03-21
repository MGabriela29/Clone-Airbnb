'use client';
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const content = (
        <>
        <form 
            
            className="space-y-4"
        >
            <input  placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

            <input  placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
           

            <CustomButton
                label="Submit"
                onClick={() => {}}
            />
        </form>
    </>
    )

    return (
        <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
    />
    )
}

export default LoginModal;