import Link from "next/link";
export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <Link href='/'>
          <button className="text-lg font-medium">Creative Minds</button>
        </Link>
        <ul className="flex items-center gap-10">
          <Link  href={'/auth/login'}>
            <p className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </p>
          </Link>
        </ul>
      </nav>
    </div>
  );
}