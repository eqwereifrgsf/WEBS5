const HttpFacade = require('../Http/HttpFacade');

const httpFacade = new HttpFacade();
module.exports = class TMDBRepository {
  static async MultiSearch(query, language = 'en-US', page = 1, includeAdult = false) {
    try {
      const response = await httpFacade.get(`${process.env.BASE_API_URL}/${process.env.API_VERSION}/search/multi?api_key=${process.env.API_KEY}&language=${language}&query=${query}&page=${page}&include_adult=${includeAdult}`);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
    return {};
  }

  static async GetMovie(MovieID) {
    try {
      // eslint-disable-next-line
      let response = await httpFacade.get(`${process.env.BASE_API_URL}/${process.env.API_VERSION}/movie/${MovieID}?api_key=${process.env.API_KEY}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {};
  }
};
