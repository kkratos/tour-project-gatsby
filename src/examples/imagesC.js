import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import img from "../images/mountain1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "desert.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale:true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "desert.jpeg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "desert.jpeg" }) {
      childImageSharp {
        fluid(maxWidth:200){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {

  const data = useStaticQuery(getImages)

  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>Bacic Image</h3>
        <img src={img} className="basic" alt="" />
        <h2>Content</h2>
      </article>
      <article>
        <h3>Fixed Image/blur</h3>
        <Image fixed = {data.fixed.childImageSharp.fixed}/>
        <h2>Content</h2>
      </article>
      <article>
        <h3>fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.example.childImageSharp.fluid} />
        </div>
        <h2>Content</h2>
      </article>
    </Wrapper>

  )
}

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  // background-color: red;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
