import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineCard from "../card/TimelineCard";
import "./TimelineCore.css";
import data from "./data.json";

export default function TimelineCore() {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        {data.map((d) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div style={{ maxWidth: "400px" }}>
                  <TimelineCard cardData={d} />
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </React.Fragment>
  );
}
