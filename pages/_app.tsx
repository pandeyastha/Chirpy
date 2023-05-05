import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import useLoginModal from '@/hooks/useLoginModal'
//import Modal from '@/components/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useCallback, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const loginModal=useLoginModal();
  
  const [email,setEmail] =useState(''); 
  const [password,setPassword] =useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit =useCallback(()=>{
    try{
      setIsLoading(true);
      //Todo login
      loginModal.onClose();

    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  },[loginModal])

  return (
    <>
    <LoginModal />
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </>
  )
}
