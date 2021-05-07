import { FORM_DATA } from '../constants/index';
export function changeCount(data) {
    return {
        type: FORM_DATA,
        payload: data
    }
}