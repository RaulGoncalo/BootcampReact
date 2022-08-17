import React from 'react'

export default function FlashsCards({ children: flashCard }) {
    return (
        <div className='border m-2 p-1 flex flex-row items-center justify-center flex-wrap'>
            {flashCard}
        </div>
    )
}
