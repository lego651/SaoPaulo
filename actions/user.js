import firebase from 'firebase';
import db from '../config/firebase';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(response.user.email);
      dispatch({ type:'LOGIN', payload: response.user.email });
    } catch(e) {
      alert(e)
    }
  }
}