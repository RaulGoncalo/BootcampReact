export default function DateInput({
  labelDescription = "Descriçaõ do label",
  inputValue = "2000-01-01",
  onInputChange = null,
  idInputDate = "id_do_input_date",
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={idInputDate} className="text-sm text-black-600 mb-1">
        {labelDescription}
      </label>
      <input
        id={idInputDate}
        className="border p-1"
        type="date"
        autoFocus={autoFocus}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
