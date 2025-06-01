import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors()); // governs the policies and mechanisms of how various resources can be shared across different domains or origins
app.use(express.json()); // encoding the data as JSON in the HTTP request body allows for arbitrarily large amounts of data and secure data encryption
Lab5(app); // pass reference to express module
Hello(app);
app.listen(process.env.PORT || 4000);
