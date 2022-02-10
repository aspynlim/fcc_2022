import '../src/styles/App.css';
import deer from './images/deer.jpg';

function Header() { 
  return (
      <header>
        <nav>
          <img className="deer" src={deer} alt="Deer" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>  
        </nav> 
      </header>
  );
}

export default Header;