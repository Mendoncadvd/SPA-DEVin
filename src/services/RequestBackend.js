import axios from 'axios';
const URL = "http://localhost:3002/processo";
/* post get get delete*/
class RequestBackend {
    postProcesso(processo) {
        return axios.post(URL, processo)
        .catch(error => {
            throw error
        })
    }

    getID(id) {
        return axios.get(`${URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }

    getAssunto(assunto) {
        return axios.get(`${URL}?q=${assunto}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        }) 
    }

    deletePorID(id) {
        return axios.delete(`${URL}/${id}`)
        .catch(error => {
            throw error;
        })
    }
}

export default new RequestBackend();