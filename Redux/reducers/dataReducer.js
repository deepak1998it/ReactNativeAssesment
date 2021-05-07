import { FORM_DATA } from '../constants/index';
const initialState = {
    data: []
};
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_DATA:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}

export default dataReducer;
