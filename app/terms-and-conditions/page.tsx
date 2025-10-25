import React from 'react';
import ScrollTrigger from './ScrollTrigger';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Levels',
  description: 'Read our terms and conditions for using Levels. Understand your rights and responsibilities when accessing our services.',
};

export default function TermsAndConditionsPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const sections = [
    {
      heading: '1. These terms and conditions',
      content: (
        <>
          <p>1.1. These terms and conditions (together with the documents referred to in it) (collectively, these "Terms") set out the basis on which you may make use of this website (our "Site"), whether as a guest or a registered user. Please read these terms of use carefully before you start to use our Site.</p>
          <p className="mt-4">1.2. By using our Site, you indicate that you accept these terms and that you agree to comply with them. If you do not agree to these terms, you must not use our Site.</p>
          <p className="mt-4">1.3. We recommend that you should print a copy of these terms and conditions for future reference.</p>
        </>
      ),
    },
    {
      heading: '2. Information about us',
      content: (
        <>
          <p>2.1. Our Site is owned and operated by Levels Limited ("we", "us" or "our"). We are a company incorporated in England and Wales. Our registered office address is: [Address]. Our VAT number is: [VAT Number]. We are a limited company.</p>
          <p className="mt-4">2.2. You can contact us using the following email address: help@levelsweight.com</p>
          <p className="mt-4">2.3. The clinicians we engage are registered in the United Kingdom with the General Pharmaceutical Council and each hold accredited pharmacist independent prescriber qualifications. The clinicians are trained in providing remote consultations and issuing prescription medicine online.</p>
          <p className="mt-4">2.4. Our pharmacy (the "Pharmacy") is located at Manual Pharmacy, Unit 1, Verda Park, Hithercroft Road, Wallingford, OX10 9SJ and registered with the General Pharmaceutical Council ("GPhC") with number 9012134.</p>
        </>
      ),
    },
    {
      heading: '3. There are other terms that may apply to you',
      content: (
        <>
          <p>3.1. Our Privacy Policy which also applies to your use of our Site, sets out the terms on which we process any personal data we collect from you, or that you provide to us. We will only use your personal information as set out in our Privacy Policy.</p>
          <p className="mt-4">3.2. If you purchase medicines or other products from our Site, the terms and conditions of sale (Terms of Sale) will apply to the sale of such medicines or products.</p>
        </>
      ),
    },
    {
      heading: '4. We may make changes to these terms',
      content: (
        <p>We amend these terms from time to time. Every time you wish to use our Site, please check these terms to ensure you understand the terms that apply at that time.</p>
      ),
    },
    {
      heading: '5. We may make changes to our site',
      content: (
        <p>We may update and change our Site from time to time to reflect changes to our products, our users' needs and our business priorities or for any other reason.</p>
      ),
    },
    {
      heading: '6. We may suspend or withdraw our site',
      content: (
        <>
          <p>6.1. Access to our Site is permitted on a temporary basis and is available free of charge. We do not guarantee that our Site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our Site for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.</p>
          <p className="mt-4">6.2. You are also responsible for ensuring that all persons who access our Site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
        </>
      ),
    },
    {
      heading: '7. Accessing our site',
      content: (
        <>
          <p>7.1. Our Site is directed to people residing in England or the UK. We do not represent that content available on or through our Site is appropriate for use or available in other locations.</p>
          <p className="mt-4">7.2. You must be at least 18 years old to use our Site and purchase any products or medications available via the Site.</p>
          <p className="mt-4">7.3. From time to time, we may restrict access to some parts of our Site, or our entire Site, to users who have registered with us.</p>
          <p className="mt-4">7.4. If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any third party. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the provisions of these terms of use.</p>
          <p className="mt-4">7.5. If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at help@levelsweight.com.</p>
        </>
      ),
    },
    {
      heading: '8. Registration',
      content: (
        <>
          <p>8.1. If you wish to purchase any products or medications from our Site, you will first have to register. Please ensure that all information you provide on registration is true and accurate, current and complete. If there are any changes to the details supplied to us it is your responsibility to inform us straight away. Changes to your registration details should be made through your account page.</p>
          <p className="mt-4">8.2. We reserve the right to refuse to accept any application to register on our Site for any reason.</p>
        </>
      ),
    },
    {
      heading: '9. Our services',
      content: (
        <>
          <p>9.1. You cannot submit a questionnaire, order a product or receive medical treatment without first registering on our Site.</p>
          <p className="mt-4">9.2. On ordering a prescription only medicine, we provide an online medical consultation to you based on online questionnaires you complete and your answers to any follow up questions raised by the clinician.</p>
          <p className="mt-4">9.3. Our clinicians will review the questionnaire and, provided that you are suitable for remote medical treatment, confirm whether the ordered treatment is clinically appropriate for you and prescribe the ordered treatment.</p>
          <p className="mt-4">9.4. Once you have submitted a questionnaire our clinicians aim to respond to you within 24 hours. You accept that once you have submitted the questionnaire you can no longer cancel this service. This is because our clinicians will commence reviewing your questionnaire once you have clicked the submit button. If, however, that our clinicians determine that you are not suitable for treatment we will notify you that we cannot treat you and the product will not be sold to you and you will not be charged. We will only charge your payment card if your order is approved by the clinician and a prescription issued.</p>
          <p className="mt-4">9.5. If you order a product which is not a prescription only medicine, an online consultation is not necessary and you will be charged for the product on placing your order.</p>
          <p className="mt-4">9.6. For prescription only medicines, if our clinicians determine based on their medical assessment of the information provided in the questionnaire that you are suitable for treatment we will issue a prescription, which will be sent to our Pharmacy. The Pharmacy will sell, supply, dispense and post prescription only medicines to you directly in its own name in accordance with our Terms of Sale.</p>
          <p className="mt-4">9.7. If the clinician requires further information, you will receive a message from them. The order will not be processed until you have replied to the clinician's message. This must be within 10 days of placing your order. If you fail to reply within this timeframe your order will be declined and you will not be charged.</p>
          <p className="mt-4">9.8. Professional codes of conduct and legal restrictions may limit the number any frequency of any item we and/or our Pharmacy are permitted to supply to you.</p>
          <p className="mt-4">9.9. All communication between you and the clinician must be done via our secure messaging platform. The customer service email help@levelsweight.com should only be used for general website queries.</p>
          <p className="mt-4">9.10. We reserve the right to reject any order. If we are unable to accept your order, we will let you know.</p>
          <p className="mt-4">9.11. By registering on our Site, you will create a secure online electronic patient record which will contain the following information: (i) copy of these Terms and the Privacy Policy which you clicked and accepted; (ii) messages you receive from us; (iii) your personal details; and (vi) your orders. You acknowledge and agree that Levels Limited may archive your electronic patient records including your personal information, communication and treatments for a minimum of 8 years following the last consultation. Please see our Privacy Policy for further information.</p>
          <p className="mt-4">9.12. You must use our Site in compliance with our Acceptable Use Policy (see clause 11 below).</p>
        </>
      ),
    },
    {
      heading: '10. Intellectual property rights and how you may use material on our site',
      content: (
        <>
          <p>10.1. We are the owner or the licensee of all intellectual property rights in our Site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
          <p className="mt-4">10.2. You may print off one copy, and may download extracts, of any page(s) from our Site for your personal reference and you may draw the attention of others within your organisation to material posted on our Site.</p>
          <p className="mt-4">10.3. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
          <p className="mt-4">10.4. Our status (and that of any identified contributors) as the authors of material on our Site must always be acknowledged.</p>
          <p className="mt-4">10.5. You must not use any part of the materials on our Site for commercial purposes without obtaining a licence to do so from us or our licensors.</p>
          <p className="mt-4">10.6. If you print off, copy or download any part of our Site in breach of these terms of use, your right to use our Site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
        </>
      ),
    },
    {
      heading: '11. Information on this site is not a substitute for professional medical advice',
      content: (
        <>
          <p>11.1. The content on our Site is provided for general information only and is not intended to amount to advice on which you should rely in your specific circumstances. You should take advice from a doctor or other healthcare practitioner before taking, or refraining from, any action based on the content of this Site.</p>
          <p className="mt-4">11.2. The information provided about the products is intended to be used for educational or general informational purposes only. It is not aimed at providing specific advice to any individual and should not be relied upon by you in making (or refraining from making) any decisions regarding your health or wellbeing. Please consult with a doctor or other health care practitioner before taking or refraining from any course of action or treatment.</p>
          <p className="mt-4">11.3. The content on our Site is provided without any representations, guarantees, conditions or warranties as to its accuracy or completeness or as to whether it is up to date.</p>
          <p className="mt-4">11.4. Where our Site contains links to other Sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them. We have no control over the contents of those Sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          <p className="mt-4">11.5. This Site may include information and materials uploaded by other users of the Site, such as product reviews. This information and these materials have not been verified or approved by us. The views expressed by other users on our Site do not represent our views or values. If you wish to complain about information and materials uploaded by other users please contact us at help@levelsweight.com.</p>
        </>
      ),
    },
    {
      heading: '12. Our responsibility for loss or damage suffered by you',
      content: (
        <>
          <p>12.1. We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</p>
          <p className="mt-4">12.2. Different limitations and exclusions of liability will apply to liability arising as a result of the supply of any products to you, which will be set out in our Terms of Sale.</p>
          <p className="mt-4">12.3. Please note that we only provide our Site for domestic and private use. You agree not to use our Site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</p>
          <p className="mt-4">12.4. We accept no liability for any loss of data or for any indirect or consequential loss or damage of any kind however arising, which may be suffered by you in connection with our Site.</p>
          <p className="mt-4">12.5. If defective digital content, that we have supplied, damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation. However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge or for damage that was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us.</p>
        </>
      ),
    },
    {
      heading: '13. Acceptable use policy',
      content: (
        <>
          <p>13.1. Whenever you make use of a feature that requires or allows you to upload information or content to our Site, or to make contact with other users of our Site, you must comply with the content standards set out in this Acceptable Use Policy as set out in this paragraph 13.</p>

          <p className="mt-4">13.2. In relation to the use of our Site:</p>

          <p className="mt-2 ml-4">13.2.1. You accept that the advice given on our Site does not replace your regular healthcare provider. You should tell your regular healthcare provider about treatment we prescribe and medication supplied by our partner Pharmacy.</p>

          <p className="mt-2 ml-4">13.2.2. We shall not be liable for any damages arising out of: (i) a failure by you to provide (and continuously maintain) complete, truthful and accurate information to us, including in all questionnaires you complete; (ii) a failure by you to follow advice given by a doctor or healthcare practitioner or (iii) any failure by you to pass on information given on the Site to your regular healthcare provider.</p>

          <p className="mt-2 ml-4">13.2.3. The provision of any products or services to you via our Site is conditional on you completing all consultation questionnaires contained on our Site truthfully and honestly. You must disclose all relevant information to the best of your knowledge.</p>

          <p className="mt-2 ml-4">13.2.4. You are not allowed to register more than once. Please do not register or complete questionnaires on behalf of anyone other than yourself.</p>

          <p className="mt-2 ml-4">13.2.5. You are solely responsible for ensuring that you understand the questions in the questionnaires you complete on our Site. You must speak to your regular healthcare provider if you do not understand a question or are unsure how you should answer certain questions or you do not fully understand the advice or information given to you on our Site.</p>

          <p className="mt-2 ml-4">13.2.6. If medicine is prescribed and dispensed to you, you are responsible for checking that the medicine is the correct medicine prescribed by us on our Site and that such medicine is not damaged in any way. If in doubt, you must contact us to seek advice and/or replacement as required. Do not consume any medicine which is not the medicine prescribed or which is damaged on arrival.</p>

          <p className="mt-2 ml-4">13.2.7. You must carefully read all product packaging and labels prior to use. If you purchase medicine in advance of your need to consume these, please ensure you do not consume medicine which is out of date.</p>

          <p className="mt-2 ml-4">13.2.8. Please ensure that no-one other than yourself has access to any medicines that is made available to you through use of this service.</p>

          <p className="mt-4">13.3. Any material which you contribute or upload to our Site must be true, accurate and correct, comply with applicable law and must not be defamatory of any person, obscene, offensive, hateful or inflammatory, promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age, infringe any copyright, database right or trade mark of any other person, be likely to deceive any person, breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence or impersonate any person, or misrepresent your identity or affiliation with any person.</p>

          <p className="mt-4">13.4. You warrant that any such contribution does complies with these standards, and you will be liable to us and indemnify us for any breach of that warranty. This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.</p>

          <p className="mt-4">13.5. You may use our site only for lawful purposes. You may not use our site:</p>

          <p className="mt-2 ml-4">13.5.1. In any way that breaches any applicable local, national or international law or regulation.</p>
          <p className="mt-2 ml-4">13.5.2. In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</p>
          <p className="mt-2 ml-4">13.5.3. For the purpose of harming or attempting to harm minors in any way.</p>
          <p className="mt-2 ml-4">13.5.4. To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).</p>
          <p className="mt-2 ml-4">13.5.5. To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programmes or similar computer code designed to adversely affect the operation of any computer software or hardware.</p>

          <p className="mt-4">13.6. You also agree:</p>
          <p className="mt-2 ml-4">13.6.1. Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of these Terms.</p>
          <p className="mt-2 ml-4">13.6.2. Not to access without authority, interfere with, damage or disrupt:</p>
          <p className="mt-1 ml-8">– any part of our Site;</p>
          <p className="mt-1 ml-8">– any equipment or network on which our Site is stored; or</p>
          <p className="mt-1 ml-8">– any software used in the provision of our Site.</p>

          <p className="mt-4">13.7. Any content you upload to our Site will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but you are required to grant us (and our officers, employees and contractors), our clinicians and partner pharmacies a limited licence to use, store and copy that content and to distribute and make it available to third parties.</p>

          <p className="mt-4">13.8. You are solely responsible for securing and backing up your content.</p>
        </>
      ),
    },
    {
      heading: '14. Viruses, hacking and other offences',
      content: (
        <>
          <p>14.1. We do not guarantee that our Site will be secure or free from bugs or viruses.</p>
          <p className="mt-4">14.2. You are responsible for configuring your information technology, computer programmes and platform to access our Site. You should use your own virus protection software.</p>
          <p className="mt-4">14.3. You must not misuse our Site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful.</p>
          <p className="mt-4">14.4. You must not attempt to gain unauthorised access to our Site, the server on which our Site is stored or any server, computer or database connected to our Site. You must not attack our Site via a denial-of-service attack or a distributed denial-of service attack.</p>
          <p className="mt-4">14.5. By breaching this clause 14, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our Site will cease immediately.</p>
          <p className="mt-4">14.6. We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programmes, data or other proprietary material due to your use of our Site or to your downloading of any material posted on it, or on any Site linked to it.</p>
        </>
      ),
    },
    {
      heading: '15. Linking to our site',
      content: (
        <>
          <p>15.1. You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it in any way whatsoever, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
          <p className="mt-4">15.2. You must not establish a link from any Site that is not owned by you.</p>
          <p className="mt-4">15.3. Our Site must not be framed on any other Site, nor may you create a link to any part of our Site other than the home page. We reserve the right to withdraw linking permission without notice. The website from which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy set out in paragraph 13 above.</p>
          <p className="mt-4">15.4. If you wish to make any use of material on our Site other than that set out above, please address your request to: help@levelsweight.com.</p>
        </>
      ),
    },
    {
      heading: '16. Our trademarks are registered',
      content: (
        <p>"Levels" and our associated logos are registered trademarks of Levels Limited. You are not permitted to use any trademarks or logos displayed on our Site without our approval.</p>
      ),
    },
    {
      heading: '17. Jurisdiction and applicable law',
      content: (
        <>
          <p>If you are a consumer, please note that these terms of use, their subject matter and their formation, are governed by English law. The courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
          <p className="mt-4">If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
        </>
      ),
    },
    {
      heading: '18. Other important terms',
      content: (
        <>
          <p>18.1. These terms of use and any document expressly referred to in them constitute the whole agreement between us and supersede all previous discussions, correspondence, negotiations, previous arrangement, understanding or agreement between us relating to the use of our Site.</p>
          <p className="mt-4">18.2. We may transfer our rights and obligations under these Terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.</p>
          <p className="mt-4">18.3. If any of these Terms are found by any competent authority to be invalid, unlawful or unenforceable to any extent, such term, condition or provision will to that extent be severed from the remaining terms, conditions and provisions which will continue to be valid to the fullest extent permitted by law.</p>
          <p className="mt-4">If you have any concerns about material which appears on our Site or concerns with regards to our services, please contact: help@levelsweight.com.</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <ScrollTrigger />
      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[150px] bg-white" />

      {/* Hero Section */}
      <section className="bg-[#f5f0eb] py-[56px] md:py-[80px]">
        <div className="page-container">
          <h1 className="text-[48px] md:text-[64px] font-light text-[var(--color-text-xDark)] mb-[var(--spacing-2x)]">
            Terms and Conditions
          </h1>
          <p className="text-body-4 text-[var(--color-text-dark)] uppercase tracking-wide">
            DATE OF LAST REVISION: {currentDate}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-container py-[56px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-12x)]">
          {/* Left Sidebar - Table of Contents */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-[180px]">
              <h3 className="text-body-4 font-semibold text-[var(--color-text-xDark)] mb-[var(--spacing-4x)] uppercase tracking-wide">
                Table of contents
              </h3>
              <nav className="flex flex-col gap-[var(--spacing-3x)]">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="text-body-4 text-[var(--color-text-dark)] hover:text-black transition-colors"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-9">
            {/* Content Sections */}
            <div className="flex flex-col gap-[var(--spacing-12x)]">
              {sections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="scroll-mt-[180px]">
                  <h2 className="text-heading-3 text-[var(--color-text-xDark)] mb-[var(--spacing-4x)]">
                    {section.heading}
                  </h2>
                  <div className="prose prose-sm max-w-none text-body-3 text-[var(--color-text-dark)]">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
