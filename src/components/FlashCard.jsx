import { useState, useEffect } from 'react'

export default function FlashCard({
    title = 'Título do card',
    description = 'Descrição do card',
    showFlashCardTitle = true
}) {


    const [showTitle, setShowTitle] = useState(showFlashCardTitle)

    useEffect(() => {
        setShowTitle(showFlashCardTitle)
    }, [showFlashCardTitle])


    function handleCardClick() {
        setShowTitle(currentShowTitle => !currentShowTitle)
    }


    const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm'
    return (
        <div
            className={`
            shadow-lg
            rounded-md
            cursor-pointer
            p-4 m-2 w-80 h-48 
            flex flex-row 
            items-center justify-center 
            font-semibold ${fontSizeClassName}`
            }

            style={{
                fontFamily: " 'JetBrains Mono', monospace"
            }}

            onClick={handleCardClick}
        >

            {showTitle ? title : description}
        </div>
    )
}
