'use client';

import { useEffect } from 'react';
import { useQuizState } from '../useQuizState';
import QuizContainer from '../components/QuizContainer';

export default function QuizComplete() {
  const { answers, clearAnswers } = useQuizState();

  useEffect(() => {
    // Submit answers to backend
    console.log('Quiz completed with answers:', answers);

    // TODO: Send to API endpoint
    // fetch('/api/quiz-submit', {
    //   method: 'POST',
    //   body: JSON.stringify(answers)
    // });
  }, [answers]);

  return (
    <QuizContainer>
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Assessment Complete!
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for completing your health assessment. Our clinicians will review your information within 24 hours.
        </p>

        <div className="bg-[#E8DCC8]/20 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#D4C5B0] mr-2">•</span>
              <span>Our clinicians review your assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4C5B0] mr-2">•</span>
              <span>You'll receive an email with next steps</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4C5B0] mr-2">•</span>
              <span>If approved, you can proceed with treatment</span>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-block bg-gradient-to-r from-[#E8DCC8] to-[#D4C5B0] text-gray-900 font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </QuizContainer>
  );
}
