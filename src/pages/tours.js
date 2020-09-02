import React from "react"
import Tours from "../components/Tours/Tours"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const tours = ({data}) => {
  return (
    <Layout>
      <div>This is tour page</div>
      <Tours tours={data.tour.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tour: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default tours
