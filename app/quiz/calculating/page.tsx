'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../components/ui/Logo';

const calculatingSteps = [
  'Analyzing your responses...',
  'Calculating weight loss predictions...',
  'Preparing your personalized plan...',
  'Generating your recommendations...',
];

export default function CalculatingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Total duration: 4 seconds (1 second per step)
    const totalDuration = 4000;
    const stepDuration = totalDuration / calculatingSteps.length;
    const startTime = Date.now();

    // Update progress bar smoothly
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        // Navigate to results page after completion
        setTimeout(() => {
          router.push('/quiz/results');
        }, 500);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [router]);

  useEffect(() => {
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < calculatingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/images/background.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Loading Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#E8DCC8] to-[#D4C5B0] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center pt-12 pb-12">
          <Logo href="/" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
            {/* Loading Spinner */}
            <div className="flex justify-center mb-12">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-[#D4C5B0] rounded-full animate-spin" />
            </div>

            {/* Message */}
            <h1
              className="text-2xl md:text-3xl font-normal text-gray-900 transition-opacity duration-300"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {calculatingSteps[currentStep]}
            </h1>

            {/* Progress Percentage */}
            <p className="text-gray-500 mt-6 text-lg font-medium">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
