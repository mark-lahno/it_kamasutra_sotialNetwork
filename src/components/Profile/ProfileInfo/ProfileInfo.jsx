import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return <div>
    <div>
      <img src='https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg' />
    </div>
    <div className={classes.description}>
      ava + description
    </div>
  </div>
}

export default ProfileInfo