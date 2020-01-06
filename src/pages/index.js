import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingDiv from "../components/home/landing-div/landing-div"
import SecurityFeatures from "../components/home/security-features/security-features"
import OurStory from "../components/home/our-story/our-story"
import Services from "../components/home/services/services"
import Provide from "../components/home/provide/provide"
import BusinessInfo from "../components/home/business-info/business-info"

const IndexPage = () => (
  <Layout
    style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F9FBFF",
    }}
  >
    <SEO title="Home" />
    <LandingDiv />
    <SecurityFeatures />
    <OurStory />
    <Services />
    <Provide />
    <BusinessInfo />
  </Layout>
)

export default IndexPage
