import {
    FaRegEdit as EditIcon,
    FaTrashAlt as DeleteIcon
} from 'react-icons/fa';

export default function FlashCardItem({
    children: flashCard,
    onDelete = null,
    onEdit = null
}) {
    const { title, description } = flashCard

    function handleDeleteIconClick() {
        if (onDelete) {
            onDelete(flashCard.id)
        }
    }

    function handleEditIconClick() {
        if (onEdit) {
            onEdit(flashCard)
        }
    }

    return (
        <div className="border-2 border-gray-500 p-2 m-2 rounded-md">
            <ul className="flex flex-col space-y-4">
                <li>
                    <strong>Titulo: </strong><span>{title}</span>
                </li>
                <li>
                    <strong>Descrição: </strong><span>{description}</span>
                </li>
            </ul>

            <div className='mt-4 flex flex-row items-center justify-end space-x-3'>
                <div className='cursor-pointer bg-gray-200 p-1 rounded-md'>
                    <EditIcon onClick={handleEditIconClick} size={20} color='#303030' />
                </div>

                <div className='cursor-pointer bg-red-300 p-1 rounded-md'>
                    <DeleteIcon onClick={handleDeleteIconClick} size={20} color='red' />
                </div>

            </div>
        </div>
    )
}
