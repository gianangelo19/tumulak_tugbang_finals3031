import research from "./research.json";
const details = {
  BSIT: {
    name: "Information Technology",
    fullName: "Bachelor of Science in Information Technology",
    tagline: "Build technology that connects us.",
    short:
      "Turn technology into practical solutions for people and organizations.",
    color: "#176c76",
    pale: "#e3f1ee",
    symbol: "⌘",
    areasLabel: "Make technology work for people",
    highlights: [
      [
        "Connected systems",
        "Explore networks, platforms, and the infrastructure behind connected organizations.",
      ],
      [
        "Useful applications",
        "Bring web systems, information management, and integrated applications together.",
      ],
      [
        "Secure operations",
        "Study security, administration, and responsible technology practice.",
      ],
    ],
    careers: [
      "Information security specialist",
      "Network architect",
      "Database administrator",
      "Systems administrator",
      "Computer support specialist",
    ],
  },
  BSCS: {
    name: "Computer Science",
    fullName: "Bachelor of Science in Computer Science",
    tagline: "Think deeply. Build what’s next.",
    short: "Explore the ideas and algorithms behind tomorrow’s software.",
    color: "#285fa6",
    pale: "#e8eef8",
    symbol: "{ }",
    areasLabel: "Discover the science behind the software",
    highlights: [
      [
        "Computational foundations",
        "Develop mathematical reasoning and explore algorithms, complexity, and discrete structures.",
      ],
      [
        "Software development",
        "Study programming languages, software engineering, and the design of computing systems.",
      ],
      [
        "Human-centered computing",
        "Connect technical problem-solving with human-computer interaction and professional practice.",
      ],
    ],
    careers: [
      "Software developer",
      "Software engineer",
      "Computing researcher",
    ],
  },
  BSDMIA: {
    name: "Digital Media & Interactive Arts",
    fullName: "Bachelor of Science in Digital Media and Interactive Arts",
    tagline: "Imagine boldly. Create differently.",
    short: "Bring art, storytelling, and interactive technology together.",
    color: "#92513b",
    pale: "#f7e8dc",
    symbol: "✳",
    areasLabel: "Give your imagination a new medium",
    highlights: [
      [
        "Visual storytelling",
        "Explore photography, graphic design, and video editing as creative forms of communication.",
      ],
      [
        "Worlds in motion",
        "Develop your practice in animation, 3D modeling, and digital media production.",
      ],
      [
        "Interactive experiences",
        "Connect design and technology through games and virtual reality.",
      ],
    ],
    careers: [
      "Animator",
      "Graphic designer",
      "Game designer",
      "Web designer",
      "Multimedia artist",
      "Art director",
    ],
  },
  BLIS: {
    name: "Library & Information Science",
    fullName: "Bachelor of Library and Information Science",
    tagline: "Connect people with knowledge.",
    short: "Make information accessible, organized, and meaningful.",
    color: "#635887",
    pale: "#eeeaf5",
    symbol: "▤",
    areasLabel: "Open up a world of information",
    highlights: [
      [
        "Organized knowledge",
        "Learn to evaluate, organize, and share information in print and digital formats.",
      ],
      [
        "People and information",
        "Understand users’ needs and develop responsive information services.",
      ],
      [
        "Digital libraries",
        "Explore library automation, information systems, research, and ethical practice.",
      ],
    ],
    careers: ["Librarian", "Information services professional"],
  },
};
export const programs = Object.entries(details).map(([code, detail]) => ({
  ...research.programs[code],
  ...detail,
  code,
  id: code.toLowerCase(),
  image: `/images/${code.toLowerCase()}.png`,
}));
export const people = research.people.map((person) => ({
  ...person,
  image: `/images/${person.image}`,
}));
export const institution = research.institution;
export const directorySource = research.directorySource;
export const news = [
  {
    id: "community-partnership",
    category: "Community",
    date: "2021-12-08",
    title: "Building connections beyond the classroom",
    image: "/images/outreach.jpg",
    alt: "CPU and Mandurriao Elementary School representatives at the agreement signing",
    summary:
      "CCS and Mandurriao Elementary School marked a new partnership through the college’s Adopt a School initiative.",
    body: "The institutions signed a memorandum of agreement on December 7, 2021. The initiative planned virtual learning-management-system sessions for MES faculty, led by CCS faculty.",
    source:
      "https://ccs.cpu.edu.ph/2021/12/08/community-engagement-moa-signing-ceremony/",
  },
  {
    id: "new-librarians",
    category: "Achievements",
    date: "2021-11-23",
    title: "Celebrating our new librarians",
    image: "/images/librarians.jpg",
    alt: "CCS congratulatory announcement for the 2021 new librarians",
    summary:
      "A milestone for CPU graduates in the September 2021 Librarians Licensure Examination.",
    body: "The college celebrated its new librarians and their achievement in the September 2021 examination. Read the original announcement for the published results.",
    source:
      "https://ccs.cpu.edu.ph/2021/11/23/congratulations-to-our-new-librarians/",
  },
  {
    id: "graduate-careers",
    category: "Alumni",
    date: "2021-11-23",
    title: "CCS graduates take their next step with Kation",
    image: "/images/graduates.jpg",
    alt: "CCS announcement about graduates hired by Kation Technologies",
    summary:
      "The college shared news of CCS graduates joining Kation Technologies.",
    body: "This archived college announcement highlights a career milestone for CCS graduates. Visit the original source for the published announcement.",
    source:
      "https://ccs.cpu.edu.ph/2021/11/23/kation-technologies-hires-ccs-graduates/",
  },
];
export const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
