import React from 'react';

export interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#172117] py-[56px] md:py-[120px] text-white ${className}`}>
      <div className="page-container">
        <h2 className="text-heading-2 md:text-heading-1 text-center mb-[var(--spacing-12x)] md:mb-[var(--spacing-16x)]">
          How Levels changes lives
        </h2>

        {/* Main Stat Card */}
        <div className="mb-[var(--spacing-6x)] md:mb-[var(--spacing-8x)]">
          <div className="bg-[#23442f] p-[var(--spacing-8x)] md:p-[var(--spacing-12x)] rounded-[var(--radius-card)] max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] md:gap-[var(--spacing-12x)]">
              {/* Left: Stat and Text */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-[80px] md:text-[120px] font-bold leading-none mb-[var(--spacing-6x)]">20.2%</div>
                  <p className="text-body-2 md:text-body-1 mb-[var(--spacing-8x)]">
                    In the SURMOUNT-5 clinical trial, participants achieved an average weight loss of 20.2% at 72 weeks with tirzepatide treatment<sup>1</sup>
                  </p>
                </div>

                {/* Citations */}
                <div className="mt-[var(--spacing-8x)]">
                  <p className="text-body-5 font-medium tracking-wider mb-[var(--spacing-3x)] opacity-70">CITATIONS</p>
                  <div className="flex gap-[var(--spacing-2x)] items-start">
                    <svg className="w-5 h-5 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-body-5 text-white/60">
                      <sup>1</sup>SURMOUNT-5 trial - Tirzepatide vs Semaglutide for the Treatment of Obesity. New England Journal of Medicine. https://www.nejm.org/doi/full/10.1056/NEJMoa2416394
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Chart */}
              <div className="flex flex-col">
                <div className="text-body-5 font-medium tracking-wider mb-[var(--spacing-4x)] opacity-70">WEIGHT</div>

                {/* Graph */}
                <div className="flex-1 relative">
                  <svg className="w-full h-full" viewBox="0 0 650 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    {/* Gradient fill between lines */}
                    <defs>
                      <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4a99a" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#2a4a3a" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Filled area between lines */}
                    <path
                      d="M 50 50 L 250 100 L 450 150 L 450 250 L 250 220 L 50 50 Z"
                      fill="url(#area-gradient)"
                    />

                    {/* Top line - Medication only */}
                    <path
                      d="M 50 50 L 250 100 L 450 150"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* End dot */}
                    <circle cx="450" cy="150" r="5" fill="white" />

                    {/* Bottom line - Levels */}
                    <path
                      d="M 50 50 L 250 220 L 450 250"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* End dot */}
                    <circle cx="450" cy="250" r="5" fill="white" />

                    {/* Labels */}
                    <text x="465" y="153" fill="white" fontSize="16">Medication only</text>
                    <text x="465" y="255" fill="white" fontSize="24" fontWeight="bold">Levels</text>
                  </svg>
                </div>

                {/* Bottom timeline */}
                <div className="mt-[var(--spacing-4x)] pt-[var(--spacing-4x)] border-t border-white/20">
                  <p className="text-body-5 font-medium tracking-wider mb-[var(--spacing-3x)] opacity-70">MONTHS</p>
                  <div className="flex text-body-4" style={{ paddingRight: '30%' }}>
                    <span className="flex-1 text-left">Start</span>
                    <span className="flex-1 text-center">Month 2</span>
                    <span className="flex-1 text-right">Month 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6x)] max-w-6xl mx-auto">
          {/* Health Improvement Card */}
          <div className="bg-[#23442f] p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
            <span className="text-body-5 font-medium tracking-wider mb-[var(--spacing-4x)] block opacity-70">HEALTH IMPROVEMENT</span>
            <p className="text-body-2 md:text-body-1 mb-[var(--spacing-8x)]">
              97% of patients felt that their overall health had improved with the programme
            </p>

            {/* Donut Chart Placeholder */}
            <div className="aspect-square max-w-[200px] mx-auto flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="30"/>
                {/* Colored arc - 97% */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#gradient-donut)"
                  strokeWidth="30"
                  strokeDasharray="427.26"
                  strokeDashoffset="12.82"
                  transform="rotate(-90 100 100)"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-donut" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5c4b8" />
                    <stop offset="100%" stopColor="#c8b8a8" />
                  </linearGradient>
                </defs>
                {/* Center text */}
                <text x="100" y="105" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold">97%</text>
              </svg>
            </div>
          </div>

          {/* Comparative Results Card */}
          <div className="bg-[#23442f] p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
            <span className="text-body-5 font-medium tracking-wider mb-[var(--spacing-4x)] block opacity-70">COMPARATIVE RESULTS</span>
            <p className="text-body-2 md:text-body-1 mb-[var(--spacing-8x)]">
              Tirzepatide demonstrated 47% greater weight reduction compared to semaglutide (20.2% vs 13.7%)<sup>1</sup>
            </p>

            {/* Bar Chart Placeholder */}
            <div className="aspect-square max-w-[200px] mx-auto flex items-center justify-end pb-8">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Bar 1 - Levels */}
                <rect x="40" y="20" width="50" height="160" rx="4" fill="url(#gradient-bar)"/>
                {/* Bar 2 - Medication */}
                <rect x="110" y="90" width="50" height="90" rx="4" fill="rgba(255,255,255,0.3)"/>

                <defs>
                  <linearGradient id="gradient-bar" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f5c4b8" />
                    <stop offset="100%" stopColor="#c8b8a8" />
                  </linearGradient>
                </defs>

                {/* Labels */}
                <text x="65" y="195" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12">Levels</text>
                <text x="135" y="195" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12">Medication</text>
              </svg>
            </div>
          </div>
        </div>

        {/* University Partnerships */}
        <div className="border-t border-white/20 pt-[var(--spacing-8x)] mt-[var(--spacing-12x)] md:mt-[var(--spacing-16x)]">
          <p className="text-body-4 text-center mb-[var(--spacing-6x)] opacity-60">
            In collaboration with leading educational and research institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[var(--spacing-8x)]">
            {['Imperial', 'Oxford', 'Bristol', 'UEG', 'Ulster'].map((uni) => (
              <div key={uni} className="text-body-3 opacity-60">{uni}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
