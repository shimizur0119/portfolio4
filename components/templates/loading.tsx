import style from "../../styles/loading/loading.module.scss"
import dynamic from 'next/dynamic'

const ThreeObjectNoSSR = dynamic(
  () => import('../webGL/object1/threeObject'),
  { ssr: false }
)

const Loading = () => {
  return (
    <>
      <div className={style.loading}>
        <div className={style.content}>
          <ThreeObjectNoSSR />
          <div className={style.overtext}>hello world</div>
        </div>
      </div>
    </>
  )
}

export default Loading