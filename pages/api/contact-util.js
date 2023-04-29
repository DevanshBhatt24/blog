import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let client;
    const { email, name, message } = req.body;
    if (
      !email.includes("@") ||
      name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid details" });
      return;
    }
    const data = {
      email,
      name,
      message,
    };
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.amrif11.mongodb.net/${process.env.database}`
      );
      
    } catch (e) {
      res.status(500).json(e);
    }
    try {
      const db = client.db();
      await db.collection("messages").insertOne(data);
      client.close();
    } catch (e) {
      res.status(400).json(e);
    }
    return res.status(201).json({ message: "feedback submitted" });
  }
}
