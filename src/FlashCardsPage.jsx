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
    const [showTitle, setShowTitle] = useState(true)

    function handleButtonClick() {
        setAllCards(currentAllCards => helperShuffleArray(currentAllCards))
    }

    function handleRadionShowButtonTitleClick() {
        setShowTitle(true)
    }

    function handleRadionShowButtonDescriptionClick() {
        setShowTitle(false)
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
                        bottonChecked={showTitle}
                        onBottonClick={handleRadionShowButtonTitleClick}
                    >
                        Mostrar titulo
                    </RadionBotton>
                    <RadionBotton
                        id='radioButtonShowDescription'
                        name='showInfo'
                        bottonChecked={!showTitle}
                        onBottonClick={handleRadionShowButtonDescriptionClick}
                    >
                        Mostrar descrição
                    </RadionBotton>
                </div>

                <FlashsCards>
                    {
                        allCards.map(({ id, title, description }) => {
                            return <FlashCard key={id} title={title} description={description} showFlashCardTitle={showTitle} />
                        })
                    }
                </FlashsCards>
            </Main>
        </>
    );
}
