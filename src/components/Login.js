import React from 'react'


import Footer from "./Footer"
import Header from './Header'
import LoginForm from './LoginForm'
const Login = (props) => {

    return (
    
        <div className='  flex justify-center text-lg'>
            <div className='max-w-screen-md'>
                {/* header */}
                <Header/>
                {/* login form */}
                <LoginForm {...props}/>
            {/* footer */}
            <Footer/>
            </div>
        </div>
    )
}


export default Login
