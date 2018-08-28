import axios from 'axios'

const helperAxios = function (fetchMethod, fetchUrl, fetchData) {
  return axios({
    method: fetchMethod,
    url: `http://localhost:3000${fetchUrl}`,
    headers: {
      token: localStorage.getItem('token')
    },
    data: fetchData
  })
}

export default helperAxios
