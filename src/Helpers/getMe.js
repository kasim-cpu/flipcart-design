import axios from 'axios';

export default async function me() {
    return new Promise((async (resolve, reject) => {
        try {
            const { data } = await axios.get(`${ process.env.API_URI }/auth/me`, {
                headers: {
                    authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
                },
            });
            return resolve(data);
        } catch (e) {
            return reject(e);
        }
    }));
}
