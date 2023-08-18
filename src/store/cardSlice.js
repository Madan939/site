const {createSlice}=require("@reduxjs/toolkit")


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartlist:[],
        total:0
    },
    reducers:{
        add(state,action){
          //console.log(action.payload)
        const updatelist=state.cartlist.concat(action.payload)
        const total=state.total+action.payload.price
        return {...state,total:total,cartlist:updatelist}
        },
        remove(state,action){
            // console.log(action.payload)
             const updatelist=state.cartlist.filter(list=>list.id!==action.payload.id)
             const total=state.total-action.payload.price
            return {...state,total:total,cartlist:updatelist}
        },
       
    },

})
export const {add,remove,total}=cartSlice.actions
export const cartReducer=cartSlice.reducer