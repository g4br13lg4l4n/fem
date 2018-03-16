import axios from 'axios'

const Axios = {
  getData : () => {
    axios.get('http://localhost:5000/api',)
      .then( (res) => res.data)
      .catch( (err) => console.log(err))
  }
}

export default Axios
