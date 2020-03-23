import React from "react";
import DayListItem from "./DayListItem";
//------------------renders in the application.js------

export default function DayList(props) {
  console.log(props);
  return (
    <ul>
      {props.days.map(day => (
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={props.day === day.name}
          setDay={props.setDay}
        />
      ))}
    </ul>
  );
}
