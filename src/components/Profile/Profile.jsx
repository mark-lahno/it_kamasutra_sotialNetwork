import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
  return <div>

    <ProfileInfo />
    <MyPost />
  </div>
}

export default Profile;