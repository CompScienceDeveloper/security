import React from "react"
import servicesStyles from "./services.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
export default class Services extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let serviceDetails = [
      {
        img: "https://image.flaticon.com/icons/svg/527/527187.svg",
        heading: "CCTV Cameras",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1372/1372460.svg",
        heading: "Intrusion Alarm System",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1802/1802241.svg",
        heading: "Biometric Access Control",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1284/1284598.svg",
        heading: "Fire Alarm",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1554/1554180.svg",
        heading: "Video Door Systems",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1516/1516139.svg",
        heading: "Vehicle Tracking System",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1777/1777939.svg",
        heading: "Electronic Locking",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1699/1699568.svg",
        heading: "Smart LED TV",
      },
      {
        img: "https://image.flaticon.com/icons/svg/1035/1035281.svg",
        heading: "EPABAX System",
      },
    ]
    let services = serviceDetails.map((element, i) => {
      return (
        <div
          key={`key${i}`}
          className={`col-12 col-md-3 ${servicesStyles.cards}`}
        >
          <img
            src={element.img}
            className={`img=fluid ${servicesStyles.servicesImg}`}
            alt="cctv img"
          />
          <p className={`${servicesStyles.cardsHeading}`}>{element.heading}</p>
        </div>
      )
    })
    return (
      <div className={`row ${servicesStyles.mainDiv}`}>
        <h3 className={`${servicesStyles.heading}`}>
          Our <span className={`${servicesStyles.headingSpan}`}>Serv</span>ices
        </h3>
        <div className="w-100" style={{ paddingBottom: "20px" }} />
        {services}
      </div>
    )
  }
}
