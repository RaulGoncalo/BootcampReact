import React from 'react'

export default function SelectCities({ cities = '', onSelected = null }) {

    function handleSeleted(e) {
        if (onSelected) {
            onSelected(e.target.value)
        }
    }

    return (
        <select className='border-2 rounded-md p-2 m-4' onChange={handleSeleted}>
            {
                cities.map(city => {
                    return <option key={city.id} value={city.id} >{city.name}</option>
                })
            }
        </select>
    )
}
