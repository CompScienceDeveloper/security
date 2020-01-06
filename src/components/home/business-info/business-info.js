import React from "react"
import businessInfo from "./business-info.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckCircle,
  faPhone,
  faPhoneAlt,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons"

export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="contact-us" className={`row ${businessInfo.mainBackground}`}>
        <div className={`w-100 row ${businessInfo.addressHolder}`}>
          <div
            className={`${
              businessInfo.contactAddress
            } col-12 col-md-6 offset-0 offset-md-1 row justify-content-center align-items-center`}
          >
            <div>
              <h1>Your Safety & Security, Our First Priority</h1>
              <p>
                Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
                diam amet mi ullamcorper vehicula. Integer adipiscing risus a
                sem. Nullam quis mass sit amet nibh viverra malesuada. Nunc sem
                lacus, accumsan quis, faucibus non.
              </p>
              <div className="row">
                <div className={`col-12 col-md-12 ${businessInfo.iconsHolder}`}>
                  <FontAwesomeIcon
                    className={`${businessInfo.icons}`}
                    icon={faPhoneSquareAlt}
                  />

                  <p className={`${businessInfo.contactDetails}`}>
                    +91-9165161547, +91-8103377516
                  </p>
                </div>
                <div className={`col-12 col-md-12 ${businessInfo.iconsHolder}`}>
                  <FontAwesomeIcon
                    className={`${businessInfo.icons}`}
                    icon={faEnvelopeSquare}
                  />

                  <p className={`${businessInfo.contactDetails}`}>
                    SMARTITSOLUTIONS555@ GMAIL.COM
                  </p>
                </div>
                <div className={`col-12 col-md-12 ${businessInfo.iconsHolder}`}>
                  <FontAwesomeIcon
                    className={`${businessInfo.icons}`}
                    icon={faAddressCard}
                  />

                  <p className={`${businessInfo.contactDetails}`}>
                    20-B, Sector-6, Prajapat Nagar, Near Gurukul School, Indore
                    - 452001 (M.P.)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-4 col-md-4 offset-4 offset-md-1 row justify-content-center align-items-center ${
              businessInfo.contactImgHolder
            }`}
          >
            <img
              className={`img-fluid ${businessInfo.cctv}`}
              src="https://i.ibb.co/0qqKjb0/2-removebg-preview-1.png"
              alt="cctv img"
            />
          </div>
        </div>
      </div>
    )
  }
}
