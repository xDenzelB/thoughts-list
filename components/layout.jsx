import Nav from './Nav';
import ThemeSwitcher from './ThemeSwitcher';

export default function Layout({children}) {
  return (
    <div className="mx-6 md:max-w-2x1 md:mx-auto font-railway">
      
      <Nav />
        <ThemeSwitcher />
      <main>
        {children}
      </main>
    </div>
  )
}