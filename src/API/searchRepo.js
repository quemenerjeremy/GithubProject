import Axios from 'axios';

export default class SearchRepo {
    static async SpecificRepo(username) {
        const url = `https://api.github.com/users/${username}/repos`
        return await Axios.get(url)
        .then((response) => {
            return (response.data)
        })
        .catch((error) => {
            return (error.response)
        })
    }
}