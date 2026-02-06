export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image?: string;
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "streetcam",
    title: "Streetcam",
    description: "AI security camera that detects suspicious activity around vehicles using vision AI",
    longDescription: "Turns any webcam into an intelligent street-level security monitor. Streetcam uses YOLO for real-time object detection and Qwen-VL for scene understanding, identifying suspicious behavior around parked vehicles — loitering, break-in attempts, package theft — and sending alerts with annotated screenshots.",
    tech: ["Python", "YOLO", "Qwen-VL"],
    image: "/files/uploads/labs/streetcam-screenshot.png",
  },
  {
    slug: "scouter",
    title: "Scouter",
    description: "Film industry contact intelligence - extracts and enriches contacts from credits",
    longDescription: "Automates the tedious work of building film industry contact lists. Scouter scrapes credits from film databases, enriches the data with social profiles and representation info using AI, and exports organized contact sheets — turning hours of manual research into minutes.",
    tech: ["Python", "FastAPI", "AI"],
  },
  {
    slug: "witrank",
    title: "Witrank",
    description: "Tournament framework that evaluates AI models on jokes, code, recipes, and more",
    longDescription: "A head-to-head tournament system that pits AI models against each other across creative and technical challenges — humor, coding, recipe generation, storytelling. Uses OpenRouter to orchestrate multi-model battles with a Svelte leaderboard that tracks ELO ratings and highlights each model's strengths.",
    tech: ["Python", "Svelte", "OpenRouter"],
  },
  {
    slug: "20plots",
    title: "20plots",
    description: "AI story generator - transform dreams and anecdotes into plots across 44 genres",
    longDescription: "Feed it a dream, a memory, or a random thought and 20plots transforms it into fully-formed story plots spanning 44 genres — from noir to sci-fi to magical realism. Built with a React frontend and Java backend powered by OpenAI, it's a brainstorming partner for writers who want to explore unexpected narrative directions.",
    tech: ["Java", "React", "OpenAI"],
    image: "/files/uploads/labs/20plots-screenshot.png",
    github: "https://github.com/sdanzig/20plots",
  },
  {
    slug: "peloton",
    title: "Peloton Calendar",
    description: "Auto-add favorite instructor classes to Google Calendar",
    longDescription: "Never miss a favorite Peloton class again. This tool monitors the Peloton schedule for specific instructors and class types, automatically creating Google Calendar events with class details, making it easy to plan workouts around your preferred rides and instructors.",
    tech: ["Python", "Next.js"],
    image: "/files/uploads/labs/peloton-screenshot.png",
  },
];
