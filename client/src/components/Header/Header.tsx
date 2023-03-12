import './Header.scss';
import { BsCartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa'
import { ImMenu } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import Logo from '../logo/Logo';
import { useState } from 'react';

const Header = () => {

  const [bar, setBar] = useState<boolean>(false)

  return (
    <div className="header_main">
      <nav className="header_nav">
        <div className="nav_left">
            <span><ImMenu size={20} /></span>
            <span><Logo /></span>
        </div>
        <div className="nav_right">
            <span><FaSearch size={20}/></span>
            <span><FaUserCircle size={20}/></span>
            <span><BsCartFill style={{transform: 'translateY(-2px)'}} size={20}/></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
