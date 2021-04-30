import { LOGIN_USER} from '../Actions/ActionsTypes';


const initialState = {
   id: null,
   login: null,
   avatar_url: "",
   followers_url: "",
   repos_url: "",
   type: "",
   score: null
}

export const userData = (state=initialState, action) => {
    let nextState;

    switch(action.type) {
        case LOGIN_USER:
            nextState = state;
            nextState.id = action.value.data.id
            nextState.login = action.value.data.login;
            nextState.avatar_url = action.value.data.avatar_url;
            nextState.followers_url = action.value.data.followers_url;
            nextState.repos_url = action.value.data.repos_url;
            nextState.type = action.value.data.type
            nextState.score = action.value.data.score
            
            return nextState || state;
        default:
            return state;
    }
}