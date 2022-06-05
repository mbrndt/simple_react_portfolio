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
          date="2010-2014"
          iconStyle={{ background: "#FFAFCC", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            My High School, Place, Country
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#FFAFCC", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            My High School, Place, Country
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#f3c44e", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            My High School, Place, Country
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#f3c44e", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            My High School, Place, Country
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
