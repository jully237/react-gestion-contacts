export function fetchContacts() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) {
        throw new Error("Erreur lors du chargement");
      }
      return res.json();
    });
}
