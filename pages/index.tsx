import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Loading from "../components/templates/loading"
import * as AOS from "aos"
import dynamic from "next/dynamic"
import pageStyle from "../styles/pages/index.module.scss"


const ThreeObject = dynamic(
  () => import('../components/webGL/threeObject2'),
  { ssr: false }
)

const IndexPage = () => {
  const [loadingOpen, setLoadingOpen] = useState(true)
  useEffect(() => {
    AOS.init();
  }, [])
  setTimeout(() => {
    setLoadingOpen(false)
  }, 5000);

  return (
    <>
      <Loading open={loadingOpen} />
      <Layout title="index | シミズのポートフォリオ">
        <div className={pageStyle.contentWrap}>
          <h2>Done is better than Perfect!</h2>
          <div>ようこそ</div>
        </div>
        <div className={pageStyle.canvasWrap1}>
          <ThreeObject />
        </div>
        <div className={pageStyle.canvasWrap2}>
          <ThreeObject />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
