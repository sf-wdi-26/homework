"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello-world'
import Greeting from './components/greeting.jsx'
import ProfilePic from './components/profilepic.jsx'
import Post from './components/post.jsx'

const myPost = {
  title: "My First Post",
  author: "Mr Cat",
  body: "Check it out. This is the first post on my dope blog!",
  comments: ["First!", "Second", "This blog needs more GIFs"]
};

ReactDOM.render(
  <HelloWorld name="WDI 26" mood="loving life"/>,
  document.getElementById("hello-world-component")
);

// ReactDOM.render(
//   <Greeting/>,
//   document.getElementById('greeting')
// );

ReactDOM.render(
  <ProfilePic href="http://www.nyan.cat/" className="profile-cat" id="mr-cat">
    <h3>This Kitten Cashes Checks</h3>
    <p className="bio">Killing you softly...</p>
  </ProfilePic>,
  document.getElementById("profile-pic-component")
);

ReactDOM.render(
  <Post title={myPost.title} author={myPost.author} body={myPost.body} comments={myPost.comments}/>,
  document.getElementById('post-component')
);
