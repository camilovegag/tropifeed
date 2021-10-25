import { deleteDoc, doc } from "@firebase/firestore";
import db from "../../firebase";

export const deletePost = async (id) => {
  const docRef = doc(db, "posts", id);
  let answer = window.confirm("¿Estás seguro de que quieres eliminar esta publicación?");
  if (answer) {
    await deleteDoc(docRef);
  }
};
