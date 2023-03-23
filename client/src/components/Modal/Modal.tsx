import { useAppSelector } from "../../redux/store/hooks";
import './Modal.scss'
import ModalCard from "../ModalCard/ModalCard";

interface ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({modal, setModal}:ModalProps) => {

    const toggle = () => {
        setModal(!modal)
    }
    
    const cart = useAppSelector(state => state.cart.products)

  return (
    <div className="overlay">
        <div className="modal">
            <h2>Your cart</h2>
            {cart.map(product => (
                <ModalCard key={product.dish_id} title={product.title} image={product.image} price={product.price}/>
            ))}
            <button onClick={toggle}>Close cart</button>
        </div>
    </div>
  )
}

export default Modal