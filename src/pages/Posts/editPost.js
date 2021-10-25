import { doc, updateDoc } from "@firebase/firestore";
import db from "../../firebase";

export const editPost = async (id) => {
  const nombre = prompt("Nombre");

  const docRef = doc(db, "posts", id);
  const payload = {
    nombre,
  };
  await updateDoc(docRef, payload);
};
