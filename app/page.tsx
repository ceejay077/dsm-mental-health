"use client";

import React, { useState } from "react";
import { getQuestionById } from "./utils/decisionTree";
import Question from "./components/Questions";
import ProgressBar from "./components/ProgressBar";
import Result from "./components/Results";
import type { ResultKey } from "./components/Results"; // Import ResultKey type

const DecisionTreeApp: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1); // Start with the first question
  const [steps, setSteps] = useState<number[]>([1]); // Track the steps
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [resultText, setResultText] = useState<ResultKey | null>(null); // Use ResultKey type

  const question = getQuestionById(currentQuestionId);

  const handleAnswer = (nextId: number | null) => {
    if (nextId === null) {
      // Example logic for setting the final result based on the current question
      switch (currentQuestionId) {
        case 9:
          setResultText("Possible Depression");
          break;
        case 11:
          setResultText("Generalized Anxiety Disorder");
          break;
        case 17:
          setResultText("Bipolar Disorder");
          break;
        case 18:
          setResultText("Panic Disorder");
          break;
        case 19:
          setResultText("Obsessive-Compulsive Disorder (OCD)");
          break;
        case 20:
          setResultText("Schizophrenia or Psychotic Disorder");
          break;
        case 21:
          setResultText("Post-Traumatic Stress Disorder (PTSD)");
          break;
        case 22:
          setResultText("Cognitive Disorder or Dementia");
          break;
        case 23:
          setResultText("Alzheimer’s Disease");
          break;
        case 24:
          setResultText("Vascular Dementia");
          break;
        case 25:
          setResultText("Frontotemporal Dementia");
          break;
        default:
          setResultText(null);
      }
      setIsCompleted(true);
    } else {
      setSteps([...steps, nextId]);
      setCurrentQuestionId(nextId);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Mental Health Checker
      </h1>

      {/* Decision Tree Interaction */}
      {!isCompleted && question && (
        <>
          <ProgressBar currentStep={steps.length} totalSteps={10} />
          <Question question={question} onAnswer={handleAnswer} />
        </>
      )}
      {isCompleted && resultText && <Result resultText={resultText} />}

      {/* Disclaimer placed at the bottom */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-2">
          Important Notice: This Tool is for Awareness and Educational Purposes
          Only
        </h2>
        <p className="text-white">
          This app was developed using decision tree logic based on guidelines
          and diagnostic criteria derived from the{" "}
          <em>
            Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition
          </em>{" "}
          (DSM-5). The DSM-5 is a comprehensive manual used by healthcare
          professionals to diagnose mental disorders. The conditions and
          pathways explored in this app represent a simplified and educational
          application of some of the criteria found in the DSM-5.
        </p>
        <p className="text-white mt-4">
          While this app aims to raise awareness about a variety of mental
          health disorders and their potential symptoms, it{" "}
          <strong>must not</strong> be used as a tool for self-diagnosis. The
          pathways and results presented here are intended to help individuals
          understand the complexity of mental health and provide general
          information.
        </p>
        <p className="text-white mt-4">
          <strong>Mental health diagnosis is complex</strong> and involves a
          thorough assessment that can only be performed by a licensed mental
          health professional. If you or someone you know is experiencing
          symptoms of a mental health disorder, we strongly urge you to seek
          help from a licensed healthcare provider. This app is meant to provide
          awareness and promote understanding, but is not a substitute for
          professional advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
};

export default DecisionTreeApp;
