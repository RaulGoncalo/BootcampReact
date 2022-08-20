import { useEffect, useState } from 'react';
import Button from './Button';
import TextArea from './TextArea';
import TextInput from './TextInput';
import Error from './Error';

export default function FlashCardForm({
    createMode = true,
    onPersist = null,
    children: flashCard = null,
}) {
    const [title, setTitle] = useState(flashCard?.title || '');
    const [description, setDescription] = useState(flashCard?.description || '');
    const [error, setError] = useState('');

    useEffect(() => {
        if (createMode) {
            clearFields();
        }
    }, [createMode])

    const backgroundClassName = createMode ? 'bg-green-100' : 'bg-yellow-200';

    function handleInputChange(newTitle) {
        setTitle(newTitle)
    }

    function handleTextAreaChange(newDescription) {
        setDescription(newDescription)
    }


    function clearFields() {
        setTitle('');
        setDescription('');
    }

    function validateForm() {
        return title.trim() !== '' && description.trim() !== '';
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (validateForm()) {
            setError('')
            if (onPersist) {
                onPersist(title, description);
                clearFields();
            }
        } else {
            setError('Preencha todos os campos.')
        }
    }

    function handleFormReset() {
        clearFields();
    }

    return (
        <form className={`p-4 ${backgroundClassName}`} onSubmit={handleFormSubmit} onReset={handleFormReset}>
            <h2 className="text-center font-semibold">
                Manutenção de Flash Card
            </h2>

            <TextInput
                labelDescription='Título:'
                inputValue={title}
                onInputChange={handleInputChange}
            />

            <TextArea
                labelDescription='Descrição:'
                texteAreaValue={description}
                onTextAreaChange={handleTextAreaChange}
            />

            <div className='flex items-center justify-between'>
                {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
                <div>
                    <Button colorClass='bg-red-300' type='reset'>
                        Limpar
                    </Button>

                    <Button colorClass='bg-green-300' type='submit'>
                        Salvar
                    </Button>
                </div>

            </div>
        </form>
    )
}
