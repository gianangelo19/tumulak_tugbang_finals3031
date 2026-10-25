import { latestNews } from "./news";
import programTranscription from "./program-transcription.json";
import research from "./research.json";
import { programDetails } from "./program-details";
const details = {
  BSIT: {
    name: "Information Technology",
    fullName: "Bachelor of Science in Information Technology",
    tagline: "Build technology that connects us.",
    short:
      "Turn technology into practical solutions for people and organizations.",
    color: "#7042a6",
    pale: "#f0e8fa",
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
    color: "#245fa8",
    pale: "#e6effb",
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
    color: "#a9470b",
    pale: "#fff0e3",
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
    color: "#247399",
    pale: "#e4f5fd",
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
  ...programDetails[code],
  ...programTranscription[code],
  code,
  id: code.toLowerCase(),
  image: `/images/${code.toLowerCase()}-organization.png`,
}));
export const people = research.people.map((person) => ({
  ...person,
  image: `/images/${person.image}`,
}));
export const institution = research.institution;
export const directorySource = research.directorySource;
export const news = latestNews;
export const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
