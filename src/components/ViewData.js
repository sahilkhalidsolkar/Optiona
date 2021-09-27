import React,{useContext} from 'react'

import DataContext from '../context/DataContext'
const ViewData = () => {
    const {data} = useContext(DataContext);
    
    return (
        <div className='flex justify-center items-center bg-gray-300 h-screen'>
            <div className='max-w-screen-xl bg-white h-1/2 
            rounded-lg flex flex-col justify-center
            px-9 text-lg font-semibold
            '>
            <p>Name : {data.name}</p>
            <p>Desigantion : {data.designation}</p>
            <p>Language : {data.language}</p>

            </div>
        </div>
    )
}

export default ViewData
