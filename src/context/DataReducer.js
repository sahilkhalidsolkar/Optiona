

export default (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'LOAD_DATA':
            return{
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}