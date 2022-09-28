import { School, Work } from "@material-ui/icons";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#8b96d1">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "#FFAFCC", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            CBM Project Management GmbH Hamburg
          </h3>
          <p>Computer Scientist</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#f3c44e", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Fortis IT GmbH Hamburg
          </h3>
          <p>Internship Software Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="soon"
          iconStyle={{ background: "#f3c44e", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title"> Your Company</h3>
          <p>best worker who is passionate about learning</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
