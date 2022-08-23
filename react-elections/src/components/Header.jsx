import React from 'react'

export default function Header({ children: title = ' Projeto base para o Módulo React I' }) {
    return (
        <header>
            <div className="bg-gray-300 mx-auto p-4">
                <h1 className="text-center font-semibold text-xl">
                    {title}
                </h1>
            </div>
        </header>
    )
}
