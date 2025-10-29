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
      name: 'Wegovy',
      weightLoss: 'Lose up to 20.7% body weight',
      price: 'From £104',
      activeIngredient: 'Semaglutide',
      dosage: '0.5mg - 2.4mg',
      administration: 'Once a week',
      administrationType: 'Injectable',
      image: '/images/wegovy.png',
      link: '/weight-loss/medications/wegovy',
    },
    {
      name: 'Mounjaro',
      weightLoss: 'Lose up to 22.5% body weight',
      price: 'From £169',
      activeIngredient: 'Tirzepatide',
      dosage: '2.5mg - 15mg',
      administration: 'Once a week',
      administrationType: 'Injectable',
      image: '/images/mounjaro.png',
      link: '/weight-loss/medications/mounjaro',
    },
    {
      name: 'Orlos',
      weightLoss: 'Lose up to 8.5% body weight',
      price: 'From £40',
      activeIngredient: 'Orlistat',
      dosage: '60mg',
      administration: 'Up to 3 a day',
      administrationType: 'Capsules',
      image: '/images/orlos.png',
      link: '/weight-loss/medications/orlistat',
    },
  ];

  const glpFaqs = [
    {
      question: 'How do they work?',
      answer: 'GLP-1 medications work by mimicking the natural GLP-1 hormone your body produces. They slow down digestion, reduce appetite, and help regulate blood sugar levels, making you feel fuller for longer and reducing cravings.',
    },
    {
      question: 'What are they used for?',
      answer: 'GLP-1 medications are used for weight management in adults with obesity (BMI ≥30) or overweight (BMI ≥27) with at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol.',
    },
    {
      question: 'Are they safe?',
      answer: 'GLP-1 medications are FDA and MHRA approved and have been extensively studied in clinical trials. They are safe when prescribed by qualified healthcare professionals and used as directed. Our specialist doctors review your medical history to ensure treatment is appropriate for you.',
    },
  ];

  const testimonials = [
    {
      weight: '48',
      duration: '7 months',
      quote: 'The other day, I tried on a bunch of old clothes I used to love, and they were all huge on me. I just stood there in the mirror thinking, "you did that."',
      name: 'Kelsey',
    },
  ];

  const experts = [
    {
      name: 'Earim Chaudry, MBBS',
      title: 'Chief Medical Officer',
      image: '/images/expert-1.jpg',
    },
    {
      name: 'Anna Mullany, MSc, BSc',
      title: 'Head of Behaviour Change',
      image: '/images/expert-2.jpg',
    },
    {
      name: 'Molly Morgan, RD',
      title: 'Lead Dietitian',
      image: '/images/expert-3.jpg',
    },
  ];

  const blogPosts = [
    {
      title: 'Wegovy 7.2mg',
      category: 'MEDICATIONS',
      author: 'Dr Earim Chaudry, Chief Medical Officer',
      image: '/images/blog-1.png',
    },
    {
      title: 'Retatrutide for weight loss',
      category: 'MEDICATIONS',
      author: 'Dr Earim Chaudry, Chief Medical Officer',
      image: '/images/blog-2.png',
    },
    {
      title: 'What is Orforglipiron?',
      category: 'MEDICATIONS',
      author: 'Dr Earim Chaudry, Chief Medical Officer',
      image: '/images/blog-3.png',
    },
    {
      title: 'Switching between Wegovy & Mounjaro',
      category: 'MEDICATIONS',
      author: 'Dr Earim Chaudry, Chief Medical Officer',
      image: '/images/blog-4.png',
    },
  ];

  return (
    <div className="flex flex-col">
      <ScrollTrigger />
      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[150px] bg-white" />

      {/* Hero Section */}
      <section className="bg-[#f5ebe5] py-[56px] md:py-[80px]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-12x)] items-center">
            <div className="flex flex-col gap-[var(--spacing-6x)]">
              <span className="inline-block px-[var(--spacing-4x)] py-[var(--spacing-2x)] bg-[#ffd4c4] rounded-full text-body-4 font-medium text-[var(--color-text-xDark)] w-fit">
                Weight Loss
              </span>
              <h1 className="text-heading-2 md:text-heading-1 text-[var(--color-text-xDark)]">
                Weight loss medications at Voy
              </h1>
              <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
                Your health is personal - and so is our approach. At Voy, we evaluate your unique needs, prescribe the best treatment for you, and guide you every step of the way.
              </p>
              <div>
                <Button
                  variant="primary"
                  size="medium"
                  href="/weight-loss"
                  className="bg-[#1a3428] text-white hover:bg-[#1a3428]/90 rounded-full px-[var(--spacing-6x)] md:px-[var(--spacing-8x)]"
                >
                  Am I eligible?
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[600px]">
                {/* Placeholder for hero images */}
                <div className="aspect-[4/3] bg-[#f5dbd0] rounded-[var(--radius-card)] flex items-center justify-center">
                  <span className="text-body-3 text-[var(--color-text-dark)]">Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About GLP-1 Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-12x)] items-center">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[450px] aspect-square rounded-[var(--radius-card)] overflow-hidden">
              <img
                src="/images/levels3.png"
                alt="GLP-1 Medication"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[var(--spacing-6x)]">
            <div className="border-t border-gray-300 pt-[var(--spacing-4x)]">
              <span className="text-body-4 text-[var(--color-text-dark)]">About GLP-1 Medication</span>
            </div>
            <h2 className="text-heading-3 md:text-heading-2">What are GLP-1 Medications?</h2>
            <p className="text-body-2 text-[var(--color-text-dark)]">
              GLP-1 medications are treatments that mimic a natural hormone in your body. They help control appetite, regulate blood sugar levels, and are clinically proven to support meaningful weight loss.
            </p>
            <FAQAccordion items={glpFaqs} />
          </div>
        </div>
      </section>

      {/* Medications Section */}
      <section className="bg-white py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="text-center mb-[var(--spacing-12x)] max-w-4xl mx-auto">
            <h2 className="text-heading-3 md:text-heading-2 mb-[var(--spacing-4x)]">
              Everybody is different and so is every treatment at Voy
            </h2>
            <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
              Based on your health history, BMI and personal goals, we'll recommend the one that's right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6x)] max-w-6xl mx-auto">
            {medications.map((med, index) => (
              <div
                key={index}
                className="bg-white rounded-[var(--radius-card)] overflow-hidden border border-gray-200 hover:shadow-[var(--shadow-heavy)] transition-all duration-200 flex flex-col"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-[var(--spacing-6x)] flex flex-col gap-[var(--spacing-4x)] flex-1">
                  <h3 className="text-heading-3 text-black">{med.name}</h3>
                  <p className="text-body-3 text-[var(--color-text-dark)]">{med.weightLoss}</p>

                  <div className="flex flex-col gap-[var(--spacing-3x)] py-[var(--spacing-4x)] border-t border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-body-4 text-[var(--color-text-dark)]">Price</span>
                      <span className="text-body-3 font-medium text-black">{med.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body-4 text-[var(--color-text-dark)]">Active Ingredient</span>
                      <span className="text-body-4 text-black">{med.activeIngredient}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body-4 text-[var(--color-text-dark)]">Dosage</span>
                      <span className="text-body-4 text-black">{med.dosage}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body-4 text-[var(--color-text-dark)]">{med.administrationType}</span>
                      <span className="text-body-4 text-black">{med.administration}</span>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="medium"
                    href={med.link}
                    className="bg-[#1a3428] text-white hover:bg-[#1a3428]/90 rounded-full w-full mt-auto"
                  >
                    Explore {med.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f5f5f5] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="mb-[var(--spacing-8x)]">
            <span className="text-body-5 font-medium text-[var(--color-text-dark)] tracking-wider">TESTIMONIALS</span>
            <h2 className="text-heading-3 md:text-heading-2 mt-[var(--spacing-2x)]">Weight loss success stories</h2>
          </div>

          <div className="flex items-center gap-[var(--spacing-4x)] mb-[var(--spacing-8x)]">
            <div className="flex gap-[var(--spacing-1x)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-body-4 text-[var(--color-text-dark)]">TrustScore 4.7 /5 • 11932 reviews</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--spacing-8x)] items-center">
            <div className="bg-white p-[var(--spacing-10x)] rounded-[var(--radius-card)] shadow-[var(--shadow-medium)]">
              <div className="text-[80px] font-bold text-[var(--color-text-xDark)] leading-none">48<span className="text-heading-3 ml-2">kg</span></div>
              <p className="text-body-3 text-[var(--color-text-dark)] mt-[var(--spacing-2x)]">Lost in 7 months</p>
              <p className="text-body-3 text-[var(--color-text-dark)] mt-[var(--spacing-6x)] mb-[var(--spacing-6x)]">
                "The other day, I tried on a bunch of old clothes I used to love, and they were all huge on me. I just stood there in the mirror thinking, "you did that."
              </p>
              <Button
                variant="secondary"
                size="medium"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full"
              >
                Kelsey's story
              </Button>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-[var(--spacing-4x)]">
              <div className="aspect-square bg-[#2a4a5a] rounded-[var(--radius-card)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">Before/After 1</div>
              </div>
              <div className="aspect-square bg-[#d4c4b8] rounded-[var(--radius-card)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-black">Before/After 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor CTA Section */}
      <section className="bg-white py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-12x)] items-center">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[500px] aspect-[3/4] bg-[#f5dbd0] rounded-[var(--radius-card)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-body-3 text-[var(--color-text-dark)]">Doctor Image</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[var(--spacing-6x)]">
              <h2 className="text-heading-3 md:text-heading-2">
                Not sure which weight loss medication is safest and most effective for you?
              </h2>
              <p className="text-body-2 text-[var(--color-text-dark)]">
                Answer a few questions to get your treatment recommendation from our clinicians.
              </p>
              <div className="flex flex-col gap-[var(--spacing-3x)]">
                {[
                  'Start safely with the right dose',
                  'Progress at your pace with guidance',
                  'Get expert help anytime'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-[var(--spacing-3x)]">
                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-body-3 text-[var(--color-text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  variant="secondary"
                  size="large"
                  href="/weight-loss"
                  className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-[var(--spacing-8x)]"
                >
                  Start your assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Stats Section */}
      <section className="bg-[#1a3428] py-[56px] md:py-[120px] text-white">
        <div className="page-container">
          <h2 className="text-heading-3 md:text-heading-2 text-center mb-[var(--spacing-12x)]">
            Our members experience transformational results
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-6x)] mb-[var(--spacing-12x)]">
            <div className="bg-[#23442f] p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
              <div className="text-[80px] font-bold leading-none mb-[var(--spacing-4x)]">53%</div>
              <p className="text-body-2 mb-[var(--spacing-8x)]">
                In clinical studies members on the Voy programme lost 53% more weight than those using medication only
              </p>
              <div className="aspect-[16/9] bg-[#2a4a3a] rounded-lg flex items-center justify-center">
                <span className="text-body-4">Graph Placeholder</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6x)]">
              <div className="bg-[#23442f] p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
                <span className="text-body-5 font-medium tracking-wider mb-[var(--spacing-4x)] block">HEALTH IMPROVEMENT</span>
                <p className="text-body-3 mb-[var(--spacing-6x)]">
                  97% of patients felt their overall health had improved with the programme
                </p>
                <div className="aspect-square bg-[#2a4a3a] rounded-lg flex items-center justify-center">
                  <span className="text-body-4">Donut Chart</span>
                </div>
              </div>

              <div className="bg-[#23442f] p-[var(--spacing-8x)] rounded-[var(--radius-card)]">
                <span className="text-body-5 font-medium tracking-wider mb-[var(--spacing-4x)] block">COACHING</span>
                <p className="text-body-3 mb-[var(--spacing-6x)]">
                  Engaging with the Voy programme leads to 53% more weight loss than medication alone
                </p>
                <div className="aspect-square bg-[#2a4a3a] rounded-lg flex items-center justify-center">
                  <span className="text-body-4">Bar Chart</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-[var(--spacing-8x)]">
            <p className="text-body-4 text-center mb-[var(--spacing-6x)]">In partnership with leading educational and research institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-[var(--spacing-8x)]">
              {['Imperial', 'Oxford', 'Bristol', 'UEG', 'Ulster'].map((uni) => (
                <div key={uni} className="text-body-3 opacity-60">{uni}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="bg-white py-[56px] md:py-[120px]">
        <div className="page-container">
          <h2 className="text-heading-3 md:text-heading-2 text-center mb-[var(--spacing-12x)]">
            Led by the country's leading obesity experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)] mb-[var(--spacing-12x)]">
            {experts.map((expert, idx) => (
              <div key={idx} className="flex flex-col gap-[var(--spacing-4x)]">
                <div className="relative aspect-[3/4] bg-[#f5dbd0] rounded-[var(--radius-card)] overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-body-3 text-[var(--color-text-dark)]">Expert Photo</span>
                  </div>
                  <button className="absolute top-[var(--spacing-4x)] right-[var(--spacing-4x)] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-2xl text-black">+</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-heading-4">{expert.name}</h3>
                  <p className="text-body-4 text-[var(--color-text-dark)]">{expert.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-[var(--spacing-8x)]">
            <p className="text-body-4 text-center mb-[var(--spacing-6x)] text-[var(--color-text-dark)]">
              In partnership with leading educational and research institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-[var(--spacing-8x)]">
              {['Imperial', 'Oxford', 'Bristol', 'UEG', 'Ulster'].map((uni) => (
                <div key={uni} className="text-body-3 text-[var(--color-text-dark)]">{uni}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[#f5f5f5] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="mb-[var(--spacing-8x)]">
            <span className="text-body-5 font-medium text-[var(--color-text-dark)] tracking-wider">Blog</span>
            <h2 className="text-heading-3 md:text-heading-2 mt-[var(--spacing-2x)]">Learn more about weight loss medications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-6x)] mb-[var(--spacing-8x)]">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-[var(--radius-card)] overflow-hidden hover:shadow-[var(--shadow-medium)] transition-shadow">
                <div className="aspect-square bg-[#f5ebe5] flex items-center justify-center">
                  <span className="text-body-4 text-[var(--color-text-dark)]">Blog Image</span>
                </div>
                <div className="p-[var(--spacing-6x)]">
                  <span className="text-body-5 font-medium text-[var(--color-text-dark)] tracking-wider">{post.category}</span>
                  <h3 className="text-heading-4 mt-[var(--spacing-2x)] mb-[var(--spacing-4x)]">{post.title}</h3>
                  <p className="text-body-4 text-[var(--color-text-dark)]">{post.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="large"
              href="/blog"
              className="bg-[#1a3428] text-white hover:bg-[#1a3428]/90 rounded-full px-[var(--spacing-10x)]"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-white to-[#e8f4f8] py-[80px] md:py-[120px]">
        <div className="page-container text-center">
          <h2 className="text-heading-3 md:text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-8x)] max-w-3xl mx-auto">
            Start your safe, supported weight loss journey today
          </h2>
          <Button
            variant="primary"
            size="large"
            href="/weight-loss"
            className="bg-white text-black border-2 border-black hover:bg-black hover:text-white rounded-full px-[var(--spacing-10x)]"
          >
            Get started today
          </Button>
        </div>
      </section>
    </div>
  );
}
