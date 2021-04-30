import { LOGIN_USER } from './ActionsTypes';


export const loginUserAction = (data) => {
    return {
        type: LOGIN_USER,
        value: {data: data}
    };
}
