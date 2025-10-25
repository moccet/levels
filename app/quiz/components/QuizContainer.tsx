'use client';

import React from 'react';
import Logo from '../../components/ui/Logo';

interface QuizContainerProps {
  children: React.ReactNode;
}

export default function QuizContainer({ children }: QuizContainerProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center pt-8 pb-4">
        <Logo href="/" />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-8 md:px-8 md:py-12">
        {children}
      </div>
    </div>
  );
}
