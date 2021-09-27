import React,{useReducer} from 'react'
import DataContext from './DataContext'
import DataReducer from './DataReducer'


const DataState= props =>{
    const initialState={
     data:{},
    }
    const [state, dispatch] = useReducer(DataReducer, initialState);
    // load data
    const loadData =  (data)=>{

       dispatch({
           type:'LOAD_DATA',
           payload:data
       })
    }
    

    return(
        <DataContext.Provider 
        value={{
            data:state.data,
            loadData,
        }}
        >
            {props.children}
        </DataContext.Provider>
    )

}
export default DataState