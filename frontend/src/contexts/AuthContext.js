import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import 'lib/firebase';
import {
  createContext, useContext, useEffect, useState
} from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // signup
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // login
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  //   const formatUser = (user) => ({
  //     email: user.email,
  //     name: user.displayName,
  //     provider: user.providerData[0].providerId,
  //     photoUrl: user.photoURL,
  //     uid: user.uid,
  //   });

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const response = await signInWithPopup(auth, provider);
      //   const formattedUser = formatUser(response.user);
      setCurrentUser(response.user);
      console.log(response.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // logout
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
