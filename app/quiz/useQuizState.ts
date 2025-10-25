'use client';

import { useState, useEffect } from 'react';

export interface QuizAnswers {
  [key: string]: string | string[] | number;
}

export function useQuizState() {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('quizAnswers');
    if (stored) {
      try {
        setAnswers(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored answers:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever answers change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
    }
  }, [answers, isLoaded]);

  const setAnswer = (questionId: number, answer: string | string[] | number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const clearAnswers = () => {
    setAnswers({});
    localStorage.removeItem('quizAnswers');
  };

  return {
    answers,
    setAnswer,
    clearAnswers,
    isLoaded
  };
}
