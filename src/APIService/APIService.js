import axios from './axios-orders'

class APIService {
    static getInitialIngredients = () => {
        return axios.get( '/ingredients.json' )
    }

    static postOrder = (order) => {
        return axios.post( '/orders.json', order )
    }
}

export default APIService