import { useEffect, useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Loading from "../components/templates/loading"
import * as AOS from "aos"
import pageStyle from "../styles/pages/index.module.scss"
import ThreeObject from "../components/webGL/threeObject2"
import { useSelector } from 'react-redux'
import { StoreType } from "../stores"


const IndexPage = () => {
  const allOrange = useSelector((state: StoreType) => !state.index.boxStatuses.filter(e => !e.status).length)
  const [loadingOpen, setLoadingOpen] = useState(true)
  const [loadingDelete, setLoadingDelete] = useState(false)
  useEffect(() => {
    console.log("めんどくさかったら/homeへどうぞ！")
    AOS.init();
  }, [])
  useEffect(() => {
    if (allOrange) {
      console.log("all orange!!")
      setTimeout(() => {
        Router.push("/stupid")
      }, 2000)
    }
  }, [allOrange])
  setTimeout(() => {
    setLoadingOpen(false)
    setTimeout(() => {
      setLoadingDelete(true)
    }, 1000);
  }, 5000);
  return (
    <>
      {!loadingDelete && <Loading open={loadingOpen} />}
      <Layout title="index | シミズのポートフォリオ">
        {allOrange
          ? <div className={pageStyle.contentWrap}><div>all orange!!</div></div>
          : <div className={pageStyle.contentWrap}>
            <div>ようこそ！</div>
            <div>
              全ての
            <span className={pageStyle.green}>BOX</span>
            を
            <span className={pageStyle.orange}>オレンジ</span>
            色にできたなら、私の
            <span className={pageStyle.gaming}>秘密</span>
            を教えようじゃないか!
          </div>
            <div className={pageStyle.small}>
              You can zoom and rotate the screen.
              Then you can turn it orange by clicking on the box.
          </div>
            <div className={pageStyle.exSmall}>
              You're the type of person who reads the manual to the end. Wow!
          </div>
            <div className={pageStyle.exSmall}>
              In fact, if you go to "/home", you can proceed without playing.
          </div>
          </div>
        }
        <div className={pageStyle.canvasWrap1}>
          <ThreeObject />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
