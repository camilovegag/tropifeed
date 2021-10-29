import Header from "../../components/Header";
import styles from "./Profile.module.css";
import { useAuth } from "../../firebase.js";
import Button from '../../components/Button'
import { logOut } from "../../firebase";
import {useHistory} from 'react-router-dom';

const Profile = () => {
  const currentUser = useAuth();
  const history = useHistory();

  const signOut = async () => {
    try {
      await logOut()
      history.push('/signin')
  
    } catch  {
      alert('An error ocurred while trying to log out')
    }
  }

  return (
    <main>
      <Header title="Perfil" />
      <p>{currentUser?.email}</p>
      <Button text="Cerrar sesión" onClick={signOut} />
    </main>
  );
};

export default Profile;
