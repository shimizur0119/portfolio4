import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/Layout'
import Loading from "../components/templates/loading"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
    console.log("timeout")
  }, 5000);

  return (
    <>
      {loading && <Loading></Loading>}
      <Layout title="index | シミズのポートフォリオ">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    </>
  )
}

export default IndexPage
