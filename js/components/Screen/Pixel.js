import React from 'react';
import { connect } from  'react-redux';


const Pixel = (props) => {
  // const {
  // //   mapObj,
  // //   settings,
  //   coords,
  // } = props;

  // const styles = {
  //   height: settings.pixel.size,
  //   width: settings.pixel.size,
  // };

  return (
    <span>-</span>
  );
}

Pixel.propTypes = {
  mapObj: React.PropTypes.obj,
  coords: React.PropTypes.string,
  settings: React.PropTypes.obj,
}

const mapStateToProps = (state) => ({
  mapObj: state.map.mapObj,
  settings: state.map.settings,
});

export default connect(mapStateToProps)(Pixel);
