import '../src/styles/App.css';
import deer from './deer.jpg';

function Header() { 
  return (
      <header>
        <nav>
          <img src={deer} width={200} alt="Deer" />   
        </nav> 
      </header>
  );
}

export default Header;