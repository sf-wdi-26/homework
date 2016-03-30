import React from 'react';

export default class ProfilePic extends React.Component {
  render() {
    return (
      <a {...this.props}>
        {this.props.children[0]}
        <img style={{width: '200px'}} src="http://bit.ly/1MItzOs"/>
        {this.props.children[1]}
      </a>
    );
  }
}
