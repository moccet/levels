/**
 * Weight Loss Calculation Utilities
 * Based on GLP-1 medication effectiveness (20-25% body weight loss over 10 months)
 */

export interface WeightLossPrediction {
  currentWeight: number;
  targetWeight: number;
  totalWeightLoss: number;
  percentageLoss: number;
  monthlyDataPoints: { month: number; weight: number }[];
}

/**
 * Calculate weight loss prediction based on current weight
 * GLP-1 medications typically result in 20-25% body weight loss
 */
export function calculateWeightLossPrediction(
  currentWeight: number,
  targetPercentageLoss: number = 0.20 // 20% default
): WeightLossPrediction {
  const totalWeightLoss = currentWeight * targetPercentageLoss;
  const targetWeight = currentWeight - totalWeightLoss;

  // Generate realistic weight loss trajectory
  // Weight loss is typically faster in first 3-4 months, then plateaus
  const monthlyDataPoints = generateWeightTrajectory(currentWeight, targetWeight, 10);

  return {
    currentWeight,
    targetWeight: Math.round(targetWeight * 10) / 10, // Round to 1 decimal
    totalWeightLoss: Math.round(totalWeightLoss * 10) / 10,
    percentageLoss: targetPercentageLoss * 100,
    monthlyDataPoints,
  };
}

/**
 * Generate realistic weight loss trajectory over time
 * Uses a logarithmic curve to simulate faster initial loss
 */
function generateWeightTrajectory(
  startWeight: number,
  endWeight: number,
  months: number
): { month: number; weight: number }[] {
  const dataPoints: { month: number; weight: number }[] = [];
  const totalLoss = startWeight - endWeight;

  for (let month = 0; month <= months; month++) {
    let weight: number;

    if (month === 0) {
      weight = startWeight;
    } else if (month === months) {
      weight = endWeight;
    } else {
      // Use a logarithmic curve for realistic weight loss
      // Loss is faster initially, then slows down
      const progress = month / months;
      const logarithmicProgress = Math.log(1 + progress * 9) / Math.log(10);
      weight = startWeight - (totalLoss * logarithmicProgress);
    }

    dataPoints.push({
      month,
      weight: Math.round(weight * 10) / 10,
    });
  }

  return dataPoints;
}

/**
 * Get user's current weight from quiz answers
 */
export function getWeightFromQuiz(quizAnswers: Record<number, any>): number | null {
  const weight = quizAnswers[6]; // Question 6 is weight
  return typeof weight === 'number' ? weight : null;
}

/**
 * Format weight for display
 */
export function formatWeight(weight: number, unit: 'kg' | 'lbs' = 'kg'): string {
  return `${Math.round(weight * 10) / 10} ${unit}`;
}

/**
 * Get user's goals from quiz answers
 */
export function getGoalsFromQuiz(quizAnswers: Record<number, any>): string[] {
  const goals: string[] = [];

  // Question 14 is weight loss goal
  const weightLossGoal = quizAnswers[14];
  if (weightLossGoal) {
    goals.push('Achieve weight loss goal');
  }

  // Add default goals
  goals.push('Become healthier');
  goals.push('Improve overall wellbeing');

  return goals;
}
