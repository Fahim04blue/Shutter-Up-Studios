import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import useLocalStorage from 'Hooks/useLocalStorage';
import 'lib/firebase';
import {
  createContext, useContext, useEffect, useState
} from 'react';
import UserService from 'services/UserService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [isAdmin, setIsAdmin] = useLocalStorage('role', 'user');
  const [authToken, setAuthToken] = useState('');

  const saveUserToDB = (email, username) => {
    const user = { email, name: username };
    console.log(user);
    UserService.createUser(user).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err.message);
    });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    auth.currentUser?.getIdToken(true).then((token) => {
      setAuthToken(token);
      console.log(authToken);
      localStorage.setItem('token', authToken);
    });
  });

  // signup
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    saveUserToDB(email, username);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // Store Token

  // const storeToken = () => {
  //   const auth = getAuth();
  //   localStorage.setItem('token', authToken);
  //   auth.currentUser.getIdTokenResult().then((token) => {
  //     console.log(token);
  //   });
  // };

  // login
  const login = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password);
    // storeToken();
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const response = await signInWithPopup(auth, provider);
      saveUserToDB(response.user.email, response.user.displayName);
      setCurrentUser(response.user);
      // storeToken();
    } catch (error) {
      console.log(error.message);
    }
  };

  // logout
  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    localStorage.removeItem('token');
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
    isAdmin,
    setIsAdmin,

  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
