// const UserRepository = require('../../Repositories/UserRepository');
// const TMDBRepo = require('../../Repositories/TMDBRepository');

// module.exports = class GetUserWatchlist {
//   constructor() {
//     this.version = '/v1';
//     this.path = `${this.version}/user/:idUser/watchlist/:filter?`;
//     this.restfulMethod = 'get';
//     this.allowedRoles = ['Superadmin', 'Admin', 'User'];
//   }

//   async method(req, res) {
//     const addExternalFromWatchlistArray = async (response) => {
//         const newResponse = JSON.parse(JSON.stringify(response));
//         // eslint-disable-next-line
//         for (const playlist of newResponse) {
//           // eslint-disable-next-line
//           const x = await addExternalFromWatchlist(playlist);
//           playlist.Movies = x.Movies;
//         }
//         return newResponse;
//       };
//       const addExternalFromWatchlist = async (response) => {
//         const newResponse = JSON.parse(JSON.stringify(response));
//         // eslint-disable-next-line
//         for (const movie of newResponse.Movies) {
//           // eslint-disable-next-line
//             const externalMovie = await TMDBRepo.GetMovie(movie.TmdbID);
//           // eslint-disable-next-line
//             movie.externalMovie = externalMovie;
//         }
//         return newResponse;
//       };
//       if (req.params.filter) {
//         const response = await 
// UserRepository.GetSpecificWatchlist(req.params.idUser, req.params.filter);
//         const newResponse = await addExternalFromPlaylist(response);
//         res.sendCustom(200, req.headers.accept, newResponse);
//       } else {
//         const response = await PlaylistRepository.GetAllPopulateMovies(page);
//         const newResponse = await addExternalFromWatchlistArray(response);
//         res.status(200).json(newResponse);
//       }
//   }
// };
