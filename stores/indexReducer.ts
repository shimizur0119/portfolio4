import { createSlice } from "@reduxjs/toolkit"

export interface indexInitialStateType {
    data: Array<any>,
    orangeCount: number,
    boxStatuses: Array<{ id: string, status: boolean }>,
}

const initialState: indexInitialStateType = {
    data: [],
    orangeCount: 0,
    boxStatuses: [
        { id: "1", status: false },
        { id: "2", status: false },
        { id: "3", status: false },
        { id: "4", status: false },
        { id: "5", status: false },
        { id: "6", status: false },
        { id: "7", status: false },
        { id: "8", status: false },
        { id: "9", status: false },
        { id: "10", status: false },
        { id: "11", status: false },
        { id: "12", status: false },
    ]
}

// Sliceを生成する
const slice = createSlice({
    name: "index",
    initialState,
    reducers: {
        allOrange: (state) => {
            const newBoxStatuses = state.boxStatuses.map(e => ({ id: e.id, status: true }))
            return { ...state, boxStatuses: newBoxStatuses }
        },
        changeBoxStatus: (state, action) => {
            const target = action.payload
            const newBoxStatuses = state.boxStatuses.map(e => e.id == target.id ? target : e)
            return { ...state, boxStatuses: newBoxStatuses }
        },
        setOrangeCount: (state, action) => {
            return { ...state, orangeCount: action.payload }
        },
        resetData: state => {
            return { ...state, data: [] }
        },
    },
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const { setOrangeCount, resetData, changeBoxStatus, allOrange } = slice.actions