import React from 'react'

export default function Botton({
    children: description = 'Descrição do botão',
    onBottonClick = null,
}) {
    function handleButtonClick() {
        if (onBottonClick) {
            onBottonClick();
        }
    }
    return (
        <button
            onClick={handleButtonClick}
            className={`
            bg-gray-200
            p-2 m-2
            rounded-md
            cursor-pointer
            `}
        >
            {description}
        </button>
    )
}
