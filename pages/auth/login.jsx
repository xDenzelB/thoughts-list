import { FcGoogle } from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../utils/firebase";
export default function Login() {

  const googleProv = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProv)
    } catch (error) {
      
    }
  }
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2x1 font-medium">Join Today!</h2>
      <div className="py-4">
        <button onClick={googleLogin} className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
        <FcGoogle className="text-2x1" />
        Sign in with Google
        </button>
      </div>
    </div>
  )
}