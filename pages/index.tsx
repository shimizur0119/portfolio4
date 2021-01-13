import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Loading from "../components/templates/loading"
import * as AOS from "aos"
import dynamic from "next/dynamic"
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
      <Layout title="index | シミズのポートフォリオ">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <div>
          <ThreeObject />
        </div>
      </Layout>
      <Loading open={loadingOpen} />
    </>
  )
}

export default IndexPage
