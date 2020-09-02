import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
export default function Home() {
  return (
    <Layout>
      <h1 className="title">This is index page</h1>
      <h1 className="title">Another heading Hello world!</h1>
      <Button>Styled Button</Button>
    </Layout>
  )
}
