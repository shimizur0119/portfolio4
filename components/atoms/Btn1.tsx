import Style from "../../styles/components/atoms/btn1.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { allOrange } from "../../stores/indexReducer"

const Btn1 = () => {
    const dispatch = useDispatch()
    const onClick = () => {
        console.log("click")
        dispatch(allOrange())
    }
    return (
        <div className={Style.btn1} onClick={onClick}></div>
    )
}

export default Btn1