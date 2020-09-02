import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        //   console.log(data);
        return (
          <div>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic