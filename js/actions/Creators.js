import * as Types from './Types';

export const handleClick = (coords) => ({
  coords,
  type: Types.HANDLE_CLICK,
});

export default {
  handleClick,
};
