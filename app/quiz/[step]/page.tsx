'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import QuizContainer from '../components/QuizContainer';
import ProgressBar from '../components/ProgressBar';
import { quizQuestions, shouldShowQuestion, getNextStep } from '../quizData';
import { useQuizState } from '../useQuizState';

export default function QuizStep() {
  const params = useParams();
  const router = useRouter();
  const step = parseInt(params.step as string);
  const { answers, setAnswer, isLoaded } = useQuizState();
  const [error, setError] = useState('');
  const [localAnswer, setLocalAnswer] = useState<string | string[] | number>('');

  const question = quizQuestions.find(q => q.id === step);

  useEffect(() => {
    if (isLoaded && question && !shouldShowQuestion(question, answers)) {
      // Skip this question if conditional logic says we shouldn't show it
      const next = getNextStep(step, answers);
      router.push(next);
    }
  }, [isLoaded, question, answers, step, router]);

  useEffect(() => {
    if (answers[step] !== undefined) {
      setLocalAnswer(answers[step]);
    } else if (question?.type === 'bmi-display') {
      // Auto-calculate BMI and store it
      const height = answers[5] as number;
      const weight = answers[6] as number;
      if (height && weight) {
        const heightM = height / 100;
        const bmi = parseFloat((weight / (heightM * heightM)).toFixed(1));
        setLocalAnswer(bmi);
      }
    }
  }, [answers, step, question]);

  if (!question || !isLoaded) {
    return null;
  }

  const handleNext = () => {
    // BMI display doesn't need validation, just auto-save
    if (question.type === 'bmi-display') {
      setAnswer(step, localAnswer);
      const next = getNextStep(step, { ...answers, [step]: localAnswer });
      router.push(next);
      return;
    }

    // Validation
    if (question.required && !localAnswer) {
      setError('This field is required');
      return;
    }

    // Email validation
    if (question.type === 'text' && question.id === 16) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(localAnswer as string)) {
        setError('Please enter a valid email address');
        return;
      }
    }

    setAnswer(step, localAnswer);
    setError('');

    const next = getNextStep(step, { ...answers, [step]: localAnswer });
    router.push(next);
  };

  const handleRadioChange = (value: string) => {
    setLocalAnswer(value);
    setError('');
  };

  const handleCheckboxChange = (value: string) => {
    const current = Array.isArray(localAnswer) ? localAnswer : [];

    if (value === 'none') {
      setLocalAnswer(['none']);
    } else {
      const filtered = current.filter(v => v !== 'none');
      if (filtered.includes(value)) {
        setLocalAnswer(filtered.filter(v => v !== value));
      } else {
        setLocalAnswer([...filtered, value]);
      }
    }
    setError('');
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map(option => (
              <label
                key={option.value}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  localAnswer === option.value
                    ? 'border-[#D4C5B0] bg-[#E8DCC8]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${step}`}
                  value={option.value}
                  checked={localAnswer === option.value}
                  onChange={(e) => handleRadioChange(e.target.value)}
                  className="mr-3"
                />
                <span className="text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map(option => {
              const isChecked = Array.isArray(localAnswer) && localAnswer.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    isChecked
                      ? 'border-[#D4C5B0] bg-[#E8DCC8]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-900">{option.label}</span>
                </label>
              );
            })}
          </div>
        );

      case 'text':
        return (
          <input
            type="text"
            value={localAnswer as string}
            onChange={(e) => {
              setLocalAnswer(e.target.value);
              setError('');
            }}
            placeholder={question.placeholder}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#D4C5B0] focus:outline-none transition-colors"
          />
        );

      case 'number':
        return (
          <input
            type="number"
            value={localAnswer as number}
            onChange={(e) => {
              setLocalAnswer(parseInt(e.target.value) || 0);
              setError('');
            }}
            placeholder={question.placeholder}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#D4C5B0] focus:outline-none transition-colors"
          />
        );

      case 'height-weight':
        return (
          <div className="space-y-4">
            <input
              type="number"
              step="0.1"
              value={localAnswer as number}
              onChange={(e) => {
                setLocalAnswer(parseFloat(e.target.value) || 0);
                setError('');
              }}
              placeholder={question.id === 5 ? 'e.g., 175 (cm)' : 'e.g., 75 (kg)'}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#D4C5B0] focus:outline-none transition-colors"
            />
            <p className="text-sm text-gray-500">
              {question.id === 5 ? 'Enter your height in centimetres' : 'Enter your weight in kilograms'}
            </p>
          </div>
        );

      case 'bmi-display':
        const height = answers[5] as number;
        const weight = answers[6] as number;
        let bmi = 0;
        let bmiCategory = '';

        if (height && weight) {
          const heightM = height / 100;
          bmi = parseFloat((weight / (heightM * heightM)).toFixed(1));

          if (bmi < 18.5) bmiCategory = 'Underweight';
          else if (bmi < 25) bmiCategory = 'Normal weight';
          else if (bmi < 30) bmiCategory = 'Overweight';
          else bmiCategory = 'Obese';
        }

        return (
          <div className="bg-[#E8DCC8]/20 rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">{bmi || '—'}</div>
            <div className="text-lg text-gray-600 mb-4">{bmiCategory}</div>
            <p className="text-sm text-gray-500">
              Your BMI has been automatically calculated from your height and weight
            </p>
          </div>
        );

      default:
        return <p>Question type not implemented</p>;
    }
  };

  return (
    <QuizContainer>
      <ProgressBar currentStep={step} totalSteps={19} />

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h2>
        {renderQuestion()}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-gradient-to-r from-[#E8DCC8] to-[#D4C5B0] text-gray-900 font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity"
      >
        Next
      </button>
    </QuizContainer>
  );
}
