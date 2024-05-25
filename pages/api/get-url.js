import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "urls"));
      const urls = querySnapshot.docs.map((doc) => doc.data().url);
      res.status(200).json({ urls });
    } catch (e) {
      res.status(500).json({ error: "Error retrieving URLs" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
