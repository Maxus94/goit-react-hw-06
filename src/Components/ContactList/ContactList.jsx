import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsContainer}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
