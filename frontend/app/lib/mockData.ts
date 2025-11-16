import type { Story } from "@/lib/types";

export const stories: Story[] = [
  {
    id: "story-1",
    title: "Rail safety bill stalls in committee",
    summary:
      "Lobbyists slowed a safety upgrade vote that would add braking tech for freight trains near residential towns.",
    topic: "infrastructure",
    impactTags: ["Workers", "Households"],
    storyType: "legislation",
    confidenceLevel: "medium",
    explanation:
      "Rail companies delayed mandatory braking upgrades, shifting risk to workers and nearby families while boosting short-term profits.",
    visual: {
      lines: [
        { label: "Workers QoL", trend: "down" },
        { label: "Corporate Power", trend: "up" }
      ]
    },
    sourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/0000",
    processNotes: {
      committees: ["House Transportation & Infrastructure", "Senate Commerce"],
      nextAction: "House committee markup pending; leadership hinted at closed rule.",
      fastTrack: true,
      summary: "Major rail carriers lobbying to delay; unions want a floor vote before recess."
    },
    experts: [
      {
        source: "Rail Safety Coalition",
        affiliation: "Union + community alliance",
        stance: "supportive",
        summary: "Mandated ECP brakes would have prevented recent derailments; Congress must push FRA deadlines.",
        impactSnapshot: "Protects rail crews and nearby towns by lowering crash risk.",
        references: ["https://example.org/rail-safety"]
      },
      {
        source: "Logistics Industry Council",
        affiliation: "Freight lobbying group",
        stance: "critical",
        summary: "Warns ECP retrofits cost billions without phased support, potentially raising shipping costs." 
      }
    ],
    scripts: [
      {
        channel: "call",
        content:
          "Hi, I live in your district. Please push the rail safety bill out of committee so modern brakes protect workers and towns."
      },
      {
        channel: "email",
        content:
          "Representative, delaying the rail safety upgrades keeps workers and residents in danger. Please advance the bill this week."
      },
      {
        channel: "sms",
        content: "Rail crews need modern brakes now—urge T&I to hold a vote before recess."
      }
    ],
    reps: [
      { name: "Rep. Jordan", office: "House", phone: "202-555-0112" },
      { name: "Sen. Rivera", office: "Senate", phone: "202-555-0144" }
    ]
  },
  {
    id: "eo-14348-wrongful-detention",
    title: "Protect US nationals from wrongful detention abroad",
    summary:
      "A new executive order directs agencies to strengthen hostage-diplomacy tools and coordinate faster responses when Americans are detained overseas.",
    topic: "foreign policy",
    impactTags: ["Diplomacy", "Human Rights"],
    storyType: "executive_order",
    confidenceLevel: "medium",
    explanation:
      "EO 14348 pushes State, Treasury, and Justice to act in sync on wrongful detentions, expanding sanctions tools while promising better support for affected families.",
    visual: {
      lines: [
        { label: "Household Stability", trend: "up" },
        { label: "State Capacity", trend: "up" },
        { label: "Corporate Leverage", trend: "flat" }
      ]
    },
    sourceUrl: "https://www.federalregister.gov/documents/2025/09/10/2025-17509/strengthening-efforts-to-protect-us-nationals-from-wrongful-detention-abroad",
    processNotes: {
      committees: ["House Foreign Affairs", "Senate Foreign Relations"],
      nextAction: "State must deliver hostage recovery implementation plan within 60 days.",
      fastTrack: false,
      summary: "Congress can demand transparency on sanctions and family liaison staffing."
    },
    experts: [
      {
        source: "Bring Our Families Home Campaign",
        affiliation: "Advocacy coalition",
        stance: "supportive",
        summary: "Centralizes hostage diplomacy and adds sanctions tools, but requires funding for family liaisons.",
        impactSnapshot: "Families gain a single point of contact and faster intel."
      },
      {
        source: "Center for Strategic & International Studies",
        affiliation: "Think tank",
        stance: "mixed",
        summary: "Sanctions threats may deter some regimes but could complicate negotiations without allied buy-in.",
        references: ["https://example.org/csis-analysis"]
      }
    ],
    scripts: [
      {
        channel: "call",
        content:
          "Please urge the Foreign Affairs Committee to hold hearings on EO 14348 so the State Department funds family liaison teams for wrongful detentions."
      },
      {
        channel: "email",
        content:
          "Constituent here—back EO 14348 by supporting sanctions tools that pressure regimes detaining Americans and by funding survivor support staff."
      },
      {
        channel: "sms",
        content:
          "Support EO 14348: families of Americans jailed abroad need a single contact and public reporting on rescue efforts."
      }
    ],
    reps: [
      { name: "Rep. Lee", office: "House", phone: "202-555-0199" },
      { name: "Sen. Patel", office: "Senate", phone: "202-555-0177" }
    ]
  },
  {
    id: "eo-14355-pediatric-ai",
    title: "Unlocking cures for pediatric cancer with AI",
    summary:
      "EO 14355 directs NIH, FDA, and OSTP to share pediatric cancer data securely so AI models can accelerate trial design and rare mutation research.",
    topic: "health",
    impactTags: ["Health", "Research"],
    storyType: "executive_order",
    confidenceLevel: "low",
    explanation:
      "The order builds an AI-ready pediatric cancer commons, pushing agencies to break data silos, fund privacy tech, and launch public dashboards so families see progress.",
    visual: {
      lines: [
        { label: "Patient Outcomes", trend: "up" },
        { label: "Research Speed", trend: "up" },
        { label: "Privacy Risk", trend: "flat" }
      ]
    },
    sourceUrl: "https://www.federalregister.gov/documents/2025/10/07/2025-19495/unlocking-cures-for-pediatric-cancer-with-artificial-intelligence",
    processNotes: {
      committees: ["House Energy & Commerce", "Senate HELP"],
      nextAction: "NIH/FDA owe AI data governance report in 120 days; Congress mulls budget rider.",
      fastTrack: false,
      summary: "Need oversight on privacy + funding for data commons."
    },
    experts: [
      {
        source: "Pediatric Cancer Foundation",
        affiliation: "Nonprofit",
        stance: "supportive",
        summary: "AI-ready data commons could shrink trial timelines if Congress funds secure infrastructure.",
        impactSnapshot: "Families get faster access to breakthrough trials."
      },
      {
        source: "Electronic Frontier Foundation",
        affiliation: "Digital rights org",
        stance: "critical",
        summary: "Warns EO lacks explicit privacy safeguards and independent audits for genomic data sharing.",
        references: ["https://example.org/eff-comment"]
      }
    ],
    scripts: [
      {
        channel: "call",
        content:
          "Please press NIH and FDA to publish the pediatric cancer AI roadmap from EO 14355, and ensure Congress funds secure data-sharing pilots."
      },
      {
        channel: "email",
        content:
          "Families in our district face rare pediatric cancers—support EO 14355 by backing grants for privacy-preserving AI and mandating transparent progress dashboards."
      },
      {
        channel: "sms",
        content:
          "EO 14355 matters: fund the pediatric cancer AI commons and require NIH to report quarterly wins."
      }
    ],
    reps: [
      { name: "Rep. Singh", office: "House", phone: "202-555-0155" },
      { name: "Sen. Alvarez", office: "Senate", phone: "202-555-0183" }
    ]
  }
];
