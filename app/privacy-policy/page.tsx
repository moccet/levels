import React from 'react';
import ScrollTrigger from './ScrollTrigger';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Levels',
  description: 'Learn how Levels collects, uses, and protects your personal information. Our privacy notice explains your rights and how we handle your data.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      heading: 'What does this Privacy Policy cover?',
      content: (
        <>
          <p>
            This Notice covers any personal information we might collect from you or which we have obtained about you from a third party: (1) when you use our Site; (2) when you register an account with us, (3) when you purchase our products or services, (4) when you interact with our social media channels, (5) when you provide feedback, take part in market research or user testing, or provide customer testimonials, (6) where you provide services to us as a Supplier, or (7) where you have requested to receive information about our products and services.
          </p>
          <p className="mt-4">
            Our Site, products and services are not intended for individuals under the age of 18, and we do not knowingly collect data relating to children.
          </p>
          <p className="mt-4">
            If you do not agree with the contents of this Notice, you should not sign-up for an account, purchase products or services, or otherwise submit information to us.
          </p>
        </>
      ),
    },
    {
      heading: 'Who collects information about you?',
      content: (
        <>
          <p>
            Levels is responsible for the personal information it collects, stores, uses and shares. When we do so we are responsible as a 'controller' of that personal information. When we refer to "Levels", "we", "our", "us" or "the Company" in this Notice we are referring to Levels Limited. For details of how to get in touch, please see the "Contact Us" Section of this Notice.
          </p>
        </>
      ),
    },
    {
      heading: 'Useful Terms',
      content: (
        <>
          <p>In this Privacy Policy:</p>
          <p className="mt-4">
            <strong>"Customer"</strong> means individuals who register an account on the Site who may or may not purchase products or services from Levels.
          </p>
          <p className="mt-2">
            <strong>"Website Visitors"</strong> means individuals who visit our Site. Website Visitors may include Customers.
          </p>
          <p className="mt-2">
            <strong>"Suppliers"</strong> means those external vendors and suppliers that provide products and/or services to Levels.
          </p>
          <p className="mt-2">
            <strong>"Personal information"</strong> or <strong>"personal data"</strong> means any information about an individual from which that person can be directly or indirectly identified. It does not include data where the identity has been removed (i.e. anonymous data).
          </p>
        </>
      ),
    },
    {
      heading: 'What personal information do we collect?',
      content: (
        <>
          <p>We may collect, use, store and transfer different kinds of personal information about you which we have grouped together as follows:</p>
          <p className="mt-4">
            <strong>Identity Data</strong> such as your first name, last name, username, password, date of birth, user or device identifiers, job title and company.
          </p>
          <p className="mt-2">
            <strong>Contact Data</strong> such as your email address, home address, business address, telephone number, and professional and/or social network contact details.
          </p>
          <p className="mt-2">
            <strong>Financial Data</strong> which may include (i) credit card and/ or billing information so that we can take payment from you and verify your location and address details, (ii) your bank details so that we can pay for the services you provide to us (if this is part of the contractual arrangements between us).
          </p>
          <p className="mt-2">
            <strong>Transaction Data</strong> such as information about payments and details of purchases you have made. In certain circumstances, Transaction Data may include Health Data.
          </p>
          <p className="mt-2">
            <strong>Technical Data</strong> such as your internet protocol (IP) address, browser type and version, time zone setting and location, referral sources, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access the Site.
          </p>
          <p className="mt-2">
            <strong>Usage Data</strong> which may include information about how you use our Site (for example, information on the pages you have visited, the length of your visit, and actions taken), or social media channels.
          </p>
          <p className="mt-2">
            <strong>Audio/Visual Data</strong> including your image and/or voice.
          </p>
          <p className="mt-2">
            <strong>Assessment Data</strong> which may include information provided in response to questionnaires on the Site, and/or consultations with clinicians, to assess your suitability for a particular product or service. In certain circumstances, Assessment Data may include Health Data.
          </p>
          <p className="mt-2">
            <strong>Feedback Data</strong> which may include any feedback you provide to Levels when you take part in user testing or market research, or when you agree to provide customer testimonials. Depending on the feedback you provide, Feedback Data may include Health Data.
          </p>
          <p className="mt-2">
            <strong>Marketing and Communications Data</strong> including your preferences in receiving marketing or other communications from us.
          </p>
          <p className="mt-2">
            <strong>Health Data</strong> includes information about your current health or medical history, for example, details of any health conditions or consultation notes.
          </p>
        </>
      ),
    },
    {
      heading: 'How will we use your personal information?',
      content: (
        <>
          <h4 className="font-semibold mb-2">Customers</h4>
          <p>
            When you create a user account on the Site, we will collect your Identity Data and Contact Data. To manage and administer your account we will process your Identity Data, Contact Data, Technical Data, Usage Data, Transaction Data, Assessment Data, Audio/Visual Data and Marketing and Communications Data. We need certain information from you, including your Assessment Data, to assess your suitability for treatments. Depending on the product or service you are interested in, we may also need to process your Audio/Visual and/or Health Data for this purpose. When you purchase products or services, we will use your Identity Data, Contact Data, Transaction Data and Financial Data to process and fulfil the transaction. Where necessary, we will also process your Audio/Visual and/or Health Data to assess your suitability and prescribe prescription medication.
          </p>
          <p className="mt-4">
            Certain of our products and services either require you, or allow you, to consult with a medical professional to ascertain your needs, provide advice, and/or recommend relevant products or services. In order to facilitate and conduct these consultations we will process your Identity Data, Contact Data, Audio/Visual Data, and Assessment Data.
          </p>
          <p className="mt-4">
            We may process some of your data in an anonymised form for clinical research purposes, to improve our services and treatments, and to contribute to a greater public understanding of how to make health treatment more engaging and effective. We will not provide third party researchers with data that identifies you personally, unless you have provided explicit, informed consent to this or there is legal justification to provide this information.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Website Visitors</h4>
          <p>
            When you visit our Site, we automatically collect Technical Data and Usage Data about you through our and our technology partners' use of cookies and similar technologies to deliver relevant website content to you, to measure and understand the effectiveness of the content we serve you, to improve our Site content, marketing and user experience, and to administer and protect the Site.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Social Media Users</h4>
          <p>
            We use social media channels (including Facebook, Twitter, Instagram, and TikTok) to advertise Levels's products and services. If you follow or otherwise engage with our social media channels, we will collect Usage Data and Technical Data to analyse how users interact with those channels.
          </p>
        </>
      ),
    },
    {
      heading: 'What is our legal basis for processing your personal information?',
      content: (
        <>
          <h4 className="font-semibold mb-2">If you are a Customer:</h4>
          <p>
            Where we process your personal information to create, administer and manage your user account, to assess your suitability for treatments and to process and fulfil transactions, this processing is necessary to perform the contract we have entered into with you.
          </p>
          <p className="mt-4">
            In the event that we process your Health Data for the above purposes, this processing is necessary for health care purposes (medical diagnosis, the provision of health care or treatment, and the management of health care systems or services) and is carried out under the responsibility of a health professional.
          </p>
          <p className="mt-4">
            Please be aware that where we are processing your health data (including photos) on the basis of necessity for healthcare purposes, you will not necessarily have the right to erase that data. The integrity of health information is an important element of Clinical Governance and necessary to maintain a safe prescribing service with auditable records of care.
          </p>
          <p className="mt-4">
            Where we process your personal information to obtain your feedback for market research, user testing, or customer testimonials, or to send you information about our products and services, we do so on the basis of your consent.
          </p>

          <h4 className="font-semibold mt-6 mb-2">If you are a Website Visitor:</h4>
          <p>
            Where we process your personal information to deliver relevant website content to you, to measure and understand the effectiveness of the content we serve you, to improve our Site content, marketing and user experience, to administer and protect the Site, and to receive, review and respond to messages sent to the contact address on our Site, we consider this is necessary for our legitimate interests and that your interests and fundamental rights do not override those interests.
          </p>
        </>
      ),
    },
    {
      heading: 'How do we collect personal information about you?',
      content: (
        <>
          <p>We may collect information from the following sources:</p>
          <p className="mt-4">
            <strong>Directly from you:</strong> This is the information you (or an individual with authority to act on your behalf) has provided to us for the purposes set out in this Notice. It includes any information you provide to us when consulting with one of our clinicians, and when you interact with us by phone, email, web form or otherwise.
          </p>
          <p className="mt-2">
            <strong>Third-party sources:</strong> Where you are a Supplier, this will include information about you or your colleagues that is available through publicly available sources, such as professional networking sites (including LinkedIn) and general market research.
          </p>
          <p className="mt-2">
            <strong>Information we collect automatically:</strong> When you visit our Site, we collect certain Technical and Usage Data automatically from your device.
          </p>
        </>
      ),
    },
    {
      heading: 'Who do we share your personal information with?',
      content: (
        <>
          <p>We may share and disclose your personal information with the following categories of third parties for the purposes described in this Notice:</p>
          <p className="mt-4">
            <strong>Partner Clinicians.</strong> When you register a user account and purchase a product or service, your contract is with Levels. However, in order to provide our services to you, Levels may provide your personal information to our Partner Clinicians who will act as independent data controllers in respect of that information. These clinicians provide services to Levels including holding patient consultations, assessing the clinical appropriateness of treatment, and prescribing medication. Our Partner clinicians are all registered in the United Kingdom with the General Pharmaceutical Council, hold accredited pharmacist independent prescriber qualifications, and are trained in providing remote consultations and issuing prescription medicine online.
          </p>
          <p className="mt-4">
            <strong>Service providers.</strong> We use a number of Suppliers who perform functions on our behalf and/or help us in providing the products and services to you, such as cloud-based software providers, online storage providers, web hosting providers, email service providers, and web analytics providers. Our service providers are required to keep your personal information strictly confidential and are not allowed to use it for any other purpose than to carry out the services they are performing for us.
          </p>
          <p className="mt-4">
            <strong>Professional advisers.</strong> We may disclose personal information to our professional advisers, such as lawyers, auditors, accountants, and insurers, if necessary, as part of the professional services they are performing.
          </p>
          <p className="mt-4">
            <strong>Business transfers.</strong> We may share personal information with third parties to whom we choose to sell, transfer or merge part of our business or our assets.
          </p>
          <p className="mt-4">
            <strong>Compliance with laws.</strong> We may very occasionally be required to disclose some personal information as required to comply with the law.
          </p>
        </>
      ),
    },
    {
      heading: 'Security and international data transfers',
      content: (
        <>
          <h4 className="font-semibold mb-2">Security</h4>
          <p>
            We work tirelessly to safeguard the security and integrity of our Site and the systems we use to process your personal data. We have implemented widely accepted standards of technology and operational security (having regard to the type and amount of personal data processed) to prevent against personal information being accidentally lost or used or accessed in an unauthorised or unlawful way. However, it is generally understood that no method of electronic storage or transmission online is 100% secure. As a result, whilst we have implemented appropriate technical and organisational measures, we cannot guarantee the absolute security of your personal data, or accept responsibility for any unauthorised access or loss of personal data that is beyond our control.
          </p>
          <p className="mt-4">
            We limit access to your personal information to those who have a genuine business need to know it. Those processing your information will do so only in an authorised manner and are subject to a duty of confidentiality.
          </p>

          <h4 className="font-semibold mt-6 mb-2">International data transfers</h4>
          <p>
            Where personal information is shared and disclosed as set out above, these parties may be established outside the United Kingdom. Whenever we transfer your personal information outside the United Kingdom, we ensure that a similar degree of protection is afforded to it by ensuring appropriate safeguards are implemented.
          </p>
        </>
      ),
    },
    {
      heading: 'Our use of cookies and similar technologies',
      content: (
        <>
          <p>
            We may use cookies and other information gathering technologies to learn more about how you interact with our Website. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our Site may become inaccessible or not function properly.
          </p>
        </>
      ),
    },
    {
      heading: 'Third party links and services',
      content: (
        <>
          <p>
            This Website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.
          </p>
        </>
      ),
    },
    {
      heading: 'How long do we keep your personal information for?',
      content: (
        <>
          <p>
            We will only retain your personal information for as long as necessary to fulfil the purposes we collected it for, including for purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          <p className="mt-4">
            To determine the appropriate retention period for personal information, we consider the amount, nature and sensitivity of the personal information, the potential risk of harm from unauthorised use or disclosure of your personal information, the purposes for which we process your personal information, and whether we can achieve those purposes through other means, and the applicable legal requirements.
          </p>
        </>
      ),
    },
    {
      heading: 'Marketing',
      content: (
        <>
          <p>
            If you receive marketing communications from us, you can ask us to stop sending you marketing messages at any time by following the unsubscribe links in any marketing message or by contacting us at levels@thewellnesslondon.com.
          </p>
          <p className="mt-4">
            Please note that opting out of marketing communications does not opt you out of receiving important service-related communications.
          </p>
        </>
      ),
    },
    {
      heading: 'Your rights',
      content: (
        <>
          <p>Subject to any exemptions provided by law, you may have the right to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Request access to your personal information (commonly known as a "data subject access request") and to certain other supplementary information that this Notice is already designed to address.</li>
            <li>Request correction of the personal information we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected.</li>
            <li>Request erasure of your personal information. This enables you to ask us to delete or remove personal information in certain circumstances.</li>
            <li>Receive the personal information concerning you which you have provided to us in a structured, commonly used, and machine-readable format and have the right to transmit those data to a third party in certain situations.</li>
            <li>Object to processing of your personal information at any time for direct marketing purposes.</li>
            <li>Object to decisions being taken by automated means which produce legal effects concerning you or significantly affect you.</li>
            <li>Request the restriction of processing of your personal information.</li>
            <li>Withdraw your consent to our processing of your personal information, where we have collected and processed it with your consent.</li>
          </ul>
          <p className="mt-4">
            For more information, please refer to the appropriate data protection legislation or consult the Information Commissioner's Office for guidance. If you would like to exercise any of these rights, please contact us at levels@thewellnesslondon.com and let us have enough information to identify you.
          </p>
          <p className="mt-4">
            You will not have to pay a fee to access your personal information (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.
          </p>
          <p className="mt-4">
            We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
          </p>
        </>
      ),
    },
    {
      heading: 'How to contact us',
      content: (
        <>
          <p>
            Please address requests and questions about this Notice to levels@thewellnesslondon.com.
          </p>
        </>
      ),
    },
    {
      heading: 'How to Complain',
      content: (
        <>
          <p>
            We hope that we can resolve any query or concern that you raise about our use of your personal information.
          </p>
          <p className="mt-4">
            You also have the right to make a complaint to your supervisory authority. In the UK, this is the Information Commissioner's Office (www.ico.org.uk).
          </p>
        </>
      ),
    },
    {
      heading: 'Changes to this Notice',
      content: (
        <>
          <p>
            This version was last updated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}. To ensure that you are always aware of how we use your personal information we will update this Notice from time to time to reflect any changes to our use of your personal information and as required to comply with changes in applicable law or regulatory requirements. However, we encourage you to review this Notice periodically to be informed of how we use your personal information.
          </p>
          <p className="mt-4">
            It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes during your relationship with us.
          </p>
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
            Privacy policy
          </h1>
          <p className="text-body-3 text-[var(--color-text-dark)]">
            Levels Privacy Notice
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
                Table of Contents
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
            {/* Introduction */}
            <div className="mb-[var(--spacing-12x)] prose prose-sm max-w-none">
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Levels is on a mission to become the go-to platform for online health. Through this website (our "Site") we provide people with easy access to advice, medical support, and treatment choices they need to help them make proactive decisions about their wellbeing.
              </p>
              <p className="text-body-3 text-[var(--color-text-dark)] mt-4">
                We understand that lengthy legal documents are no fun. However, we ask that you read this Privacy Notice ("Notice") carefully as it contains important information including who we are, how and why we collect, store, use and share personal information, your rights in relation to your personal information, and how to contact us or the supervisory authority in the event you have a complaint.
              </p>
              <p className="text-body-3 text-[var(--color-text-dark)] mt-4">
                We have designed this policy to be as user-friendly as possible. Click on the drop-down headings below to access more information on any topic.
              </p>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-[var(--spacing-12x)]">
              {sections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="scroll-mt-[180px]">
                  <h2 className="text-heading-3 text-[var(--color-text-xDark)] mb-[var(--spacing-4x)]">
                    {section.heading}
                  </h2>
                  <div className="prose prose-sm max-w-none">
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
