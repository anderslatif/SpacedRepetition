import { Flashcard } from "../types.js";

export function getNextCard(flashcards: Flashcard[]): Flashcard | undefined {
    const now: number = Date.now();
    let dueCards = flashcards.filter((card) => card.dueDate <= now);

    if (dueCards.length === 0) {
        dueCards = flashcards.filter((card) => card.repetition === 1);
    } 
  
    const randomIndex = Math.floor(Math.random() * dueCards.length);
    return dueCards[randomIndex];
}
