import { GET_GEOCODE_REQUESTED,
          GET_GEOCODE_SUCCESS,
          GET_GEOCODE_FAILED} from '../constants/action-types';


const initialState = {
  geocode: {},
  isLoading: false,
  error: '',
}

export default (state=initialState, action) => {
  console.log('action',action);
  console.log(state);
  switch (action.type) {
    case GET_GEOCODE_REQUESTED:
      console.log('GEOCODE REQUEST');
      return { ...state, isLoading: true};
    case GET_GEOCODE_SUCCESS:
      console.log('geocode success reducer');
      return {...state, isLoading: false, geocode: action.payload};
    case GET_GEOCODE_FAILED:
      console.log('grocodefaild');
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
