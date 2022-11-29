import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import { Server } from "socket.io";
import http from "http";
import CommentsModel from "./models/commentModel.js";
import PostMessage from "./models/postModel.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const server = http.createServer(app);

export const io = new Server(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  console.log('an user is connected')
})

// io.on("connection", (socket) => {
//   console.log(`socket ${socket.id} connected`);

//   socket.on("POST:JOIN", ({ postId, currentUser }) => {
//     socket.join(postId);
//     const post = { postId, comments: [] };
//     let postMessage = new CommentsModel(post);

//     postMessage.comments.push({ username, userImg, message });
//     postMessage.save();

//     console.log("user join ", currentUser.username);
//     console.log("post join ", postMessage.title);

//     // socket.to(postId).broadcast.emit("ROOM:JOINED", { message: "CONGRAT" });
//   });

//   socket.on("message", function ({ postId, message, username, userImg }) {
//     // Обработчик на событие 'message' и аргументом (msg) из переменной message

//     const post = CommentsModel.find(postId);

//     if (post) {
//       post.comments.push({ username, userImg, message });
//       CommentsModel.findByIdAndUpdate(postId, post);
//     } else {
//     }

//     console.warn("-----------"); // Logging
//     console.warn("Post ID: " + postId + " | User: " + username + " | Message: " + message);
//     console.warn("====> Sending message to other chaters...");

//     io.sockets.emit("messageToClients", post); // Отправляем всем сокетам событие 'messageToClients' и отправляем туда же два аргумента (текст, имя юзера)
//   });

//   // upon disconnection
//   socket.on("disconnect", (reason) => {
//     console.log(`socket ${socket.id} disconnected due to ${reason}`);
//   });
// });

// const serverStart = async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_URL, options);

//     io.on("connection", (socket) => {
//       const db = mongoose.connection.db;
//       const postIns = db.collection("comments");
//       const postCom = db
//         .collection("comments")
//         .find()
//         .sort({ _id: 1 })
//         .toArray((err, res) => {
//           if (err) {
//             throw err;
//           }
//           socket.emit("output", res);
//         });

//       socket.emit("join", ({ currentUser }) => {
//         console.warn("-------------");
//         console.warn("Username: " + currentUser.username);
//       });

//       const sendStatus = (s) => {
//         socket.emit("status", s);
//       };

//       socket.on("input", (data) => {
//         let postId = data.postId;
//         let comments = {
//           username: data.username,
//           userImg: data.userImg,
//           message: data.message,
//         };

//         if (comments.username == "" || comments.message == "") {
//           sendStatus("Please enter a name and message");
//         } else {
//           // Insert message

//           console.warn(postIns.stats)

//           const foundPost = postIns.find({ postId: postId }).toArray()

//           console.log('POOOST', foundPost)
//           if (foundPost) {
//             postIns.updateOne({
//               filter: {
//                 postId: postId,
//               },
//               update: {
//                 comments: [comments],
//               },
//             });
//           } else {
//             postIns.insertOne({ postId: postId, comments: [comments] }),
//               socket.emit("output", [data]);
//           }

//           sendStatus({
//             message: "Message sent",
//             clear: true,
//           });
//         }
//       });
//     });
//     server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// serverStart();
// })

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => server.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
