export const Filter = ({ filterValue, onValueChange }) => {
  return (
    <label htmlFor="">
      Filter
      <input type="text" value={filterValue} onChange={onValueChange} />
    </label>
  );
};
