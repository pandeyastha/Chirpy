import { useCallback, useState } from "react";

import useLoginModal from '@/hooks/useLoginModal'

import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {


  const loginModal=useLoginModal();
  const registerModal=useRegisterModal();
    
  const [email,setEmail] =useState(''); 
  const [password,setPassword] =useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle= useCallback(()=> {
    if(isLoading) return;
    
    loginModal.onClose();
    registerModal.onOpen();
},[loginModal,registerModal]);

  const onSubmit =useCallback(async()=>{
    try{
      setIsLoading(true);
      //Todo login
      loginModal.onClose();

    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  },[loginModal]);

  const bodyContent= (
    <div className='flex flex-col gap-4'>
      <Input
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      disabled={isLoading}  
      />
      <Input
      placeholder="Password"
      onChange={(e)=> setPassword(e.target.value)}
      value={password}
      type="password"
      disabled={isLoading}
      />

    </div>
  )

  const footerContent=(
      <div className="text-neutral-400 text-center mt-4">
          <p>First time using Twitter?
            <span onClick={ onToggle }
            className="hover:underline
            cursor-pointer
            text-white"> Create an account</span>
          </p>
      </div>
  )



  return ( 

  <Modal 
      disabled= {isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
  />
  );
  }
  
  export default LoginModal;