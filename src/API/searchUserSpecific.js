import Axios from 'axios';

export default class SearchUsers {
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
    static async findUsers(username, value) {
        const url = `https://api.github.com/search/users?q=${username}&per_page=${value}`
        return await Axios.get(url)
        .then((response) => {
            return (response.data.items)
        })
        .catch((error) => {
            return (error.response)
        })
    }

}