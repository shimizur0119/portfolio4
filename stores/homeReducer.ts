import { createSlice } from "@reduxjs/toolkit"

export interface homeInitialStateType {
    data: Array<any>,
}

const initialState: homeInitialStateType = {
    data: []
}

// Sliceを生成する
const slice = createSlice({
    name: "home",
    initialState,
    reducers: {
        resetData: state => {
            return { ...state, data: [] }
        },
    },
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const { resetData } = slice.actions