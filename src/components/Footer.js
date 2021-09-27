import React from 'react'
import Logo from '../optionlogo.png'
function Footer() {
    return (
            <div className='flex items-center justify-center font-semibold text-gray-400'>
                <p>Powered by  </p>
                <img src={Logo} alt="logo" 
                    className='h-11 '
                    />
            </div>
        
    )
}

export default Footer
