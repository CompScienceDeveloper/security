import React from "react"
import storyStyles from "./our-story.module.scss"

export default class OurStory extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`row ${storyStyles.mainDiv}`}>
        <div className="container row col-12 col-md-10 offset-md-0">
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
                Our S
              </span>
              tory
            </h2>
            <p
              className={`${storyStyles.storyTextDetails}`}
              style={{ paddingTop: "30px" }}
            >
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
              Nullam quis mass sit amet nibh viverra malesuada. Nunc sem lacus,
              accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
              hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
              gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh
              feugiat est.
            </p>
            <a href="#contact-us">
              <button className={`${storyStyles.readBtn}`}>Find Out</button>
            </a>
          </div>
          <div
            className={`col-12 col-md-6 ${storyStyles.xsSmHidden} ${
              storyStyles.storyImgDiv
            }`}
          >
            <img
              src="https://www.dqindia.com/wp-content/uploads/2017/05/access-control-system-1024x671.jpg"
              className={`${storyStyles.storyImg} img-fluid`}
              alt="story img"
            />
          </div>
        </div>
      </div>
    )
  }
}
