import { collection, getDocs } from 'firebase/firestore';
import db from '../database/connect';

const getTodo = async () => {
  const coll = collection(db, 'todo');

  const querySnapshot = await getDocs(coll);
  return querySnapshot.docs.map((doc) => doc);
};

export default getTodo;
