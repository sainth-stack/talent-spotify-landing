/**
 * Single source of truth for FAQ content — imported by both the FAQ UI
 * (components/Faq.tsx) and the FAQPage JSON-LD (components/StructuredData.tsx),
 * so the visible questions and the structured data can never drift apart.
 *
 * 16 questions in 4 labeled groups. Copy is verbatim — do not paraphrase.
 */
export const faqGroups: { label: string; items: { q: string; a: string }[] }[] = [
  {
    label: "What TalentSpotify is",
    items: [
      {
        q: "What is TalentSpotify?",
        a: "TalentSpotify is a performance and fairness layer for companies that already run an HRMS. It helps teams run better reviews, capture stronger evidence, reduce bias, and improve manager decisions before ratings are shared — without replacing the system you already use.",
      },
      {
        q: "Who is TalentSpotify built for?",
        a: "TalentSpotify is built for companies with 150+ employees — from mid-market to enterprise — that already have an HRMS and want fairer, more consistent performance reviews. It is best for HR leaders, founders, and managers who want better review quality without changing their current system.",
      },
      {
        q: "What is TARA, and how is it related to TalentSpotify?",
        a: "TARA is TalentSpotify's AI voice assistant for performance conversations. It runs review check-ins and goal conversations by voice in English and major Indian languages — including Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, and Odia, with the architecture to support 22 Indian languages — then helps capture evidence, surface bias signals, and keep goals and feedback in one structured workflow.",
      },
      {
        q: "Why not just use our current HRMS?",
        a: "Most HRMS tools store the review process but do not improve the quality of the conversation itself. TalentSpotify adds voice-based review support, fairness scoring, bias detection, and an evidence trail on top of the system you already use — so you keep your HRMS and get better, fairer reviews from it.",
      },
    ],
  },
  {
    label: "TARA, bias & fairness",
    items: [
      {
        q: "How does TARA detect bias in performance reviews?",
        a: "TARA analyzes the conversation and review notes against its bias taxonomy, alongside separate checks for harm-tone language and feedback quality. It produces a fairness signal with a plain-language explanation — what was detected, where, and why — that HR and the manager see before the rating is finalized. Every output is a signal, not a verdict.",
      },
      {
        q: "What types of bias does TARA identify?",
        a: "TARA uses a defined 14-bias taxonomy across three groups. Cognitive biases: recency, primacy, halo, horn, anchoring, confirmation, attribution, and central tendency. Social biases: gender, age, similarity/affinity, and hierarchical/power. Calibration biases: leniency and severity. Each detection comes with a quote, an explanation, and a confidence level — never an automatic decision. Separately, and not scored as bias, TARA also tracks harm-tone language through a dedicated safety lane and feedback-quality signals such as evidence gaps, KPI-vs-feedback mismatches, and vague phrasing.",
      },
      {
        q: "Does TARA detect bias in real time during the conversation?",
        a: "TARA supports the conversation live, but fairness analysis runs on the completed conversation, before the rating is locked — no one is scored mid-conversation. This lets HR and managers review fairness signals without interrupting the discussion itself.",
      },
      {
        q: "What happens when TARA flags a possible bias?",
        a: "TARA highlights the issue and shows what may need attention — such as missing examples, over-reliance on recent events, unsupported ratings, or one-sided feedback. The manager can then add evidence, revise the feedback, or keep the rating with a recorded justification before it is shared or finalized. Everything is captured in an auditable trail.",
      },
      {
        q: "Does TARA make the final performance decision?",
        a: "No. Managers and HR stay fully in control of the final rating. TARA surfaces bias risks, missing evidence, and weak feedback so the decision is better-informed — it is a review-quality and fairness layer, not an automated decision-maker. A human is always in the loop.",
      },
    ],
  },
  {
    label: "Trust, data & access",
    items: [
      {
        q: "Who can see TARA's bias and fairness reports?",
        a: "Access is role-based. HR and other authorized roles can view TARA's reports; all employee data is encrypted in storage. HR controls who can see what.",
      },
      {
        q: "How is employee data handled and secured?",
        a: "Employee data is protected with encryption, role-based access, and audit logs, and is not used to train third-party AI models. HR teams control who can view what, and retention settings can be aligned to your company policy.",
      },
      {
        q: "Is employee consent required before conversations are analyzed?",
        a: "Yes. Employees are informed and asked for consent before any review conversation is recorded or analyzed. TalentSpotify supports consent-aware workflows and configurable privacy controls, with notice aligned to India's DPDP Act.",
      },
      {
        q: "Can TalentSpotify work with our existing HRMS and identity tools?",
        a: "Yes. TalentSpotify is designed to sit alongside your current HRMS rather than replace it. It fits into existing review workflows and works with your internal systems and role-based access controls.",
      },
    ],
  },
  {
    label: "Pilot, proof & pricing",
    items: [
      {
        q: "How fast can we go live, and can we start with a pilot?",
        a: "Most teams start with one department or one review cycle and go live in a few weeks. The best way to begin is a pilot — one review cycle, one business unit, or one manager group — so you can validate adoption, review quality, and ROI before a wider rollout.",
      },
      {
        q: "What outcomes can companies measure with TalentSpotify?",
        a: "Companies can track review completion, OKR alignment, quality of manager feedback, recognition activity, bias signals, HR review effort, and employee participation. During a pilot, these metrics help HR decide whether to scale the rollout.",
      },
      {
        q: "How much does TalentSpotify cost?",
        a: "Pricing depends on company size, product setup, and voice usage. For teams with 150+ employees, pricing is typically structured per employee, with options for standalone TARA, full-platform use, and enterprise deployment. Pilots are paid at a smaller fee — and if you move to a full contract, that pilot fee is credited toward it.",
      },
    ],
  },
];
