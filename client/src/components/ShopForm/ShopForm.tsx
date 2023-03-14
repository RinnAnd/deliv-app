import { useState } from "react";
import { Shop } from "../../redux/types";
import { useCreateShopMutation } from "../../redux/slices/shopSlice";
import './ShopForm.scss'

const ShopForm = () => {
  const [createShop] = useCreateShopMutation();

  const [form, setForm] = useState<Shop>({
    name: "",
    cuisine: "",
    logo: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    createShop(form);
    setForm({
      name: "",
      cuisine: "",
      logo: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Cuisine:{" "}
          <input
            type="text"
            name="cuisine"
            value={form.cuisine}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo:{" "}
          <input
            type="text"
            name="logo"
            value={form.logo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ShopForm;
