import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import HeaderStyle from "../styles/components/templates/commonHeader.module.scss"
import MainStyle from "../styles/components/templates/commonMain.module.scss"
import FooterStyle from "../styles/components/templates/commonFooter.module.scss"
import Btn1 from "../components/atoms/Btn1"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'シミズのポートフォリオ' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={HeaderStyle.commonHeader}>
      <Link href="/">
        <h1 className={HeaderStyle.logo}>
          <img src="/static/images/logo.svg" alt="シミズのポートフォリオ" />
        </h1>
      </Link>
      <Btn1 />
    </header>
    <main className={MainStyle.commonMain}>
      {children}
    </main>
    <footer className={FooterStyle.commonFooter}>
      fotter
    </footer>
  </>
)

export default Layout
