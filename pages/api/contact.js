import { MongoClient } from "mongodb";
async function handler(req, res) {
  const { email, name, message } = req.body;

  if (
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === "" ||
    !email.includes("@")
  ) {
    res.status(422).send({ message: "invalid data" });
    return;
  }

  const data = { email, name, message };

  let client;

  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_clustername}.2wgn5.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "can't connect to database" });
    return;
  }

  const db = client.db(process.env.db_name);
  let result;

  try {
    result = await db.collection("messages").insertOne(data);
  } catch (error) {
    res.status(500).send({ message: "insert message faild" });
    return;
  }

  res.status(200).send({
    message: "Successfully stored message",
    data: result,
  });
}

export default handler;
