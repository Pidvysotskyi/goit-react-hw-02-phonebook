export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <button onClick={() => onDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
