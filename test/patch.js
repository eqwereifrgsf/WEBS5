// /* eslint-disable */
// const assert = require('assert');
// const dotenv = require('dotenv');
// const PlaylistUp = require('../src/Apis/patch/UpdatePlaylist');
// const Playlist = require('../src/Apis/post/CreatePlaylist');
// const UserModel = require('../src/Models/UserModel');
// const UserRepo = require('../src/Repositories/UserRepository');
// const PlaylistRepo = require('../src/Repositories/PlaylistRepository');
// const User = require('../src/Apis/patch/UpdateUser');

// dotenv.config();

// describe('Patches', () => {
//     describe('playlist', () => {
//         it(`Can patch playlist`, (done) => {
//           playlist = new PlaylistUp();
//           const regggg = UserRepo
//           .Create(UserModel.createNewUser('testing123', '321gnitset', 'User'));
//           regggg.then(function (result) {
//             const cr = PlaylistRepo.Create(
//               {
//                 Title: 'buh',
//                 _Creator: result._id,
//               },
//             );
//             cr.then(function (result2) {
//               console.log('GTSAFDTYSDGYUIFSDUFGHUSDFGYUIGSFYUSYUDGFStag');
//               const req = {};
//               req.params = {};
//               req.query = {};
//               req.body = { "array": [ { "op": "rename", "path": "/Title", "value": "xd" },
//               { "op": "add", "path": "/Movies", "value": "604f3ea58180465f6c82e530" },
//               { "op": "remove", "path": "/Movies", "value": "604f3ea58180465f6c82e52e" } ] };
//               req.body.Username = 'Testuser';
//               req.body.Password = 'Testpassword123';
//               req.JWTPayload = {};
//               const res = {};

//               res.status = function() {
//                 return this;
//               };
//               res.json = function(response) {
//                 assert.notStrictEqual(response, 'Error');
//               };
//               playlist.method(req, res);
//             });
//             done();
//           });
//         });
//       });
//     describe('user', () => {
//         it(`Can patch user`, (done) => {
//           let res = {};
//           const regggg = UserRepo.
// Create(UserModel.createNewUser('testing123', '321gnitset', 'User'));
//           regggg.then(function (result) {
//             user = new User();
//             const req = {};
//             req.params = {};
//             req.params.idUser = result._id;
//             req.query = {};
//             req.body = { "array": [ { "op": "rename", "path": "/Username", "value": "Henk" },
//             { "op": "changepassword", "path": "/Password", "value": "based456" },
//             { "op": "changerole", "path": "/Role", "value": "Administrator" },
//             { "op": "addtowatchlist", "path": "/Watching", "value": "604f3ea58180465f6c82e531" },
//             { "op": "addtowatchlist", "path": "/Dropped", "value": "604f3ea58180465f6c82e53a" },
//             { "op": "removefromwatchlist", "path": "/Dropped",
// "value": "604f3ea58180465f6c82e531" } ] };
//             req.JWTPayload = {};

//             res.status = function() {
//               return this;
//             };
//             res.json = function(response) {
//               assert.notStrictEqual(response, 'Error');
//             };
//             user.method(req, res);
//             const uget = UserRepo.GetById(result._id);
//             uget.then(function (result2) {
//             //   UserRepo.Remove(result2._id);
//             });
//           });
//           done();
//         });
//       });
// });
