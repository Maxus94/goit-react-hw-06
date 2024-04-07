import { useEffect, useState } from "react";

import ContactList from "./Components/ContactList/ContactList";

import "./App.css";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      return JSON.parse(localContacts);
    } else return [];
  });

  const [filter, setFilter] = useState("");

  useEffect(
    () => localStorage.setItem("contacts", JSON.stringify(contacts)),
    [contacts]
  );

  function changeFilter(filterText) {
    setFilter(filterText);
  }

  function filterContacts(contacts) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const addContact = (contact) => {
    if (
      contacts.some(
        (item) => item.name === contact.name && item.number === contact.number
      )
    ) {
      alert("Contact already exist");
      return;
    }
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id != id));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox changeFilter={changeFilter} filter={filter} />
      <ContactList
        contacts={filterContacts(contacts)}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
