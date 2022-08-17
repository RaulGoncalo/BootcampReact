import React from 'react'
import { getNewId } from '../services/idService'

export default function RadionBotton({
    id = getNewId(),
    name = 'radioBottonName',
    children: buttonDescription = 'Descrição do botão',
    bottonChecked = false,
    onBottonClick = null
}) {

    function handleRadioButtonChange() {
        if (onBottonClick) {
            onBottonClick()
        }
    }

    return (
        <div className='flex flex-row items-center space-x-2'>
            <input id={id} type='radio' name={name} checked={bottonChecked} onChange={handleRadioButtonChange} />
            <label htmlFor={id}>{buttonDescription}</label>
        </div>
    )
}
