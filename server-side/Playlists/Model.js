const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = mongoose.model(
  "playlists",
  new Schema({
    introTitle: { type: String },
    introParagraphe: { type: String },
    introVideo: { type: String },
    introImg: { type: String },
    playlist: [
      {
      chapiter:[
        {  image: { type: String },
        video: {
          type: String,
        },
        title: { type: String },
        description: {
          type: String,
        },}
      ]
      },
    ],
  })
);
