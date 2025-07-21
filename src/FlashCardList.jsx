import FlashCard from "./FlashCard";
import React from "react";
export default function FlashCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}
