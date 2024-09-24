// app/components/Result.tsx

import React from "react";

// Define the valid result keys as a union type and export it
export type ResultKey =
  | "Possible Depression"
  | "Generalized Anxiety Disorder"
  | "Bipolar Disorder"
  | "Panic Disorder"
  | "Major Depressive Disorder"
  | "Persistent Depressive Disorder"
  | "Schizophrenia or Psychotic Disorder"
  | "Specific Phobia"
  | "Obsessive-Compulsive Disorder (OCD)"
  | "Post-Traumatic Stress Disorder (PTSD)"
  | "Cognitive Disorder or Dementia"
  | "Alzheimer’s Disease"
  | "Vascular Dementia"
  | "Frontotemporal Dementia";

interface ResultProps {
  resultText: ResultKey; // Use the ResultKey type for resultText
}

// Detailed descriptions for each possible result
const resultDetails: Record<ResultKey, string> = {
  "Possible Depression":
    "This result suggests that you might be experiencing symptoms of depression, such as low energy and persistent sadness. It is important to seek professional help to confirm this and discuss treatment options.",
  "Generalized Anxiety Disorder":
    "This result suggests that you might be experiencing generalized anxiety disorder, characterized by excessive worry and anxiety about a variety of topics. It’s recommended to consult a healthcare provider for further evaluation.",
  "Bipolar Disorder":
    "Your responses suggest possible signs of bipolar disorder, characterized by extreme mood swings between emotional highs (mania) and lows (depression). A mental health professional should be consulted for further assessment and management.",
  "Panic Disorder":
    "Your responses indicate that you may be experiencing panic disorder, which involves frequent panic attacks, causing sudden intense fear. Professional guidance is highly recommended.",
  "Major Depressive Disorder":
    "This result indicates possible major depressive disorder, which involves persistent feelings of sadness, hopelessness, and a loss of interest in daily activities. It’s essential to seek help from a mental health professional for a proper diagnosis and treatment plan.",
  "Persistent Depressive Disorder":
    "Your answers suggest persistent depressive disorder, also known as dysthymia, a chronic form of depression that lasts for years. Seeking professional assistance for long-term management and support is advised.",
  "Schizophrenia or Psychotic Disorder":
    "This result suggests that you may be experiencing symptoms associated with schizophrenia or a psychotic disorder, such as hallucinations or delusions. Immediate consultation with a mental health professional is crucial.",
  "Specific Phobia":
    "This result indicates a specific phobia, which is an intense, irrational fear of a particular situation or object. Therapy, such as cognitive-behavioral therapy (CBT), can help in managing this condition.",
  "Obsessive-Compulsive Disorder (OCD)":
    "Your responses suggest that you might be experiencing obsessive-compulsive disorder (OCD), characterized by unwanted recurring thoughts (obsessions) and repetitive behaviors (compulsions). It’s important to seek therapy to manage these symptoms.",
  "Post-Traumatic Stress Disorder (PTSD)":
    "This result suggests that you may be suffering from post-traumatic stress disorder (PTSD), often triggered by experiencing or witnessing traumatic events. Professional treatment is recommended to manage and alleviate symptoms.",
  "Cognitive Disorder or Dementia":
    "Your responses may suggest early signs of cognitive decline or dementia, such as memory loss or difficulty focusing. It’s essential to consult a healthcare provider for further cognitive testing and evaluation.",
  "Alzheimer’s Disease":
    "This result suggests possible early signs of Alzheimer’s disease, which can cause memory loss and confusion. It’s important to seek further evaluation from a healthcare provider.",
  "Vascular Dementia":
    "Your responses suggest possible vascular dementia, which can cause confusion and memory loss due to reduced blood flow to the brain. Consultation with a healthcare provider is necessary for further testing.",
  "Frontotemporal Dementia":
    "This result suggests possible frontotemporal dementia, which affects personality, behavior, and language skills. Professional cognitive testing is recommended for accurate diagnosis and management.",
};

const Result: React.FC<ResultProps> = ({ resultText }) => {
  // Fetch the description based on the resultText
  const description = resultDetails[resultText];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Result</h2>
      <p className="mb-6">{description}</p>
      <button
        onClick={() => window.location.reload()}
        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Restart
      </button>
    </div>
  );
};

export default Result;
