import {SET_COUPONS} from '../Types/LoginTypes';

const initialState = {
  logged: false,
  userData: undefined,
  mainCourtLists: undefined,
  allMainCourtLists: undefined,
  userLocation: {
    city: 'Dubai',
    country: 'United Arab Emirates',
    id: 1,
    label: 'Dubai',
    latitude: 25.204849,
    longitude: 55.270782,
    value: 'Dubai',
  },
  SkillLevel: 'Beginner',
  coupons: undefined,
  packgesList: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUPONS:
      return {
        ...state,
        coupons: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
