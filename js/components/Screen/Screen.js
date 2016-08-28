import React, { Component } from 'react';
import * as Actions from '../../actions/creators'
import { connect } from 'react-redux';
import PixelRow from './PixelRow';


class Screen extends Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
    this.generateMap = this.generateMap.bind(this);
  }

  componentWillMount() {
    // this.generateMap();
  }

  generateMap() {
    const { settings } = this.props;

    this.screen = []

    // for (let i = 0; i < settings.width; i++) {
    //   this.screen.push((
    //     <PixelRow
    //       rowNum={i}
    //       settings={settings}
    //     />
    //   ));
    // }
  }

  render() {
    const { settings } = this.props;
    return (
      <div>
        <PixelRow
          settings={settings}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.map.mapSettings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (coord) => dispatch(Actions.clicked())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
