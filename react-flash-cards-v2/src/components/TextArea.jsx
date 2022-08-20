import React from 'react'
import { getNewId } from '../services/idService';

export default function TextArea({
    labelDescription = 'Descrição do label:',
    texteAreaValue = 'Valor padrão do text area',
    onTextAreaChange = null,
    id = getNewId(),
    maxLenth = 230,
    rows = 4
}) {

    function handleTextAreaChange({ currentTarget }) {
        if (onTextAreaChange) {
            const newValue = currentTarget.value;
            onTextAreaChange(newValue);
        }
    }

    const currentCharacterCount = texteAreaValue.length;


    return (
        <div className="flex flex-col my-4">
            <label className="text-sm mb-1" htmlFor={id}>
                {labelDescription}
            </label>

            <textarea
                id={id}
                className="border p-1"
                value={texteAreaValue}
                onChange={handleTextAreaChange}
                maxLength={maxLenth}
                rows={rows}
            />

            <div className='text-right mr-1'>
                <span>
                    {currentCharacterCount} / {maxLenth}
                </span>
            </div>
        </div>
    )
}
