import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'urls'), { url });
      res.status(200).json({ message: 'URL saved!', id: docRef.id });
    } catch (e) {
      res.json({ error: 'Error saving URL' });
    }
  } else {
    res.json({ error: 'Method not allowed' });
  }
}
