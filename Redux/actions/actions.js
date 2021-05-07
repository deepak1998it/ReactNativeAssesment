import { FORM_DATA } from '../constants/index';
export function saveData(data) {
    return {
        type: FORM_DATA,
        payload: data
    }
}