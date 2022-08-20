import React from 'react'

export default function Error({ children: errorMessage }) {
    return (
        <div className='bg-red-300 text-red-700 font-semibold p-2'>{errorMessage}</div>
    )
}
