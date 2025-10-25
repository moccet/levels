export interface QuizQuestion {
  id: number;
  question: string;
  type: 'radio' | 'checkbox' | 'text' | 'number' | 'height-weight' | 'bmi-display';
  options?: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  conditionalOn?: {
    questionId: number;
    answer: string | string[];
  };
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Have you tried weight loss medication before?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    required: true,
  },
  {
    id: 2,
    question: 'Which weight loss medications have you tried?',
    type: 'checkbox',
    options: [
      { value: 'mounjaro', label: 'Mounjaro (tirzepatide)' },
      { value: 'wegovy', label: 'Wegovy (semaglutide)' },
      { value: 'orlistat', label: 'Orlistat' },
      { value: 'other', label: 'Other' },
    ],
    required: true,
    conditionalOn: {
      questionId: 1,
      answer: 'yes',
    },
  },
  {
    id: 3,
    question: 'Why did you stop taking your previous medication?',
    type: 'checkbox',
    options: [
      { value: 'side-effects', label: 'Side effects' },
      { value: 'cost', label: 'Cost' },
      { value: 'not-effective', label: 'Not effective' },
      { value: 'reached-goal', label: 'Reached my goal' },
      { value: 'other', label: 'Other reason' },
    ],
    required: true,
    conditionalOn: {
      questionId: 1,
      answer: 'yes',
    },
  },
  {
    id: 4,
    question: 'Did you experience any side effects?',
    type: 'checkbox',
    options: [
      { value: 'nausea', label: 'Nausea' },
      { value: 'vomiting', label: 'Vomiting' },
      { value: 'diarrhoea', label: 'Diarrhoea' },
      { value: 'constipation', label: 'Constipation' },
      { value: 'headaches', label: 'Headaches' },
      { value: 'fatigue', label: 'Fatigue' },
      { value: 'none', label: 'No side effects' },
    ],
    required: false,
    conditionalOn: {
      questionId: 1,
      answer: 'yes',
    },
  },
  {
    id: 5,
    question: 'What is your height?',
    type: 'height-weight',
    required: true,
  },
  {
    id: 6,
    question: 'What is your current weight?',
    type: 'height-weight',
    required: true,
  },
  {
    id: 7,
    question: 'Your BMI',
    type: 'bmi-display',
    required: false,
  },
  {
    id: 8,
    question: 'Do you have any of the following conditions?',
    type: 'checkbox',
    options: [
      { value: 'high-blood-pressure', label: 'High blood pressure (hypertension)' },
      { value: 'type-2-diabetes', label: 'Type 2 diabetes' },
      { value: 'prediabetes', label: 'Prediabetes' },
      { value: 'pcos', label: 'Polycystic ovary syndrome (PCOS)' },
      { value: 'high-cholesterol', label: 'High cholesterol' },
      { value: 'sleep-apnoea', label: 'Sleep apnoea' },
      { value: 'none', label: 'None of the above' },
    ],
    required: true,
  },
  {
    id: 9,
    question: 'Do you have any of the following conditions?',
    type: 'checkbox',
    options: [
      { value: 'pregnant', label: 'Pregnant or breastfeeding' },
      { value: 'pancreatitis', label: 'History of pancreatitis' },
      { value: 'thyroid', label: 'Medullary thyroid carcinoma' },
      { value: 'endocrine', label: 'Multiple endocrine neoplasia syndrome' },
      { value: 'eating-disorder', label: 'Eating disorders' },
      { value: 'gastrointestinal', label: 'Severe gastrointestinal disease' },
      { value: 'none', label: 'None of the above' },
    ],
    required: true,
  },
  {
    id: 10,
    question: 'Are you currently taking any medications?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    required: true,
  },
  {
    id: 11,
    question: 'Please list your current medications',
    type: 'text',
    placeholder: 'e.g., Metformin, Levothyroxine...',
    required: true,
    conditionalOn: {
      questionId: 10,
      answer: 'yes',
    },
  },
  {
    id: 12,
    question: 'What is your age?',
    type: 'number',
    required: true,
    validation: {
      min: 18,
      max: 100,
    },
  },
  {
    id: 13,
    question: 'What is your biological sex?',
    type: 'radio',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    required: true,
  },
  {
    id: 14,
    question: 'What is your weight loss goal?',
    type: 'radio',
    options: [
      { value: '5-10', label: '5-10% of body weight' },
      { value: '10-15', label: '10-15% of body weight' },
      { value: '15+', label: 'More than 15% of body weight' },
    ],
    required: true,
  },
  {
    id: 15,
    question: 'How often do you currently exercise?',
    type: 'radio',
    options: [
      { value: 'never', label: 'Never' },
      { value: '1-2', label: '1-2 times per week' },
      { value: '3-4', label: '3-4 times per week' },
      { value: '5+', label: '5 or more times per week' },
    ],
    required: true,
  },
  {
    id: 16,
    question: 'What is your email address?',
    type: 'text',
    placeholder: 'your.email@example.com',
    required: true,
    validation: {
      pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    },
  },
  {
    id: 17,
    question: 'What is your phone number?',
    type: 'text',
    placeholder: '07123 456789',
    required: true,
  },
  {
    id: 18,
    question: 'What is your full name?',
    type: 'text',
    placeholder: 'First and last name',
    required: true,
  },
  {
    id: 19,
    question: 'What is your postcode?',
    type: 'text',
    placeholder: 'SW1A 1AA',
    required: true,
  },
];

// Check if a question should be shown based on conditional logic
export const shouldShowQuestion = (question: QuizQuestion, answers: Record<number, any>): boolean => {
  if (!question.conditionalOn) {
    return true; // No conditions, always show
  }

  const dependentAnswer = answers[question.conditionalOn.questionId];

  if (Array.isArray(question.conditionalOn.answer)) {
    return question.conditionalOn.answer.includes(dependentAnswer);
  } else {
    return dependentAnswer === question.conditionalOn.answer;
  }
};

// Get the next step (route) based on current step and answers
export const getNextStep = (currentStep: number, answers: Record<number, any>): string => {
  const currentIndex = quizQuestions.findIndex((q) => q.id === currentStep);

  // Find next visible question based on conditional logic
  for (let i = currentIndex + 1; i < quizQuestions.length; i++) {
    const question = quizQuestions[i];

    if (shouldShowQuestion(question, answers)) {
      return `/quiz/${question.id}`;
    }
  }

  return '/quiz/calculating'; // No more questions - go to calculating page
};

export const getNextQuestion = (currentId: number, answers: Record<number, any>): number | null => {
  const currentIndex = quizQuestions.findIndex((q) => q.id === currentId);

  // Find next visible question based on conditional logic
  for (let i = currentIndex + 1; i < quizQuestions.length; i++) {
    const question = quizQuestions[i];

    if (!question.conditionalOn) {
      return question.id;
    }

    const dependentAnswer = answers[question.conditionalOn.questionId];
    if (Array.isArray(question.conditionalOn.answer)) {
      if (question.conditionalOn.answer.includes(dependentAnswer)) {
        return question.id;
      }
    } else {
      if (dependentAnswer === question.conditionalOn.answer) {
        return question.id;
      }
    }
  }

  return null; // No more questions
};

export const calculateBMI = (weight: number, height: number, weightUnit: 'kg' | 'lbs', heightUnit: 'cm' | 'ft'): number => {
  let weightKg = weight;
  let heightM = height;

  if (weightUnit === 'lbs') {
    weightKg = weight * 0.453592;
  }

  if (heightUnit === 'ft') {
    heightM = height * 30.48; // Convert feet to cm first
  }

  heightM = heightM / 100; // Convert cm to meters

  return Number((weightKg / (heightM * heightM)).toFixed(1));
};
