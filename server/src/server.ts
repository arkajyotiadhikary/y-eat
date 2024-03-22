import env from "dotenv";
import app from "./app";

// configurign env for server
env.config();

app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
