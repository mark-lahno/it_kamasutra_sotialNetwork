import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={classes.MyPosts}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </div>
    <div>
      New post
    </div>
    <div className={classes.posts}>
      <Post message='Hi, how are you?' likesCount='0' />
      <Post message="It's my first post" likesCount='23' />
    </div>
  </div>
}

export default MyPosts;