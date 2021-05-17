import React from 'react';

const Subject = () => {
  render(){
    return(
      <h1>{this.props.title}</h1>
      <br/>
      <div>{this.props.sub}</div>
    )
  }
}

export default Subject;
