import './Header.css'
import ToggleMenu from '../ToggleMenu/ToggleMenu';

const Header = () => {
  return (
    <div style={{ position: 'fixed', display: 'flex', flex: 1 , width: '100%', justifyContent: "space-between"}}>
      <header>
        Kéziah
      </header>
      <div style={{ backgroundColor: '#fff', lineHeight: '60px', paddingTop: '.5rem', zIndex: '1', paddingRight: '7%' }}>
        <ToggleMenu />
      </div>
    </div>
  );
};

export default Header;