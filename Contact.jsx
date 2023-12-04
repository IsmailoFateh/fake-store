// src/Contact.js
import React, { useState } from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddContact = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAddContact = () => {
    onAddContact(newContact);
    setNewContact({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={newContact.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} />
      </div>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

const Contact = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Salah', email: 'dobrota@gmail.com', phone: '05 55 21 22 18' },
    { id: 2, name: 'nasser pain', email: 'nasser@gmail.com', phone: '06 75 39 60 31' },
    
  ]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, { id: prevContacts.length + 1, ...newContact }]);
  };

  return (
    <div>
      <ContactList contacts={contacts} />
      <AddContact onAddContact={handleAddContact} />
    </div>
  );
};

export default Contact;
