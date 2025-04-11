import "./database.js"
import { PostModel } from "./models.js"

import posts from "./posts.json" with { type: "json" }

PostModel.insertMany(posts).then(() => {
    console.log("inserted successfully");
}
).catch((error) => {
    console.error("Failed to insert :", error);
});
