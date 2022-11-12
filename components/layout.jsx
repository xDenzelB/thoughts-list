import Nav from './Nav';

export default function Layout({children}) {
  return (
    <div className="mx-6 md:max-w-2x1 md:mx-auto font-railway">
      <Nav />
      <main>{children}</main>
    </div>
  )
}