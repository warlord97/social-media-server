const mongoose = require("mongoose");

module.exports = async () => {
  const uri =
    "mongodb+srv://shubhamyadav81197:wXxoIk5QFwMsgTVn@cluster0.kfcvebq.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`mongoDb connected ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
