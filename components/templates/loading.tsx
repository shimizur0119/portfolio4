import style from "../../styles/loading/loading.module.scss"
import ThreeObject from "../webGL/threeObject"
// import dynamic from 'next/dynamic'

// const ThreeObjectNoSSR = dynamic(
//   () => import('../webGL/threeObject'),
//   { ssr: false }
// )

const Loading = ({ open }: { open: boolean }) => {
  const openClass = open ? style.open : ""
  return (
    <>
      <div className={`${style.loading} ${openClass}`}>
        <div className={style.content}>
          <ThreeObject />
          <div className={style.overtext} data-aos="fade-zoom-in">
            <div className={style.overtext__text1}>Now loading...</div>
            <div className={style.overtext__text2}>ではなくアニメーションタイム</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading