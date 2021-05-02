import { LOGIN_USER} from '../Actions/ActionsTypes';

const initialState = {
   id: null,
   login: null,
   bio: "",
   email: "",
   avatar_url: "",
   followers: null,
   followers_url: "",
   following: null,
   following_url: "",
   urlAccount: "",
   nbRepo: null,
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
            nextState.bio = action.value.data.bio
            nextState.email = action.value.data.email
            nextState.avatar_url = action.value.data.avatar_url;
            nextState.followers = action.value.data.followers
            nextState.followers_url = action.value.data.followers_url;
            nextState.following = action.value.data.following
            nextState.following_url = action.value.data.following_url
            nextState.urlAccount = action.value.data.urlAccount
            nextState.nbRepo = action.value.data.nbRepo
            nextState.repos_url = action.value.data.repos_url;
            nextState.type = action.value.data.type
            nextState.score = action.value.data.score
            
            return nextState || state;
        default:
            return state;
    }
}