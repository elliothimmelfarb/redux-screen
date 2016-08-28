import * as Types from '../actions/Types';



function makeMap() {
  const worldMap = {};
  for (let i = 0; i < settings.height; i++) {
    for (let j = 0; j < settings.width; j++) {
      worldMap[`${i}-${j}`] = false;
    }
  }
  return worldMap;
}

const initialState = {
  mapObj: makeMap(),
  settings: {
    map :{
      height: 10,
      width: 10,
    },
    pixel: {
      size: 5,
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.HANDLE_CLICK: {
      const mapObj = Object.assign(
        {},
        state.mapObj,
        { [action.coords]: !state.mapObj[action.coords]
      });
      return Object.assign({}, state, { mapObj })
    }
    default:
      return state;
  }
}
