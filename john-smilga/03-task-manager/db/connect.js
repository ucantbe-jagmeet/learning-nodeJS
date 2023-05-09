const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ucantbe-jagmeet:Jagmeet787600@cluster0.wzawilj.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to the DB`))
  .catch((err) => console.log(err));
