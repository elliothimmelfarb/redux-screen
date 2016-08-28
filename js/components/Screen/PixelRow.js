import React from 'react';
import Pixel from './Pixel';

const PixelRow = (props) => {
  // const {
  //   rowNum,
  //   settings,
  // } = props;

  const row = [];

  // for (let i = 0; i < settings.width; i++) {
  //   row.push(
  //     <Pixel
  //       key={i}
  //       coords={`${rowNum}-${i}`}
  //     />
  //   );
  // }

  return (
    <div>
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
    </div>
  )
}

const mapStateToProps = (state) => ({
  settings: state.map.settings,
});

export default PixelRow;
