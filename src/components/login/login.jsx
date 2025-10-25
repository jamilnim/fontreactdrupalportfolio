import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../auth/firebaseConfig";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
const adminEmail = "jamilnimbook2@gmail.com";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.email !== adminEmail) {
        alert("Only the admin can log in.");
        return;
      }

      navigate("/MassageList"); // Redirect admin
    } catch (err) {
      console.error(err);
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}
