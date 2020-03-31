import createDataContext from './createDataContext';

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => position => {
  dispatch({ type: 'add_current_location', payload: position });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  initialState
);
