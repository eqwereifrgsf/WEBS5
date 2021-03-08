const axios = require('axios');

module.exports = class Axios {
  get(url) {
    const result = axios.get(url)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
    return result;
  }
};
