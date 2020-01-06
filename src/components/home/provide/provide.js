import React from "react"
import storyStyles from "./provide.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
export default class Provide extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`row ${storyStyles.mainDiv}`}>
        <div className="container row col-12 col-md-10 offset-md-0">
          <div
            className={`col-12 col-md-6 ${storyStyles.xsSmHidden} ${
              storyStyles.storyImgDiv
            }`}
          >
            <img
              src="https://i.ibb.co/zNkc57t/test.jpg"
              className={`${storyStyles.storyImg} img-fluid`}
              alt="story img"
            />
          </div>

          <div
            className={`col-12 col-md-6 ${
              storyStyles.storyText
            } row align-items-start`}
          >
            <h2>
              <span
                style={{
                  borderBottom: "2px solid #2978fa",
                  paddingBottom: "20px",
                }}
              >
                Our V
              </span>
              alues
            </h2>
            <p style={{ paddingTop: "30px" }}>
              Morbi interdum mollis sapien. Sed ac risus. Phase lacinia
              ullalaorlectus arcu pulvinar risus, vitae facilisis libero dolor a
              purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
              adipiscing.
            </p>
            <div>
              <FontAwesomeIcon
                className={`${storyStyles.checkIcons}`}
                icon={faCheckCircle}
              />
              <span className={`${storyStyles.pointsText}`}>
                Best Customer Support
              </span>
              <br />
              <FontAwesomeIcon
                className={`${storyStyles.checkIcons}`}
                icon={faCheckCircle}
              />
              <span className={`${storyStyles.pointsText}`}>
                On Time Delivery
              </span>
              <br />
              <FontAwesomeIcon
                className={`${storyStyles.checkIcons}`}
                icon={faCheckCircle}
              />
              <span className={`${storyStyles.pointsText}`}>
                Competitive Pricing
              </span>
              <br />
              <FontAwesomeIcon
                className={`${storyStyles.checkIcons}`}
                icon={faCheckCircle}
              />
              <span className={`${storyStyles.pointsText}`}>
                Always Honest{" "}
              </span>
              <br />
              <br />
            </div>
            <a href="#contact-us">
              <button className={`${storyStyles.readBtn}`}>Find Out</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
