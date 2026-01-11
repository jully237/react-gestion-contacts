function ContactItem({ contact, onDelete }) {
  return (
    <li style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p><strong>Nom :</strong> {contact.name}</p>
      <p><strong>Email :</strong> {contact.email}</p>
      <p><strong>Téléphone :</strong> {contact.phone}</p>
      <button onClick={() => onDelete(contact.id)}>Supprimer</button>
    </li>
  );
}

export default ContactItem;
