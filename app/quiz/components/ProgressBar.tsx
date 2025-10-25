'use client';

import { useRouter } from 'next/navigation';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const router = useRouter();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {currentStep > 1 && (
          <button
            onClick={() => router.push(`/quiz/${currentStep - 1}`)}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>
        )}
        <span className="text-sm text-gray-600 ml-auto">
          Question {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#E8DCC8] to-[#D4C5B0] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
