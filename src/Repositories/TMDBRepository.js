const axios = require('axios');

module.exports = class TMDBRepository {
  static MultiSearch() {
    axios.get(`${process.env.BASE_API_URL}/${process.env.API_VERSION}/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=jack&page=3&include_adult=false`)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
