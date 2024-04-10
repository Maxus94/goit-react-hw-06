import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <p className={css.contactItem}>
          <BsPersonFill className={css.iconStyle} />
          {name}
        </p>
        <p className={css.contactItem}>
          <BsFillTelephoneFill className={css.iconStyle} />
          {number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
