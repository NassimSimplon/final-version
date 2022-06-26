const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('users',new Schema({
    fullName:{
        type:String,
        required:true
    },
    image:{
        type:String 
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cours:[{ 
      playlist: [
        {commentId:{
          type:String
        },
          image:{type: String},
            video: {
              type: String,
            },
          title:{type:String},
            description: {
              type: String,
            }
            
          }
        ]}],

    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }
}))