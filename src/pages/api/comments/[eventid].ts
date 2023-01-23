export default function handler(req, res) {
  const eventId = req.query.eventid;

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Iliyan", text: "First comment" },
      { id: "c2", name: "Max", text: "Second comment" },
      { id: "c3", name: "Hristo", text: "Third comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
}
