import './Header.scss';
import { BsCartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa'
import { ImMenu } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import Logo from '../logo/Logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/store';
import Modal from '../Modal/Modal';

const Header = () => {

  const [modal, setModal] = useState(false)

  const cartSize:number = useAppSelector(state => state.cart.products.length)

  const navigate = useNavigate()

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <div className="header_main">
      <nav className="header_nav">
        <div className="nav_left">
            <span><ImMenu size={20} /></span>
            <span onClick={() => navigate('/')}><Logo /></span>
        </div>
        <div className="nav_right">
            <span><FaSearch size={20}/></span>
            <span><FaUserCircle size={20}/></span>
            <span onClick={toggle}><BsCartFill size={20}/></span>
        </div>
        {cartSize >= 1 ? ( <span className='cartSize'>{cartSize}</span>) : null}
      </nav>
      {modal ? <Modal modal={modal} setModal={setModal}/> : <></>}
    </div>
  );
};

export default Header;
