// app/components/Question.tsx

import React from "react";
import {
  Option,
  Question as DecisionTreeQuestion,
} from "../utils/decisionTree"; // Rename the imported type

interface QuestionProps {
  question: DecisionTreeQuestion; // Use the new name here
  onAnswer: (nextId: number | null) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option: Option, index: number) => (
          <button
            key={index}
            onClick={() => onAnswer(option.nextId)}
            className="block w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
