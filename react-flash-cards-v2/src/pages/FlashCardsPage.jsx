import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { helperShuffleArray } from '../helpers/arrayHelpers';
import { apiCreateFlashCard, apiDeleteFlashCard, apiGetAllFlashCards, apiUpdateFlashCard } from '../services/apiServices';
import FlashCardItem from '../components/FlashCardItem';
import FlashCardForm from '../components/FlashCardForm';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createMode, setCreateMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFlashCard, setSelectedFlashCard] = useState(null);

  useEffect(() => {
    async function getAllCards() {
      try {
        const backendAllCards = await apiGetAllFlashCards();
        setAllCards(backendAllCards);

        setTimeout(() => {
          setLoading(false);
        }, 500);

      } catch (error) {
        setError(error.message);
      }
    }
    getAllCards();
  }, []);

  useEffect(() => {
    setStudyCards(allCards.map(card => ({ ...card, showTitle: true })));
  }, [allCards]);



  function handleShuffled() {
    const shuffledCards = helperShuffleArray(studyCards);

    setStudyCards(shuffledCards);
  }

  function handleRadioShowDescriptionClick() {
    // prettier-ignore
    const updatedCards =
      [...studyCards].map(card => ({ ...card, showTitle: false }));

    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    // prettier-ignore
    const updatedCards =
      [...studyCards].map(card => ({ ...card, showTitle: true }));

    setStudyCards(updatedCards);

    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setStudyCards(updatedCards);
  }


  async function handleDeleteFlashCard(cardId) {
    try {
      //frontend
      await apiDeleteFlashCard(cardId)
      //backend
      setAllCards(allCards.filter(card => card.id !== cardId));

      setError('');
    } catch (error) {
      setError(error.message)
    }
  }

  function handleEditFlashCard(card) {
    setCreateMode(false);
    setSelectedFlashCard(card);
    setSelectedTab(1);
  }

  function handleNewFlashCard() {
    setCreateMode(true);
    setSelectedFlashCard(null)
  }

  function handleTabSelect(tabIndex) {
    setSelectedTab(tabIndex);
  }

  async function handlePersist(title, description) {
    if (createMode) {
      try {
        //backend
        const newFlashCard = await apiCreateFlashCard(title, description);
        console.log(newFlashCard)
        //frontend
        setAllCards([...allCards, newFlashCard]);

        setError('')
      } catch (error) {
        setError(error.message)
      }

    } else {
      try {
        //backend
        await apiUpdateFlashCard(selectedFlashCard.id, title, description)
        //frontend
        setAllCards(
          allCards.map(card => {
            if (card.id === selectedFlashCard.id) {
              return { ...card, title, description }
            }
            return card
          })
        );


        setSelectedFlashCard(null);
        setCreateMode(true);
        setError('')
      } catch (error) {
        setError(error.message)
      }
    }
  }



  return (
    <>
      <Header>react-flash-cards-v2</Header>
      <Main>
        {
          error
            ?
            <Error>{error}</Error>
            :
            loading
              ?
              <div className='flex justify-center my-4'>
                <Loading />
              </div>
              :
              <>
                <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                  <TabList>
                    <Tab>Listagem</Tab>
                    <Tab>Cadastro</Tab>
                    <Tab>Estudo</Tab>
                  </TabList>

                  <TabPanel>
                    {
                      allCards.map(flashCard => {
                        return <FlashCardItem
                          onDelete={handleDeleteFlashCard}
                          onEdit={handleEditFlashCard}
                          key={flashCard.id}>{flashCard}</FlashCardItem>
                      })
                    }
                  </TabPanel>

                  <TabPanel>
                    <div className='my-4'>
                      <Button onButtonClick={handleNewFlashCard}>
                        Novo flash card
                      </Button>
                    </div>
                    <FlashCardForm createMode={createMode} onPersist={handlePersist}>
                      {selectedFlashCard}
                    </FlashCardForm>
                  </TabPanel>

                  <TabPanel>
                    <div className="text-center mb-4">
                      <Button onButtonClick={handleShuffled}>Embaralhar cards</Button>
                    </div>

                    <div className="flex flex-row items-center justify-center space-x-4 m-4">
                      <RadioButton
                        id="radioButtonShowTitle"
                        name="showInfo"
                        buttonChecked={radioButtonShowTitle}
                        onButtonClick={handleRadioShowTitleClick}
                      >
                        Mostrar título
                      </RadioButton>

                      <RadioButton
                        id="radioButtonShowDescription"
                        name="showInfo"
                        buttonChecked={!radioButtonShowTitle}
                        onButtonClick={handleRadioShowDescriptionClick}
                      >
                        Mostrar descrição
                      </RadioButton>
                    </div>

                    <FlashCards>
                      {studyCards.map(({ id, title, description, showTitle }) => {
                        return (
                          <FlashCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            showFlashCardTitle={showTitle}
                            onToggleFlashCard={handleToggleFlashCard}
                          />
                        );
                      })}
                    </FlashCards>
                  </TabPanel>
                </Tabs>


              </>
        }
      </Main>
    </>
  );
}
