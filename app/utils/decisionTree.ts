// src/utils/decisionTree.ts

// Define the structure for each question and option
export type Option = {
  label: string;
  nextId: number | null; // The next question ID or null if this is the final decision
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

// Define the decision tree structure
export const decisionTree: Question[] = [
  // Initial question
  {
    id: 1,
    text: "How are you feeling today?",
    options: [
      { label: "Good", nextId: 2 },
      { label: "Not so good", nextId: 3 },
      { label: "Bad", nextId: 4 },
    ],
  },
  // Branch 1: Good -> Routine Check-up
  {
    id: 2,
    text: "Routine check-up?",
    options: [
      { label: "Yes", nextId: null }, // End of tree: no further action needed
      { label: "No", nextId: null }, // End of tree: no further action needed
    ],
  },
  // Branch 2: Not so good -> Feeling unwell?
  {
    id: 3,
    text: "Feeling unwell?",
    options: [
      { label: "Yes", nextId: 5 },
      { label: "No", nextId: 6 },
    ],
  },
  // Branch 3: Bad -> Feeling extremely sad or empty?
  {
    id: 4,
    text: "Are you feeling extremely sad or empty?",
    options: [
      { label: "Yes", nextId: 7 },
      { label: "No", nextId: 8 },
    ],
  },
  // Branch 2.1: Unwell -> Sleep issues
  {
    id: 5,
    text: "Do you have trouble sleeping or sleeping too much?",
    options: [
      { label: "Yes", nextId: 9 }, // Possible Insomnia or Hypersomnia
      { label: "No", nextId: 10 },
    ],
  },
  // Branch 2.2: Unwell -> Anxiety
  {
    id: 6,
    text: "Do you feel anxious or worried often?",
    options: [
      { label: "Yes", nextId: 11 }, // Generalized Anxiety Disorder
      { label: "No", nextId: 12 },
    ],
  },
  // Branch 3.1: Sad or empty -> Self-harm thoughts?
  {
    id: 7,
    text: "Have you had thoughts of self-harm or suicide?",
    options: [
      { label: "Yes", nextId: 9 }, // Major Depressive Disorder
      { label: "No", nextId: 14 }, // Persistent Depressive Disorder
    ],
  },
  // Branch 3.2: Sad or empty -> Delusions or hallucinations?
  {
    id: 8,
    text: "Are you experiencing delusions or hallucinations?",
    options: [
      { label: "Yes", nextId: 20 }, // Schizophrenia or Psychotic Disorder
      { label: "No", nextId: 15 }, // Further assessment required
    ],
  },
  // Branch 2.1.1: Sleep issues -> Depression or Bipolar?
  {
    id: 9,
    text: "Have you noticed any changes in your energy levels?",
    options: [
      { label: "Stable", nextId: 16 }, // Possible Depression
      { label: "Fluctuates", nextId: 17 }, // Bipolar Disorder
    ],
  },
  // Branch 2.2.1: Anxiety -> Panic attacks?
  {
    id: 10,
    text: "Do you experience panic attacks?",
    options: [
      { label: "Yes", nextId: 18 }, // Panic Disorder
      { label: "No", nextId: 19 },
    ],
  },
  // Branch 2.2.2: Panic -> Specific phobias?
  {
    id: 11,
    text: "Do you experience specific fears or phobias?",
    options: [
      { label: "Yes", nextId: 13 }, // Specific Phobia
      { label: "No", nextId: 15 },
    ],
  },
  // Branch 3.1.2: Phobia -> OCD or PTSD?
  {
    id: 12,
    text: "Do you experience obsessions or compulsions?",
    options: [
      { label: "Yes", nextId: 15 }, // OCD
      { label: "No", nextId: 17 }, // PTSD
    ],
  },
  // PTSD Question - Experienced Trauma?
  {
    id: 13,
    text: "Have you experienced a traumatic event?",
    options: [
      { label: "Yes", nextId: 21 }, // PTSD
      { label: "No", nextId: 22 }, // Check for physical causes
    ],
  },
  // Branch 3.2.1: Schizophrenia or Psychotic Disorder
  {
    id: 14,
    text: "Do you experience extreme mood changes?",
    options: [
      { label: "Yes", nextId: 23 }, // Bipolar Disorder
      { label: "No", nextId: 24 }, // Dementia or Cognitive Disorder
    ],
  },
  // Delusions -> Further Evaluation
  {
    id: 15,
    text: "Further evaluation needed",
    options: [{ label: "Complete", nextId: null }],
  },
  // Branch 2.1.3: Major Depressive Disorder
  {
    id: 16,
    text: "Possible Major Depressive Disorder",
    options: [{ label: "Complete", nextId: null }],
  },
  // Branch 2.2.4: Bipolar Disorder
  {
    id: 17,
    text: "Possible Bipolar Disorder",
    options: [{ label: "Complete", nextId: null }],
  },
  // Branch 2.3: OCD or Anxiety Disorders
  {
    id: 18,
    text: "Obsessive-Compulsive Disorder (OCD)",
    options: [{ label: "Complete", nextId: null }],
  },
  // Panic Disorder Diagnosis
  {
    id: 19,
    text: "Panic Disorder Diagnosis",
    options: [{ label: "Complete", nextId: null }],
  },
  // Schizophrenia/Psychotic Disorder
  {
    id: 20,
    text: "Schizophrenia or Psychotic Disorder",
    options: [{ label: "Complete", nextId: null }],
  },
  // PTSD or Trauma Related
  {
    id: 21,
    text: "Post-Traumatic Stress Disorder (PTSD)",
    options: [{ label: "Complete", nextId: null }],
  },
  // Dementia or Cognitive Disorders
  {
    id: 22,
    text: "Cognitive Issues or Dementia",
    options: [{ label: "Complete", nextId: null }],
  },
  // Cognitive Disorder/Bipolar Disorder
  {
    id: 23,
    text: "Cognitive Disorder",
    options: [{ label: "Complete", nextId: null }],
  },
];

// Function to get a question by ID
export const getQuestionById = (id: number): Question | undefined => {
  return decisionTree.find((question) => question.id === id);
};
