import { useEffect, useState } from "react";
import { fetchContacts } from "./services/contactApi";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts()
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function addContact(contact) {
    setContacts(prev => [contact, ...prev]);
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(c => c.id !== id));
  }

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestionnaire de contacts</h1>

      <ContactForm onAdd={addContact} />

      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
