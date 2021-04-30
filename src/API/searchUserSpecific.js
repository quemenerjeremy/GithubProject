import Axios from 'axios';

export default class SearchUser {
    static async SpecificUser(username) {
        const url = `https://api.github.com/search/users?q=${username}`
        return await Axios.get(url)
        .then((response) => {
            return (response)
        })
        .catch((error) => {
            return (error.response)
        })
    }


}