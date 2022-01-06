import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice ({
    name:"user",
    initialState: {value: {name:"", age:0, email:""}, count:0},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        sumar: state => {
            state.count += 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }    
    }

});
export const {login, sumar, incrementByAmount} = userSlice.actions;
export const selectCount = state => state.user.count;
export default userSlice.reducer;