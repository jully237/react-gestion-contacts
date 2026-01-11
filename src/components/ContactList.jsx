import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p>Aucun contact disponible</p>;
  }

  return (
    <div>
      <p>Contacts : {contacts.length}</p>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
