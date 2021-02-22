import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api.jeanhive.com/v0/'
})

export default instance