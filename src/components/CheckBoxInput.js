export default function CheckBoxInput({
  labelDescription = "Descriçaõ do label",
  inputValue = "Valor padrão do Input",
  onInputChange = null,
  idInputText = "id_do_input_checkbox",
  autoFocus = true,
}) {
  function handleInputChange() {
    onInputChange();
  }
  return (
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        id={idInputText}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />

      <label htmlFor={idInputText} className="text-sm">
        {labelDescription}
      </label>
    </div>
  );
}
