export default function TextInput({
  labelDescription = "Descriçaõ do label",
  inputValue = "Valor padrão do Input",
  onInputChange = null,
  idInputText = "id_do_input_text",
  autoFocus = true,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={idInputText} className="text-sm mb-1">
        {labelDescription}
      </label>
      <input
        id={idInputText}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}
