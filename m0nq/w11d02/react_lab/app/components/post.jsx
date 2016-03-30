import React from 'react';
import comments from './comment';

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <h4>By {this.props.author}</h4>
        <p>{this.props.body}</p>
        <h3>Comments</h3>
          <ul> {
            this.props.comments.map((comment, index) => {
              return <li key={index}>{comment}</li>
            })
          }</ul>
      </div>
    )
  }
}
