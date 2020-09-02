// rfc - functional component
// rfac - arrow function compinent
// rcc - class based component

import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1 className={styles.title}>This is our blog page</h1>
          <h2 className={styles.blog}>This is second heading</h2>
        </div>
      </Layout>
    )
  }
}
