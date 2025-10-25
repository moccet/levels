'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../components/ui/Logo';

const onboardingSteps = [
  {
    subtitle: 'LEVELS CLINICAL TEAM',
    message: "We're going to ask you a few questions",
  },
  {
    subtitle: 'MEDICAL ASSESSMENT',
    message: 'So we can assess your eligibility for our programme',
  },
  {
    subtitle: 'DOCTOR REVIEWED',
    message: 'Our clinicians will review your answers within 24 hours',
  },
  {
    subtitle: 'SECURE & CONFIDENTIAL',
    message: "Your information is safe with us. Let's get started",
  },
];

export default function AssessmentEntry() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate total duration: 4 steps * 3000ms = 12000ms
    const totalDuration = onboardingSteps.length * 3000;
    const startTime = Date.now();

    // Update progress bar smoothly
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // If we're at the last step, wait then navigate
    if (currentStep === onboardingSteps.length) {
      const timer = setTimeout(() => {
        router.push('/quiz/1');
      }, 800);
      return () => clearTimeout(timer);
    }

    // Fade out current step
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // Move to next step after fade out
    const nextStepTimer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(nextStepTimer);
    };
  }, [currentStep, router]);

  const currentStepData = onboardingSteps[currentStep];

  if (!currentStepData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/images/background.png)' }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
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

        {/* Main Content - Top aligned */}
        <div className="px-6">
          <div
            className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Subtitle */}
            <p
              className="text-xs font-semibold tracking-widest text-gray-500 mb-8 uppercase"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {currentStepData.subtitle}
            </p>

            {/* Main Message */}
            <h1
              className="text-3xl md:text-4xl font-normal text-gray-900 leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {currentStepData.message}
            </h1>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-16">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentStep
                      ? 'w-8 bg-gray-900'
                      : index < currentStep
                      ? 'w-1.5 bg-gray-400'
                      : 'w-1.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
