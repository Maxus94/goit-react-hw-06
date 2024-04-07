import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
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
