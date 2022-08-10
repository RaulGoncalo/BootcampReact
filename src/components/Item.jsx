import React from 'react'

export default function Item({children: value = "Valor", label = "Nome:"}) {
  return (
    <span>
        <strong className="text-sm">{label}</strong>
        {value}
    </span>
  )
}
