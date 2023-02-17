import * as React from 'react'
import Nav from '../components/Nav'
import Head, { HeadProps } from '../Head'

interface Props extends HeadProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children, title, description }: Props) => {
  return (
    <>
      <Head {...{ title, description }} />
      <div>
        <Nav/>
        <main>{children}</main>
        <footer>
          <p>copyright 2023</p>
        </footer>
      </div>
    </>
  )
}

export default LayoutDefault;
