import React, { Component } from 'react'


class Loading extends Component {
   
    render() {    
        setTimeout(() => {
            const hide = document.getElementById('disappear');
            hide.style.visibility = 'hidden';
          }, 100);
    return (
      <div id="disappear">
        <b>Loading..</b>
      </div>
    )
  }
}

export default Loading;