import Style from "../../styles/components/atoms/btn1.module.scss"
import { useDispatch } from "react-redux"
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