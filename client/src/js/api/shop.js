/**
 * Mocking client-server processing
 */
import data from './data.json';

const products = data.products;
const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
