import { Dish } from "../../redux/types"
import './ModalCard.scss';

const ModalCard = (dish: Dish) => {

    const { title, image, price } = dish

  return (
    <div className="modal_card_box">
        <div className="modal_content">
            <div className="modal_image">
                <img src={image} alt="noimg" className="modal_img" />
            </div>
            <div className="modal_data">
                <h4>{title}</h4>
                <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalCard