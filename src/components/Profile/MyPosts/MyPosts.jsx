import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';



let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 0 },
  { id: 2, message: 'It\'s my first post', likesCount: 23 },
  { id: 2, message: 'It\'s my first post, Harry', likesCount: 45 },
];

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
      {postsElements}
    </div>
  </div>
}

export default MyPosts;