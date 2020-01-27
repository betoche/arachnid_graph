import React from 'react';
import cheese from './img/1_W1IPZj18aerIffSO321a2w.png';

class Canvas extends React.Component {

render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src={cheese} className="hidden" />
      </div>
    )
  }
}
export default Canvas