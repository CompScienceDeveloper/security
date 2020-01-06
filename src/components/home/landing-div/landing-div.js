import React from "react"
import landingStyles from "./landing-div.module.scss"

export default class LandingDiv extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`row ${landingStyles.mainBackground}`}>
        <div className={`${landingStyles.landingText} col-12 col-md-4`}>
          <span className={`${landingStyles.companyNameHeadline}`}>
            <p className={`${landingStyles.tagLine}`}>
              Protection | Visibility | Security
            </p>
            <h1 className={`${landingStyles.companyName}`}>
              Smart
              <br className={`${landingStyles.xsSmHidden}`} /> Security
              <br className={`${landingStyles.xsSmHidden}`} /> Solutions
            </h1>
          </span>
          <h3>Keep Yourself Secure</h3>
          <p>
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam
            quis mass sit amet nibh viverra malesuada.{" "}
          </p>
          <a href="#contact-us">
            <button className={`${landingStyles.landingBtn}`}>
              Contact Us
            </button>
          </a>
        </div>
        <div className={`${landingStyles.imgHolder} col-12 col-md-8`} />
      </div>
    )
  }
}
