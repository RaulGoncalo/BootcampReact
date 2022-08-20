import { read, exclude, create, edit } from "./httpServices";
import { getNewId } from "./idService";

export async function apiGetAllFlashCards() {
  const allFlashCard = await read("/flashcards");
  return allFlashCard;
}

export async function apiDeleteFlashCard(id) {
  await exclude(`/flashcards/${id}`);
}

export async function apiCreateFlashCard(title, description) {
  const newFlashCard = await create("/flashcards", {
    id: getNewId(),
    title,
    description,
  });

  return newFlashCard;
}

export async function apiUpdateFlashCard(id, title, description) {
  const updatedFlashCard = await edit(`/flashcards/${id}`, {
    title,
    description,
  });

  return updatedFlashCard;
}
