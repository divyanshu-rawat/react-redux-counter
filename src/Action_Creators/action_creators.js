

import {CONST} from '../Constants/constants';

export const incrementCounter = () => ({
  type: CONST.INCREMENT_COUNTER,
});
export const decrementCounter = () => ({
  type: CONST.DECREMENT_COUNTER,
});