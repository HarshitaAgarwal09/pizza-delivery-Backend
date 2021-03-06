var connection = require("../connection");
const Schema = connection.Schema;
var FeedbackSchema = new Schema({
  feedbackid: {
    type: String,
    required: true,
    unique: true
    // type: Schema.Types.ObjectId,
  },
  userid: {
    type: String, //value will be _id of usermodel
    required: true // ref: 'users'
  },
  description: {
    type: String,
    max: 250
  },
  image: {
    type: String
  }
});

const FeedbackModel = connection.model("users", FeedbackSchema);
module.exports = FeedbackModel;
