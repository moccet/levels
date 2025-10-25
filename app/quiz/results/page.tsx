'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import Logo from '../../components/ui/Logo';
import { useQuizState } from '../useQuizState';
import { calculateWeightLossPrediction, formatWeight, getWeightFromQuiz, getGoalsFromQuiz } from '../../utils/weightLossCalculations';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ResultsPage() {
  const router = useRouter();
  const { answers, isLoaded } = useQuizState();
  const [prediction, setPrediction] = useState<ReturnType<typeof calculateWeightLossPrediction> | null>(null);
  const [goals, setGoals] = useState<string[]>([]);

  useEffect(() => {
    // Wait for quiz state to load
    if (!isLoaded) return;

    const weight = getWeightFromQuiz(answers);

    if (!weight) {
      // No weight data, redirect back to quiz
      router.push('/quiz/1');
      return;
    }

    const weightPrediction = calculateWeightLossPrediction(weight);
    setPrediction(weightPrediction);
    setGoals(getGoalsFromQuiz(answers));
  }, [answers, isLoaded, router]);

  if (!isLoaded || !prediction) {
    return null;
  }

  // Prepare chart data
  const chartData = {
    labels: prediction.monthlyDataPoints.map((dp) => {
      if (dp.month === 0) return 'Oct';
      const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      return months[dp.month % 11];
    }),
    datasets: [
      {
        label: 'Weight (kg)',
        data: prediction.monthlyDataPoints.map((dp) => dp.weight),
        borderColor: '#1a1a1a',
        backgroundColor: 'transparent',
        borderWidth: 2.5,
        tension: 0.4, // Smooth curve
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#1a1a1a',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#1a1a1a',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.y} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            family: 'var(--font-poppins)',
          },
          color: '#666',
        },
      },
      y: {
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          font: {
            size: 11,
            family: 'var(--font-poppins)',
          },
          color: '#666',
          callback: function (value: any) {
            return value;
          },
        },
        min: Math.floor(prediction.targetWeight - 10),
        max: Math.ceil(prediction.currentWeight + 5),
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Logo */}
      <div className="flex justify-center pt-12 pb-8">
        <Logo href="/" />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Your assessment
          </h1>

          <div className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
            By Levels Clinical Team
          </div>
          <div className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-poppins)' }}>
            Medical Directors
          </div>
        </div>

        {/* Current Weight Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="text-center">
            <p className="text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              You are currently{' '}
              <span className="font-bold text-2xl text-gray-900">
                {formatWeight(prediction.currentWeight)}
              </span>
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Your goals:</p>
              {goals.map((goal, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prediction Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-widest text-gray-500 mb-4 uppercase">
              WITH OUR PERSONALISED PLAN
            </p>

            <h2
              className="text-2xl md:text-3xl font-normal text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              You could reach{' '}
              <span className="font-bold">{formatWeight(prediction.targetWeight)}</span>
              <br />
              in 10 months
            </h2>

            <p className="text-gray-600 mt-2">
              That's a weight loss of {formatWeight(prediction.totalWeightLoss)}
            </p>
          </div>

          {/* Chart */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              YOUR WEIGHT (KG)
            </p>
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 leading-relaxed">
            *Patients who receive medication (GLP-1 agonists) and partake in our Levels behaviour change programme lose on
            average 20% of their body weight by month 10 (based on clinical studies and internal analysis).
          </p>
        </div>

        {/* Money Back Promise */}
        <div className="bg-white/60 rounded-2xl p-6 mb-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                Money back promise
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Use our service and lose at least 10% of your body weight in 6 months, or we'll refund you the difference.{' '}
                <a href="#" className="underline hover:no-underline">
                  See full terms
                </a>
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">MONEY<br/>BACK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => router.push('/pricing')}
          className="w-full bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 px-8 rounded-full hover:opacity-90 transition-opacity text-lg shadow-md"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
