/* ==========================================================================
   data.js — ALL YOUR CONTENT LIVES HERE.
   Filled in from your CV and your UAP department profile. Search for "TODO"
   to find the few things still outstanding (GitHub + LinkedIn URLs, photo, CV
   file, abstracts).
   ========================================================================== */

const SITE = {

  /* ---------------------------------------------------------------------
     1. IDENTITY
     --------------------------------------------------------------------- */
  name: "Md Mubtasim Fuad",
  shortName: "M. M. Fuad",           // second spelling to bold in author lists
  // Keep the university out of this line — the affiliation row below prints it.
  role: "Lecturer, Computer Science and Engineering",
  location: "Dhaka, Bangladesh",
  affiliation: "University of Asia Pacific",
  pronouns: "",   // e.g. "he/him" — shown under your name. Leave "" to hide it.
  // Stored in two halves on purpose: site.js joins them at run time, so the
  // full address never appears in the page source or in this file, which is
  // what actually stops address harvesters.
  emailUser: "mft.turzo",
  emailDomain: "gmail.com",
  avatar: "assets/img/profile.png",  // TODO: replace this file with your own square photo
  cv: "files/cv.pdf",                // TODO: save MdMubtasimFuad_CV.pdf as files/cv.pdf
  metaDescription:
    "Md Mubtasim Fuad — Lecturer in Computer Science and Engineering at the " +
    "University of Asia Pacific, Dhaka. Research on generative AI, computer " +
    "vision, and multimodal learning for low-resource languages.",
  lastUpdated: "August 2026",

  /* ---------------------------------------------------------------------
     2. NAVIGATION
     --------------------------------------------------------------------- */
  nav: [
    { label: "About",        href: "index.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Experience",   href: "portfolio.html" },
    { label: "Teaching",     href: "teaching.html" },
    { label: "CV",           href: "files/cv.pdf", external: true }
  ],

  /* ---------------------------------------------------------------------
     3. SOCIAL LINKS
     TODO: your CV showed these as icons, so the URLs did not come through.
           Paste the real ones over the three marked below.
     --------------------------------------------------------------------- */
  links: [
    //{ type: "email" },                                  // your personal address, from emailUser/emailDomain above
    { type: "email", user: "mubtasim", domain: "uap-bd.edu" },   // your UAP address
    // Delete whichever you do not want listed. Many academics lead with the
    // institutional address; it is the one on your department profile.
    { label: "Scholar",  icon: "scholar",  url: "https://scholar.google.com/citations?user=4kgKVSwAAAAJ&hl=en" },
    { label: "GitHub",   icon: "github",   url: "https://github.com/MubtasimFuad10" },                    // TODO
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mubtasimfuad10/" }              // TODO
    // Your phone number is on your CV but is deliberately not here — a public
    // page invites spam calls. Add it back if you want it:
    // { label: "Phone", icon: "globe", url: "tel:+8801987654321" }
  ],

  /* ---------------------------------------------------------------------
     4. HOME PAGE
     --------------------------------------------------------------------- */
  home: {
    eyebrow: "Programmer · Educator · Researcher",
    //headline: "Sentences Sentences Sentences",  // TODO: replace with your own headline

    /* -------------------------------------------------------------------
       The home page is built from this list. Each entry becomes one titled
       section. Every field is optional:
         title    heading for the section
         body     paragraph(s) of prose — basic HTML allowed, [[email]] works
         bullets  list items, each { lead: "Bold term", text: "the rest" }
         outro    paragraph(s) printed after the bullets
         block    pulls in a structured block built from your other data:
                  "education" | "awards" | "publications" | "news"
                  | "projects" | "service" | "skills"
       Reorder, delete or add sections freely.
       ------------------------------------------------------------------- */
    sections: [
      {
        title: "About Me",
        body: [
          `Welcome! I am Md Mubtasim Fuad, a <a href="https://cse.uap-bd.edu/people/faculty/mm/">Lecturer</a> in the Department of Computer Science and
           Engineering at the <a href="https://www.uap-bd.edu/">University of Asia
           Pacific</a> in Dhaka, Bangladesh. My research interests focus on developing generative 
           and multimodal AI systems for understanding and generating diverse forms of data. 
           I am also exploring other areas of Artificial Intelligence and Machine Learning, 
           with the goal of developing effective and practical AI solutions.`
        ]
      },
      {
        title: "Research Interests",
        // Quick-scan tags, shown above the detailed points below.
        chips: [
        "Artificial Intelligence",  "Generative AI","Computer Vision",
        "Multimodal AI","Vision-language models", "Natural language processing", "Large language models",
        , "Low-resource languages"
        ],
        body: [
          `I am interested in how generative models behave beyond the settings they were designed for — across different scripts, smaller datasets, and noisier images. The threads I keep returning to:`
        ],
        bullets: [
          { lead: "Generative AI",
            text: `Developing generative models for creating and transforming diverse forms of data, with particular interest in diffusion models, controllable generation, and synthetic data generation.` },
          { lead: "Low-resource language technology",
            text: `Building the corpora that Bangla and other Indic languages need,
                   on the view that methods travel no further than the data behind
                   them.` },
          { lead: "Multimodal AI and vision-language models",
            text: `Developing multimodal systems that connect visual and textual information, with a focus on multimodal representation learning, vision-language understanding, and generative multimodal models.` },
          { lead: "Computer Vision",
            text: `Developing deep learning approaches for visual understanding, image generation, recognition, and analysis, with interests spanning representation learning, image synthesis, classification, and real-world vision applications.` },
          { lead: "Natural language processing",
            text: `Developing language modeling approaches and computational resources for underrepresented languages, with emphasis on data-centric NLP and low-resource language technologies.` }
        ]
      },
      {
        title: "Academic Background",
        body: [
          `I completed my B.Sc. in Computer Science and Engineering at the University of Asia Pacific in December 2023, graduating first in my class with a CGPA of 3.95 on a 4.00 scale. I received the Vice Chancellor’s Award for seven consecutive semesters in recognition of achieving the highest GPA in each semester. I was subsequently awarded the Vice Chancellor’s Gold Medal at the university’s 11th Convocation, held in July 2025, in recognition of achieving the highest CGPA among my graduating cohort.`,
          `My undergraduate thesis, <em>Okkhor-Diffusion</em>, applied denoising
           diffusion probabilistic models to the class-guided generation of Bangla
           isolated handwritten characters. It was published in <em>IEEE Access</em>
           and set the direction I have followed since.`
        ],
        block: "education"
      },
      {
        title: "Research Contributions",
        body: [
          `I have five peer-reviewed publications — three journal articles and two
           conference papers — in <em>IEEE Access</em>, <em>Data in Brief</em>,
           ICCIT and QPAIN. The work falls into a few groups:`
        ],
        bullets: [
          { lead: "Generative models for Bangla script",
            text: `<em>Okkhor-Diffusion</em>, a DDPM that generates isolated Bangla
                   handwritten characters under class guidance, published in
                   <em>IEEE Access</em>.` },
          { lead: "Datasets for low-resource languages",
            text: `<em>IndicDialogue</em>, a subtitle corpus spanning ten Indic
                   languages, built for language modelling research.` },
          { lead: "Datasets for agricultural vision",
            text: `<em>SpiceSpectrum</em>, a class-balanced image dataset of
                   commercially valuable spice cultivars.` },
          { lead: "Explainable medical imaging",
            text: `A dual-head deep learning framework that detects skin disease and
                   classifies cancer, with explainable AI support (ICCIT 2025).` },
          { lead: "Plant disease diagnosis",
            text: `A hybrid CNN-Transformer model that classifies plant disease and
                   recommends treatment from a second head (QPAIN 2026).` }
        ],
        block: "publications"
      },
      {
        title: "Beyond Research",
        body: [
          `Outside my academic and professional work, I enjoy mentoring others and sharing knowledge. I find it rewarding to help students and peers understand new concepts, overcome challenges, and develop confidence in their technical skills. I also enjoy discussing ideas, learning from others, and exchanging perspectives, as I believe that knowledge grows through collaboration and open discussion.`,
          `In my free time, I enjoy reading books, traveling, exploring new places, and experiencing different cultures. I like discovering unfamiliar places, meeting new people, trying new activities, and learning about different ways of life. Reading gives me an opportunity to explore new ideas and perspectives, while traveling allows me to experience the world from different viewpoints. I also enjoy exploring new technologies and working on personal technical projects whenever I have the opportunity.`
        ]
      },
      {
        title: "Honours and Awards",
        block: "awards"
      },

      /* Uncomment this section if you are applying for doctoral positions.
         I have left it off because your CV does not say so, and a claim about
         your plans should be yours to make.

      {
        title: "Looking Forward",
        body: [
          `I am applying for PhD positions beginning in Fall 2027, and I am looking
           for groups working on generative modelling, multimodal learning, or
           language technology for underrepresented languages. I want to keep
           working on systems that stay reliable outside the datasets and languages
           they were built around.`
        ]
      },
      */

      {
        title: "Recent",
        block: "news"
      },
      {
        title: "Contact",
        body: [
          `The quickest way to reach me is by email at [[email]]. You are also
           welcome to connect through any of the links in the sidebar. I am always
           glad to talk about research collaborations, MS/PhD opportunities, or just to discuss ideas and share knowledge.`
        ]
      }
    ],

    news: [
      { date: "2026", text: `Paper on hybrid CNN-Transformer plant disease detection accepted at <em>IEEE QPAIN 2026</em>.` },
      { date: "Sep 2025", text: `Judged the national round of the IRO Bangladesh Open 2025 in the Creative and Physical Computing categories.` },
      { date: "2025", text: `Paper on skin disease detection with explainable AI presented at <em>ICCIT 2025</em>.` },
      { date: "2025", text: `<em>SpiceSpectrum</em> dataset published in <em>Data in Brief</em>.` },
      { date: "Oct 2024", text: `Became selector and coach for the UAP Programming Contest Club.` },
      { date: "Jul 2024", text: `Joined the University of Asia Pacific as a Lecturer.` },
      { date: "2024", text: `<em>Okkhor-Diffusion</em> published in <em>IEEE Access</em>.` }
    ],

    featuredCount: 3
  },

  /* ---------------------------------------------------------------------
     5. PUBLICATIONS
     3 journal papers, 2 conference papers.
     Order here controls the "Selected publications" block on the home page;
     the publications page always sorts by year.
     --------------------------------------------------------------------- */
  publications: [
    {
      id: "okkhor-diffusion",
      key: "fuad2024okkhor",
      title: "Okkhor-Diffusion: Class Guided Generation of Bangla Isolated Handwritten Characters Using Denoising Diffusion Probabilistic Model (DDPM)",
      venue: "IEEE Access, vol. 12, pp. 37521–37539",
      year: 2024,
      type: "Journal",
      authors: ["Md Mubtasim Fuad", "A. Faiyaz", "N. M. K. Arnob", "M. F. Mridha", "A. K. Saha", "Z. Aung"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/ACCESS.2024.3370674" }
      ],
      // TODO: paste your abstract here and the title will link to a detail page
      // with the abstract, a teaser figure and the BibTeX below.
      bibtex: `@article{fuad2024okkhor,
  title   = {Okkhor-Diffusion: Class Guided Generation of Bangla Isolated
             Handwritten Characters Using Denoising Diffusion Probabilistic
             Model (DDPM)},
  author  = {Fuad, Md Mubtasim and Faiyaz, A. and Arnob, N. M. K. and
             Mridha, M. F. and Saha, A. K. and Aung, Z.},
  journal = {IEEE Access},
  volume  = {12},
  pages   = {37521--37539},
  year    = {2024},
  doi     = {10.1109/ACCESS.2024.3370674}
}`
    },
    {
      id: "indicdialogue",
      key: "arnob2024indicdialogue",
      title: "IndicDialogue: A dataset of subtitles in 10 Indic languages for Indic language modeling",
      venue: "Data in Brief, vol. 55, art. 110690",
      year: 2024,
      type: "Journal",
      authors: ["Noor Mairukh Khan Arnob", "A. Faiyaz", "Md Mubtasim Fuad", "Shah Murtaza Rashid Al Masud", "Baivab Das", "M. F. Mridha"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.dib.2024.110690" }
      ],
      bibtex: `@article{arnob2024indicdialogue,
  title   = {IndicDialogue: A dataset of subtitles in 10 Indic languages for
             Indic language modeling},
  author  = {Arnob, Noor Mairukh Khan and Faiyaz, A. and Fuad, Md Mubtasim and
             Al Masud, Shah Murtaza Rashid and Das, Baivab and Mridha, M. F.},
  journal = {Data in Brief},
  volume  = {55},
  pages   = {110690},
  year    = {2024},
  doi     = {10.1016/j.dib.2024.110690}
}`
    },
    {
      id: "spicespectrum",
      key: "ramim2025spicespectrum",
      title: "SpiceSpectrum: Class-balanced Dataset of Commercially Valuable Spice Cultivars",
      venue: "Data in Brief, art. 112097",
      year: 2025,
      type: "Journal",
      authors: ["Md. Noushad Jahan Ramim", "Samira Islam", "Muhtasin Towkir", "Md Mubtasim Fuad", "Noor Mairukh Khan Arnob"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.dib.2025.112097" }
      ],
      bibtex: `@article{ramim2025spicespectrum,
  title   = {SpiceSpectrum: Class-balanced Dataset of Commercially Valuable
             Spice Cultivars},
  author  = {Ramim, Md. Noushad Jahan and Islam, Samira and Towkir, Muhtasin and
             Fuad, Md Mubtasim and Arnob, Noor Mairukh Khan},
  journal = {Data in Brief},
  pages   = {112097},
  year    = {2025},
  doi     = {10.1016/j.dib.2025.112097}
}`
    },
    {
      id: "plant-disease-qpain",
      key: "roy2026hybrid",
      title: "Hybrid CNN-Transformer Based Plant Disease Detection with Dual-Head Classification and Treatment",
      venue: "IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence Networking (QPAIN), pp. 1–6",
      year: 2026,
      type: "Conference",
      authors: ["S. Roy", "H. Proma", "N. Nafsi", "S. Akhtar", "Md Mubtasim Fuad"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/11546311" }
      ],
      bibtex: `@inproceedings{roy2026hybrid,
  title     = {Hybrid CNN-Transformer Based Plant Disease Detection with
               Dual-Head Classification and Treatment},
  author    = {Roy, S. and Proma, H. and Nafsi, N. and Akhtar, S. and
               Fuad, Md Mubtasim},
  booktitle = {2026 IEEE 2nd International Conference on Quantum Photonics,
               Artificial Intelligence Networking (QPAIN)},
  pages     = {1--6},
  year      = {2026}
}`
    },
    {
      id: "skin-disease-iccit",
      key: "hossain2025dualhead",
      title: "Dual-Head Deep Learning Framework for Automated Skin Disease Detection and Cancer Classification with Explainable AI Support",
      venue: "28th International Conference on Computer and Information Technology (ICCIT), pp. 1094–1099",
      year: 2025,
      type: "Conference",
      authors: ["M. Hossain", "M. Salehin", "M. Sami", "Md Mubtasim Fuad", "T. Helaly"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/11491710" }
      ],
      bibtex: `@inproceedings{hossain2025dualhead,
  title     = {Dual-Head Deep Learning Framework for Automated Skin Disease
               Detection and Cancer Classification with Explainable AI Support},
  author    = {Hossain, M. and Salehin, M. and Sami, M. and Fuad, Md Mubtasim and
               Helaly, T.},
  booktitle = {2025 28th International Conference on Computer and Information
               Technology (ICCIT)},
  pages     = {1094--1099},
  year      = {2025}
}`
    }
  ],

  /* ---------------------------------------------------------------------
     6. EDUCATION  (shown on the home page)
     --------------------------------------------------------------------- */
  education: [
    
    {
      degree: "B.Sc. in Computer Science and Engineering",
      org: "University of Asia Pacific",
      place: "Dhaka, Bangladesh",
      start: "2019-09",
      end: "2023-12",
      summary: "CGPA 3.95 / 4.00 — 1st Class, 1st Position",
      details: [
        `Thesis: <em>Okkhor-Diffusion: Synthetic class specific Bangla Handwritten
         Character Generation using Denoising Diffusion Probabilistic Models
         (DDPM)</em>.`
      ]
    }
  ],

  /* ---------------------------------------------------------------------
     7. HONOURS AND AWARDS  (shown on the home page)
     --------------------------------------------------------------------- */
  awards: [
    { when: "26 Jul 2025", text: "Vice Chancellor's Gold Medalist, 11th Convocation", org: "University of Asia Pacific" },
    { when: "2020–2023", text: "Vice Chancellor's Award, 7 consecutive semesters", org: "University of Asia Pacific" },
    { when: "2022", text: "2nd Runner-Up, Intra-University Programming Contest", org: "University of Asia Pacific" },
    { when: "2022", text: "Champion, 5th Inter-Department Software & Hardware Carnival", org: "University of Asia Pacific" },
    { when: "2022", text: "Champion, CSE ROBO EXPO 1.0 (line-following robot)", org: "University of Asia Pacific" },
    { when: "2022", text: "2nd Runner-Up, Intra-Department CTF Contest", org: "University of Asia Pacific" },
    { when: "", text: "Certificate of Appreciation, Robotronics 2.0 Inter-University Tech Fest", org: "RUET, Rajshahi" }
  ],

  /* ---------------------------------------------------------------------
     8. EXPERIENCE
     --------------------------------------------------------------------- */
  experience: [
    {
      id: "lecturer-uap",
      title: "Lecturer",
      org: "Department of Computer Science and Engineering, University of Asia Pacific",
      place: "Dhaka, Bangladesh",
      start: "2024-07",
      end: "Present",
      summary:
        "Teaching undergraduate courses in computer science and engineering, and " +
        "supervising student research projects.",
      details: [
        "Conducted courses across programming, software engineering, computer mathematics and microprocessors, NLP",
        "Supervised undergraduate research projects in generative AI, computer vision, NLP and multimodal learning"
      ],
      links: [
        { label: "Department profile", url: "https://cse.uap-bd.edu/people/faculty/mm/" }
      ]
    },
    {
      id: "ta-uap",
      title: "Teaching Assistant",
      org: "Department of Computer Science and Engineering, University of Asia Pacific",
      place: "Dhaka, Bangladesh",
      start: "2024-01",
      end: "2024-06",
      summary: "Supported course delivery and student assessment in the department."
    }
  ],

  /* ---------------------------------------------------------------------
     9. PROJECTS  (shown on the Experience page)
     --------------------------------------------------------------------- */
  projects: [
    {
      name: "ArtNet",
      when: "Mar 2023",
      summary:
        "A collaborative image stylization tool that blends artistic styles with " +
        "an input image and generates images from text prompts through the Stable " +
        "Diffusion API.",
      tech: ["Python", "Django", "Stable Diffusion API", "HTML", "CSS"]
      // links: [{ label: "Code", url: "https://github.com/..." }]   // TODO if public
    },
    {
      name: "Bakshe-Cholo",
      when: "Oct 2022",
      summary:
        "A Django-based transit site for Dhaka buses with route selection, online " +
        "tracking and real-time updates. Contributed to the development team.",
      tech: ["Python", "Django"]
    }
  ],

  /* ---------------------------------------------------------------------
     10. SERVICE AND LEADERSHIP  (shown on the Experience page)
     --------------------------------------------------------------------- */
  service: [
    {
      title: "Peer Reviewer",
      org: "IEEE Access",
      when: "",
      summary: `Reviewed <em>Deep Learning in Virtual Try-On: A Comprehensive Survey</em>.`,
      details: [
        "Provided the authors with recommendations for improving the manuscript.",
        "Corrected citation, spelling and presentation errors."
      ],
      links: [
        { label: "Link", url: "https://www.webofscience.com/wos/author/record/JZT-3573-2024" }
      ]
    },
    {
      title: "Judge",
      org: "IRO Bangladesh Open 2025",
      when: "Sep 2025",
      summary:
        "Judged the national round in the Creative Category (Junior Group) and the " +
        "Physical Computing Category.",
          links: [
        { label: "Link", url: "https://www.facebook.com/photo/?fbid=1195450119270725&set=pcb.1195450235937380" }
      ]
    },
    {
      title: "Selector and Coach",
      org: "Programming Contest Club, University of Asia Pacific",
      when: "Oct 2024 – Present",
      summary: "Mentoring younger programmers in competitive programming.",
      details: ["Responsible for the monthly programmer selection."],
      links: [
        { label: "Link", url: "https://pcc.uap-bd.edu/" }
      ]
    },
    {
      title: "Technical Support Volunteer",
      org: "45th Annual World Finals of the International Collegiate Programming Contest (ICPC)",
      when: "Nov 2022",
      details: [
        "Assembled and set up contest machines for the World Finals.",
        "Supported event logistics and suppliers."
      ],
      links: [
         { label: "Certificate", url: "files/certificates/ICPC.pdf" }
      ]
    },
    {
      title: "President, Vice-President, Treasurer",
      org: "Robotics Club, CSE — University of Asia Pacific",
      when: "Jul 2022 – Dec 2023",
      details: [
        "President (Spring 2023): planned major events with the convener and led the team.",
        "Vice-President (Fall 2022): organised events and assigned tasks to members.",
        "Treasurer (Spring 2022): built budgets for club events and workshops."
      ],
      links: [
        { label: "Link", url: "https://www.facebook.com/roboticsUAP.cse" }
      ]
    }
  ],

  /* ---------------------------------------------------------------------
     11. SKILLS  (shown on the Experience page)
     --------------------------------------------------------------------- */
  skills: [
    { label: "Languages",   items: ["Python", "C/C++", "Java"] },
    { label: "ML / DL",     items: ["PyTorch", "Scikit-learn", "Hugging Face Transformers"] },
    { label: "Data",        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { label: "Web",         items: ["Django", "HTML5", "CSS3", "JavaScript"] },
    { label: "Hardware",    items: ["Raspberry Pi", "Arduino"] },
    { label: "Tooling",     items: ["Git", "Linux", "CUDA", "LaTeX"] },
    { label: "Contests",    items: ["Codeforces", "LeetCode", "HackerRank", "HackerEarth", "300+ solved"] }
  ],

  /* ---------------------------------------------------------------------
     12. TEACHING
     Course list taken from your department profile page. Add a `summary` line
     to any entry to describe what the course covers, and a `term` per course
     if you want exact semesters rather than "Since 2024".
     --------------------------------------------------------------------- */
  teaching: [
    {
      code: "CSE 102",
      title: "Computer Fundamentals & Programming Lab",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 103",
      title: "Structured Programming",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 104",
      title: "Structured Programming Lab",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 108",
      title: "Competitive Programming",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 311",
      title: "Microprocessor & Assembly Language",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 312",
      title: "Microprocessor & Assembly Language Lab",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 322",
      title: "Software Engineering",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 401",
      title: "Mathematics for Computer Science",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "CSE 410",
      title: "Software Development",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
     {
      code: "BNG 401",
      title: "Functional Bengali Language",
      role: "Lecturer",
      org: "University of Asia Pacific",
      //term: "Since 2024"
    },
    {
      code: "—",
      title: "Undergraduate courses, Department of CSE",
      role: "Teaching Assistant",
      org: "University of Asia Pacific",
      term: "Jan – Jun 2024",
      summary: "Supported course delivery and student assessment across the department."
    },
    {
      code: "—",
      title: "Programming Contest Club",
      role: "Administrator and Coach",
      org: "Department of CSE, University of Asia Pacific",
      term: "Since Oct 2024",
      summary:
        "Coaching students for national and inter-university programming contests, " +
        "and running the monthly selection.",
      links: [{ label: "Club page", url: "https://pcc.uap-bd.edu/" }]
    }
  ],

  /* ---------------------------------------------------------------------
     13. FOOTER
     --------------------------------------------------------------------- */
  // footer: {
  //   repo: "https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io"   // TODO
  // }
};

/* Also expose on window so the object is easy to inspect from the browser
   console (type SITE and hit enter) and safe under any script-loading order. */
if (typeof window !== "undefined") { window.SITE = SITE; }
