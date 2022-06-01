import axios from '../utils/axios';

class Auth {

    constructor() {
        this.endPoints = {
            post: "/login",
        }
    }

    async login(email, password) {
        try {
            const request = await axios.post(this.endPoints.post, {
                email,
                password
            });
            if (request.status == 200) {
                const data = request.data;
                return data;
            }
        } catch (e) {

            throw new Error(e.message);
        }
    }
}

export default new Auth();