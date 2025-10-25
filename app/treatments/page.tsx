import React from 'react';
import { Button } from '../components/ui';
import FAQAccordion from './FAQAccordion';
import ScrollTrigger from './ScrollTrigger';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weight Loss Medications | Levels',
  description: 'Discover safe, effective weight loss medications including Mounjaro and Wegovy. Clinically proven GLP-1 treatments with medical support.',
};

export default function TreatmentsPage() {
  const medications = [
    {
      name: 'Mounjaro',
      generic: '(tirzepatide)',
      effectiveness: 'Most effective option',
      description: 'Currently shows the most weight loss in clinical trials. Some patients achieve over 20% body weight reduction with combined GLP-1 and GIP action.',
      image: '/images/mounjaro.png',
    },
    {
      name: 'Wegovy',
      generic: '(semaglutide)',
      effectiveness: 'Highly effective',
      description: 'Clinically proven GLP-1 medication with excellent results. Most patients achieve 10-15% weight loss with weekly injections and lifestyle changes.',
      image: '/images/wegovy.png',
    },
    {
      name: 'Orlistat',
      generic: '(oral medication)',
      effectiveness: 'Alternative option',
      description: 'Non-injection medication that works by reducing fat absorption. Available for patients who prefer oral medication or aren\'t suitable for GLP-1 treatments.',
      image: '/images/orlos.png',
    },
  ];

  const faqs = [
    {
      question: 'What is GLP-1?',
      answer: 'GLP-1 stands for glucagon-like peptide-1. It\'s a natural hormone your body releases after eating. GLP-1 helps control blood sugar levels, slows digestion, and reduces appetite.\n\nGLP-1 medications mimic this hormone, helping you feel fuller for longer, reducing cravings, and supporting sustainable weight loss when combined with healthy lifestyle changes.',
    },
    {
      question: 'Which medication is most effective?',
      answer: 'Mounjaro (tirzepatide) currently shows the most weight loss in clinical trials, with some people losing over 20% of their body weight. However, the best medication for you depends on your individual health profile, medical history, and goals.\n\nOur specialist doctors review your case to recommend the most suitable treatment for your circumstances.',
    },
    {
      question: 'How much weight can I expect to lose?',
      answer: 'Most people can expect to lose between 5% and 15% of their body weight over several months, with some losing even more. Results vary based on:\n\n• The specific medication prescribed\n• Your starting weight and BMI\n• Adherence to lifestyle changes\n• Individual metabolic response\n\nSustainable weight loss typically occurs gradually over 6-12 months.',
    },
    {
      question: 'Are these medications safe?',
      answer: 'GLP-1 medications are FDA and MHRA approved for weight management. They have been extensively studied in clinical trials involving thousands of patients.\n\nLike all medications, they can have side effects. Our specialist doctors carefully review your medical history to ensure the treatment is safe for you. You\'ll have regular check-ins to monitor your progress and address any concerns.',
    },
    {
      question: 'What are the common side effects?',
      answer: 'The most common side effects include:\n\n• Nausea (usually mild and temporary)\n• Constipation or diarrhoea\n• Fatigue\n• Headaches\n• Injection site reactions\n\nThese effects typically improve as your body adjusts to the medication. Starting with a lower dose and gradually increasing helps minimise side effects. Your care team provides guidance on managing any symptoms.',
    },
    {
      question: 'Am I eligible for treatment?',
      answer: 'You may be eligible if you have:\n\n• A BMI of 30 or above, OR\n• A BMI of 27 or above with a weight-related condition (such as high blood pressure, prediabetes, type 2 diabetes, or PCOS)\n\nOur specialist doctors assess your complete health profile during your consultation to determine if treatment is appropriate and safe for you.',
    },
    {
      question: 'How does the clinical assessment work?',
      answer: 'Our assessment process is thorough but straightforward:\n\n1. Complete our online medical questionnaire\n2. Our specialist doctors review your information\n3. We may request additional details or health metrics\n4. If approved, we create a personalised treatment plan\n5. Your medication is delivered discreetly to your door\n\nThe entire process typically takes 24-48 hours from assessment to delivery.',
    },
    {
      question: 'Is this available on the NHS?',
      answer: 'Some weight loss medications are available on the NHS, but eligibility criteria are strict and waiting times can be significant.\n\nLevels provides private access to these medications with specialist medical supervision. This means faster access, personalised care, and ongoing support throughout your weight loss journey.',
    },
  ];

  return (
    <div className="flex flex-col">
      <ScrollTrigger />
      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[150px] bg-white" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              Weight loss medications
            </h1>
            <p className="text-body-1 text-[var(--color-text-dark)] mb-[var(--spacing-8x)]">
              Clinically proven GLP-1 medications and treatments, prescribed by specialist doctors and delivered to your door with ongoing support.
            </p>
            <Button variant="primary" size="large" href="/weight-loss" className="bg-black text-white hover:bg-black/90">
              Start assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-12x)]">
            How GLP-1 medications work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-heading-4">Reduce appetite</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Signals your brain that you're full, helping you eat less without constant hunger.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-heading-4">Control blood sugar</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Regulates insulin response and blood glucose levels, reducing cravings and energy crashes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-heading-4">Slow digestion</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Food stays in your stomach longer, keeping you satisfied between meals.
              </p>
            </div>
          </div>

          <div className="mt-[var(--spacing-12x)] p-[var(--spacing-8x)] bg-[var(--color-surface-white-xLight)] rounded-[var(--radius-card)]">
            <p className="text-body-2 text-[var(--color-text-dark)] text-center">
              Most people lose between <strong>5% and 15%</strong> of their body weight over several months, with some achieving even greater results when combined with lifestyle changes.
            </p>
          </div>
        </div>
      </section>

      {/* Medications Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            Available medications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] max-w-5xl mx-auto">
            {medications.map((med, index) => (
              <div
                key={index}
                className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-heavy)] transition-all duration-200"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-4x)]">
                  <div>
                    <h3 className="text-heading-3 text-black mb-[var(--spacing-1x)]">
                      {med.name}
                    </h3>
                    <p className="text-body-4 text-[var(--color-text-dark)]">{med.generic}</p>
                  </div>
                  <div className="inline-block px-[var(--spacing-3x)] py-[var(--spacing-1x)] bg-[#dad8fa] rounded-full">
                    <span className="text-body-4 font-medium text-[var(--color-text-xDark)]">
                      {med.effectiveness}
                    </span>
                  </div>
                  <p className="text-body-3 text-[var(--color-text-dark)]">
                    {med.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-12x)]">
            Who can access treatment?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)]">
            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Eligibility criteria</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                You may be eligible for weight loss medication if you have:
              </p>
              <ul className="flex flex-col gap-[var(--spacing-3x)] text-body-3 text-[var(--color-text-dark)]">
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>A BMI of 30 or above</span>
                </li>
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>A BMI of 27 or above with a weight-related health condition</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Weight-related conditions</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Conditions that may make you eligible include:
              </p>
              <ul className="flex flex-col gap-[var(--spacing-3x)] text-body-3 text-[var(--color-text-dark)]">
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>High blood pressure (hypertension)</span>
                </li>
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>Type 2 diabetes or prediabetes</span>
                </li>
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>Polycystic ovary syndrome (PCOS)</span>
                </li>
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>High cholesterol</span>
                </li>
                <li className="flex gap-[var(--spacing-2x)]">
                  <span>•</span>
                  <span>Sleep apnoea</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[var(--spacing-12x)] p-[var(--spacing-8x)] bg-[#f7ad8a]/20 rounded-[var(--radius-card)] border-l-4 border-[#f7ad8a]">
            <p className="text-body-2 text-[var(--color-text-dark)]">
              <strong>Not sure if you're eligible?</strong> Our specialist doctors will review your complete health profile during your assessment and recommend the most appropriate treatment for your circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-2 text-center mb-[var(--spacing-12x)]">
              Safety and monitoring
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] mb-[var(--spacing-12x)]">
              <div className="flex flex-col gap-[var(--spacing-4x)]">
                <h3 className="text-heading-3">Medical supervision</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  All treatments are prescribed by specialist doctors registered with the General Medical Council. Your care team monitors your progress throughout your journey.
                </p>
              </div>

              <div className="flex flex-col gap-[var(--spacing-4x)]">
                <h3 className="text-heading-3">Regular check-ins</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  We schedule regular consultations to track your progress, adjust your treatment plan, and address any concerns or side effects you may experience.
                </p>
              </div>
            </div>

            <div className="bg-white p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
              <h3 className="text-heading-3 mb-[var(--spacing-4x)]">Common side effects</h3>
              <p className="text-body-3 text-[var(--color-text-dark)] mb-[var(--spacing-6x)]">
                Like all medications, GLP-1 treatments can cause side effects. Most are mild and improve as your body adjusts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4x)]">
                <ul className="flex flex-col gap-[var(--spacing-2x)] text-body-3 text-[var(--color-text-dark)]">
                  <li>• Nausea (usually temporary)</li>
                  <li>• Constipation or diarrhoea</li>
                  <li>• Fatigue</li>
                </ul>
                <ul className="flex flex-col gap-[var(--spacing-2x)] text-body-3 text-[var(--color-text-dark)]">
                  <li>• Headaches</li>
                  <li>• Dizziness</li>
                  <li>• Injection site reactions</li>
                </ul>
              </div>
              <p className="text-body-3 text-[var(--color-text-dark)] mt-[var(--spacing-6x)]">
                Your care team provides guidance on managing side effects and adjusting your treatment if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] py-[56px] md:py-[120px]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
            Ready to start your weight loss journey?
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Complete our clinical assessment to find out if weight loss medication is right for you. Our specialist doctors will review your case and create a personalised treatment plan.
          </p>
          <Button variant="primary" size="large" href="/weight-loss" className="bg-black text-white hover:bg-black/90">
            Start assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
