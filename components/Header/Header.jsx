import Link from 'next/link';
import useDarkMode from 'use-dark-mode';
import Moon from '../../assets/icons/moon.svg';
import headerStyles from './headerStyles';

const Header = () => {
  const darkMode = useDarkMode(false);  
  return (
    <>
      <header>
        <Link href="/">
          <h1>We Work Remotely Feed</h1>
        </Link>
        <Moon className="toggle" onClick={darkMode.toggle}/>
      </header>
      <style jsx global>{headerStyles}</style>
    </>
  )
}

export default Header;
