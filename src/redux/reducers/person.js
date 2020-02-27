import { FETCH_PERSON, UPDATE_PERSON } from "../actions/types";

const initialState = {
  person: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...state,
        person: action.person
      };
    case UPDATE_PERSON:
      return {
        ...state,
        person: [state.person].map(
          person =>
            [action.person].find(o => o.personid === person.personid) || person
        )
      };
    default:
      return state;
  }
};
