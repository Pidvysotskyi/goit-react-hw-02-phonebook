import PropTypes from 'prop-types';
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
