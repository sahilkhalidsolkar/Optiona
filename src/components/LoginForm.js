import React,{useState,useContext,Fragment} from 'react'
import Select from "react-dropdown-select";
import styled from '@emotion/styled';


import schema from '../utils/formValidation'
import  '../App.css'
import DataContext from '../context/DataContext'
const LoginForm=(props)=>{
    const [nameError, setNameError] = useState(false)
    const [designationError, setDesignationError] = useState(false)
    const [languageError, setLanguageError] = useState(false)
    // form data
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [language, setLanguage] = useState('English')
    // acceccing context
    const {loadData} = useContext(DataContext);

    // methods
    const handleSelectChange=(value)=>{
        setLanguage(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        //  validate the data before submiting
        const {error}= schema.validate({ name,designation,language });
       if(error){
           setNameError(true)
           setDesignationError(true)
           setLanguageError(true)
           return
       }
            setNameError(false)
            setDesignationError(false)
            setLanguageError(false)
            loadData({name,designation,language})
            props.history.push('/viewData')

    }
// dropdown option array
    const options=[
        {
        label:'English',
        id:1
    },
        {
        label:'Hindi',
        id:2
    },
        {
        label:'Marathi',
        id:3
    },
        {
        label:'Bengali',
        id:4
    },
]

    return (
        <div>      
            <form method='POST'
            className='flex flex-col '
            onSubmit={handleSubmit}
            >
                <div className='flex justify-between items-center my-2'>
                <label 
                htmlFor="Name" 
                className='font-semibold text-primary pl-2'

                >Name {nameError && <span className='text-red-500'>*</span> }</label>
                {nameError && (<span 
                className='text-xs self-end pr-5 text-danger'
                ><i class="fas fa-exclamation-circle mr-1"></i>
                Enter name</span>)}
                
                
                </div>
                <input 
                id='name'
                name='name'
                onChange={e=>setName(e.target.value)}
                value={name}
                type='text' 
                className={`border-2 w-full 
                rounded-full h-10 px-5 text-base ${nameError && `border-danger text-danger placeholder-danger`} `}
                placeholder='Enter full name'
                />
                <div className='flex justify-between items-center my-2'>
                <label 
                htmlFor="Designation" 
                className='font-semibold text-primary pl-2'

                >Designation
                {designationError&&<span className='text-red-500'>*</span>}
                 </label>
                 {designationError && <span 
                className='text-xs self-end pr-5 text-danger'
                ><i className="fas fa-exclamation-circle mr-1"></i>
                Enter valid number</span>}
                
                </div>
                <input 
                id='designation'
                name='designation'
                type='number' 
                onChange={e=>setDesignation(e.target.value)}
                value={designation}
                className={`border-2 w-full 
                rounded-full h-10 px-5 text-base
                 ${designationError && `border-danger text-danger placeholder-danger`}`}
                placeholder='Enter Position'
                />
                {/* select dropdown list */}
                <div className='flex justify-between items-center my-2'>
                <label 
                htmlFor="Language" 
                className='font-semibold text-primary pl-2'

                >Language 
                {languageError&&<span className='text-red-500'>*</span>}
                
                </label>
                
                </div>
                
                <StyledSelect
                    multi={false}
                    options={options}
                    name='language'
                    values={[options[0]]}
                    value={language}
                    searchable={false}
                    className=' h-11 font-semibold  '
                    style={{
                        borderRadius:'30px', 
                        color:'#b8babd'  ,   
                        borderWidth:'2px' ,
                        borderStyle:'solid',
                        borderColor:'red',

                    }}
                    onChange={values=>{
                        
                        handleSelectChange(values[0].label)
                    }}
                    
                />
                <div className='flex justify-center' >
                
                <button 
                className='bg-primary  rounded-full 
                font-semibold text-white  my-11 h-11 w-2/4 flex justify-center  items-center'
                
                onClick={handleSubmit}
                >
                    Login <i className="fas fa-chevron-right text-sm ml-2"></i>
                </button>
               </div>
            </form>
        </div>
    )
}

const StyledSelect = styled(Select)`
  border: 1px solid #333 !important;
  border-radius: 10px;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    margin-right:1rem;
  }
  .react-dropdown-select-option {
    border: 5px solid red;
  }
 
  .react-dropdown-select-input {
    color: blue;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 100%;
    padding: 25px 13px;
    padding-bottom:7px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    z-index: 9;
    background: #f9fafb;
    box-shadow: none;
    border:1px solid black;
  }
  .react-dropdown-select-item {
    color: #7c7777;
    border-bottom: 2px solid #dbdbdb;
       
    :hover {
       color: #7c7777;
       background-color:#c7cacdf5 !important;
       border-radius:10px
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    background: transparent;
    border-bottom: 2px solid #dbdbdb;
    font-weight: bold;
    color:#aeaeae

  }

  .react-dropdown-select-content{
      padding-left:1.1rem
  }
  .react-dropdown-select {
      border:2px solid red
  }
  
`;

export default LoginForm
