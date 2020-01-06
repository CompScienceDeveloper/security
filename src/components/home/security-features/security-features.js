import React from "react"
import secFeaturesStyles from "./security-features.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
export default class SecurityFeatures extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`row ${secFeaturesStyles.mainDiv}`}>
        <div className={`col-12 col-md-3 ${secFeaturesStyles.cards}`}>
          <img
            src="https://image.flaticon.com/icons/svg/1040/1040993.svg"
            className={`img-fluid ${secFeaturesStyles.securityIcons}`}
            alt="home img"
          />
          <h4 className={`${secFeaturesStyles.heading}`}>Home Security</h4>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus laci
            ullamcorper laoreet, lectus pulvinar.Morbi interdum mollis sapien.
          </p>
        </div>
        <div className={`col-12 col-md-3 ${secFeaturesStyles.cards}`}>
          <img
            src="https://image.flaticon.com/icons/svg/1642/1642432.svg"
            className={`img-fluid ${secFeaturesStyles.securityIcons}`}
            alt="home img"
          />
          <h4 className={`${secFeaturesStyles.heading}`}>Business Security</h4>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus laci
            ullamcorper laoreet, lectus pulvinar.Morbi interdum mollis sapien.
          </p>
        </div>
        <div className={`col-12 col-md-3 ${secFeaturesStyles.cards}`}>
          <img
            src="https://image.flaticon.com/icons/svg/1080/1080985.svg"
            className={`img-fluid ${secFeaturesStyles.securityIcons}`}
            alt="home img"
          />
          <h4 className={`${secFeaturesStyles.heading}`}>Institute Security</h4>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus laci
            ullamcorper laoreet, lectus pulvinar.Morbi interdum mollis sapien.
          </p>
        </div>
      </div>
    )
  }
}
