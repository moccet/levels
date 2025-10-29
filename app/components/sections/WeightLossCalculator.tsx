'use client';

import React, { useState } from 'react';

export interface WeightLossCalculatorProps {
  className?: string;
}

const WeightLossCalculator: React.FC<WeightLossCalculatorProps> = ({ className = '' }) => {
  const [unit, setUnit] = useState<'kg' | 'st'>('kg');
  const [weight, setWeight] = useState(76);

  // Calculate weight loss (21.55% of body weight)
  const weightLoss = (weight * 0.2155).toFixed(1);

  return (
    <section className={`bg-[#f5f1ed] py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-12x)] items-center max-w-6xl mx-auto">
          {/* Left Side - Stats */}
          <div>
            <h2 className="text-heading-1 font-light text-[#172117] mb-[var(--spacing-8x)]">
              Levels members lose on average
            </h2>

            <div className="flex items-center gap-[var(--spacing-4x)] mb-[var(--spacing-8x)]">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <svg className="w-6 h-6 text-[#172117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <div className="text-[64px] font-light text-[#172117] leading-none">21.55%</div>
                <p className="text-body-3 text-[#172117]">body weight in 10 months</p>
              </div>
            </div>

            <p className="text-body-4 text-[#172117] mb-[var(--spacing-4x)]">
              Based on an internal analysis of 10 month results from 66,846 members on the Levels programme.
            </p>

            <a
              href="https://preprints.jmir.org/preprint/69460/accepted"
              className="text-body-4 text-[#172117] underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://preprints.jmir.org/preprint/69460/accepted
            </a>
          </div>

          {/* Right Side - Calculator Card */}
          <div className="bg-white rounded-[var(--radius-card)] p-[var(--spacing-10x)] shadow-lg">
            <h3 className="text-heading-3 text-[#172117] text-center mb-[var(--spacing-8x)]">
              See how much weight you could lose
            </h3>

            {/* Unit Toggle */}
            <div className="flex gap-[var(--spacing-2x)] mb-[var(--spacing-8x)] bg-[#f5f5f5] rounded-full p-1">
              <button
                onClick={() => setUnit('kg')}
                className={`flex-1 py-2 px-4 rounded-full text-body-4 transition-all ${
                  unit === 'kg'
                    ? 'bg-white text-[#172117] shadow-sm'
                    : 'text-[#172117]/60'
                }`}
              >
                Kg
              </button>
              <button
                onClick={() => setUnit('st')}
                className={`flex-1 py-2 px-4 rounded-full text-body-4 transition-all ${
                  unit === 'st'
                    ? 'bg-white text-[#172117] shadow-sm'
                    : 'text-[#172117]/60'
                }`}
              >
                St
              </button>
            </div>

            {/* Starting Weight */}
            <div className="mb-[var(--spacing-8x)]">
              <p className="text-body-4 text-[#172117] text-center mb-[var(--spacing-4x)]">
                Starting weight:
              </p>
              <div className="text-[48px] font-light text-[#172117] text-center leading-none mb-[var(--spacing-6x)]">
                {weight}{unit}
              </div>

              {/* Slider */}
              <input
                type="range"
                min="40"
                max="200"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#d4a99a]"
                style={{
                  background: `linear-gradient(to right, #d4a99a 0%, #d4a99a ${((weight - 40) / 160) * 100}%, #e5e5e5 ${((weight - 40) / 160) * 100}%, #e5e5e5 100%)`
                }}
              />
            </div>

            {/* Result */}
            <div className="text-center">
              <p className="text-body-4 text-[#172117] mb-[var(--spacing-3x)]">
                On the Levels programme you could lose
              </p>
              <div className="text-[56px] font-light text-[#172117] leading-none">
                {weightLoss}{unit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossCalculator;
