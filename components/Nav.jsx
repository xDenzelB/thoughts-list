import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Navigation() {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <nav className="flex justify-between items-center">
        <Link href='/'>
          <button className="text-lg font-medium">Creative Minds</button>
        </Link>
        <ul className="flex items-center gap-10">
          {!user && (
          <Link  href={'/auth/login'}>
            <p className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </p>
          </Link>
          )}
          {user && (
            <div className="flex items-center gap-6">
              <Link href='/post'>
                  <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg text-sm">Post Thoughts</button>
              </Link>
              <Link href='/dashboard'>
                <img
                    className="w-12 rounded-full cursor-pointer"
                    src={user.photoURL} />
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}