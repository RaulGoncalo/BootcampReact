import React from 'react'

export default function Main({ children: body = null }) {
    return (
        <main>
            <div className="container mx-auto p-4">
                {body}
            </div>
        </main>
    )
}
