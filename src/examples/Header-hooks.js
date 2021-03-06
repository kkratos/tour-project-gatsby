import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query{
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  // const {data} = useStaticQuery(graphql``)

  const {
      site: { siteMetadata: info },
    } = useStaticQuery(getData)
  // console.log(info)
  const title = info.siteTitle
  return (
    <div>
      <h1>author :{info.author}</h1>
      <h1>title :{title}</h1>
    </div>
  )
}

export default Header
