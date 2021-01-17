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
  return (
    <>
      <Layout title="HOME | シミズのポートフォリオ">
        <div>Home</div>
      </Layout>
    </>
  )
}

export default IndexPage
