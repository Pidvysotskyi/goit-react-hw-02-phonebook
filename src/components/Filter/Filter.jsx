export const Filter = ({ filterValue, onValueChange }) => {
  return (
    <label htmlFor="">
      Find contact by name
      <input type="text" value={filterValue} onChange={onValueChange} />
    </label>
  );
};
