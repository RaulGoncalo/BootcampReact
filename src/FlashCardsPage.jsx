import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FlashCard from './components/FlashCard';
import { allFlashCards } from './data/allFlashCards'
import FlashsCards from './components/FlashsCards';
import Button from './components/Button';
import RadionBotton from './components/RadionBotton';
import { helperShuffleArray } from './helpers/arrayHelpers';

export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState(allFlashCards)
    const [radionButtonShowTitle, setRadionButtonShowTitle] = useState(true)

    function handleButtonClick() {
        setAllCards(currentAllCards => helperShuffleArray(currentAllCards))
    }

    function handleRadionShowButtonTitleClick() {
        const updateCards = [...allCards].map(card => ({ ...card, showTitle: true }))

        setAllCards(updateCards)

        setRadionButtonShowTitle(true)
    }

    function handleRadionShowButtonDescriptionClick() {
        const updateCards = [...allCards].map(card => ({ ...card, showTitle: false }))

        setAllCards(updateCards)

        setRadionButtonShowTitle(false)
    }

    function handleToggleFlashCard(cardId) {
        const updateCards = [...allCards];
        const cardIndex = updateCards.findIndex(card => card.id === cardId)
        updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle

        setAllCards(updateCards)
    }

    return (
        <>
            <Header>React Flash Cards</Header>

            <Main>
                <div className='text-right mb-4'>
                    <Button onBottonClick={handleButtonClick}>Embaralhar</Button>
                </div>

                <div className='flex flex-row items-center justify-center space-x-4 m-4'>
                    <RadionBotton
                        id='radioButtonShowTitle'
                        name='showInfo'
                        bottonChecked={radionButtonShowTitle}
                        onBottonClick={handleRadionShowButtonTitleClick}
                    >
                        Mostrar titulo
                    </RadionBotton>
                    <RadionBotton
                        id='radioButtonShowDescription'
                        name='showInfo'
                        bottonChecked={!radionButtonShowTitle}
                        onBottonClick={handleRadionShowButtonDescriptionClick}
                    >
                        Mostrar descrição
                    </RadionBotton>
                </div>

                <FlashsCards>
                    {
                        allCards.map(({ id, title, description, showTitle }) => {
                            return <FlashCard
                                id={id}
                                key={id}
                                title={title}
                                description={description}
                                showFlashCardTitle={showTitle}
                                onToggleFlashCard={handleToggleFlashCard}
                            />
                        })
                    }
                </FlashsCards>
            </Main>
        </>
    );
}
