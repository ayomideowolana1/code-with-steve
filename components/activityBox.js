import React from "react";
import styles from "/styles/activityBox.module.css";

const ActivityBox = ({ activities,message }) => {
  return <div className={styles.activityBox}>
      <h3>ACTIVITY BOX</h3>
      <p>{message}</p>
      <ol>
        {activities.map(activity => {
          return <li>
              {activity}
            </li>;
        })}
      </ol>
    </div>;
};

export default ActivityBox;
