import React, { ReactNode } from 'react'
import Head from 'next/head'
import HeaderStyle from "../styles/components/templates/commonHeader.module.scss"
import MainStyle from "../styles/components/templates/commonMain.module.scss"

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
      <a className={HeaderStyle.logo} href="/">
        <img src="/static/images/logo.svg" alt="" />
      </a>
    </header>
    <main className={MainStyle.commonMain}>
      {children}
    </main>
    <footer>
      fotter
    </footer>
  </>
)

export default Layout
