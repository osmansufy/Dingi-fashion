import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api.solveaz.com/v0/'
})

export default instance