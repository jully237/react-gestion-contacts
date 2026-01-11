import { useState } from "react";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Tous les champs sont obligatoires");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone
    };

    onAdd(newContact);

    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ajouter un contact</h3>

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={e => setName(e.target.value)}
      /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />

      <input
        type="text"
        placeholder="Téléphone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      /><br />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ContactForm;
