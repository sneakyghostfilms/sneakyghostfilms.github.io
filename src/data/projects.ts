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
    longDescription: "Turns any webcam into a street-level security monitor that runs locally on your machine. Point it at your driveway or parking spot and Streetcam watches for suspicious activity — someone lingering near your car, trying door handles, or taking packages off a porch. It uses YOLO and Qwen-VL as edge models for real-time detection and scene analysis, with the option to escalate to a frontier cloud model when a scene needs deeper reasoning. Alerts include annotated screenshots so you can see exactly what triggered them.",
    tech: ["Python", "YOLO", "Qwen-VL"],
    image: "/files/uploads/labs/streetcam-screenshot.png",
  },
  {
    slug: "scouter",
    title: "Scouter",
    description: "Film industry contact intelligence - extracts and enriches contacts from credits",
    longDescription: "A contact management tool for the film industry. Add people from credits, festival catalogs, or your own network and Scouter keeps everything in one place — profiles, representation details, social links — enriched with AI-assisted lookups. Includes analytics on your network and easy export, useful for producers, sales agents, or anyone who needs organized access to their industry contacts.",
    tech: ["Python", "FastAPI", "AI"],
    image: "/files/uploads/labs/scouter-screenshot.png",
  },
  {
    slug: "witrank",
    title: "Witrank",
    description: "Tournament framework that evaluates AI models on jokes, code, recipes, and more",
    longDescription: "A tournament system for comparing AI models head-to-head. Pick a challenge — write a joke, generate a recipe, solve a coding problem, tell a story — and Witrank runs it across multiple models simultaneously, scores the results, then coaches each model on what worked before the next round. This reinforcement learning loop means outputs improve across iterations as models learn from feedback. Uses OpenRouter to access models from OpenAI, Anthropic, Google, and others, with a Svelte dashboard that tracks ELO ratings.",
    tech: ["Python", "Svelte", "OpenRouter"],
    image: "/files/uploads/labs/witrank-screenshot.png",
  },
  {
    slug: "20plots",
    title: "20plots",
    description: "AI story generator - transform dreams and anecdotes into plots across 44 genres",
    longDescription: "A brainstorming tool for overcoming writer's block. Describe something personal — a dream you had, a childhood memory, an overheard conversation — and 20plots generates story plots across 44 genres, from noir to sci-fi to magical realism. Because each plot draws on elements you provided, the results feel personally connected rather than generic. Pick any plot that grabs you and 20plots can generate a sample scene from one of its most compelling moments, written in your choice of format — screenplay, prose, teleplay — so you can feel out the tone before committing to a draft.",
    tech: ["Java", "React", "OpenAI"],
    image: "/files/uploads/labs/20plots-screenshot.png",
    github: "https://github.com/sdanzig/20plots",
  },
  {
    slug: "peloton",
    title: "Peloton Calendar",
    description: "Auto-add favorite instructor classes to Google Calendar",
    longDescription: "A simpler, more intuitive way to browse the Peloton schedule and get classes onto your calendar. Pick your favorite instructors and class types — cycling, strength, yoga, meditation — and it monitors for new classes, automatically creating Google Calendar events with instructor, duration, and time details. Built because the official scheduling experience left something to be desired.",
    tech: ["Python", "Next.js"],
    image: "/files/uploads/labs/peloton-screenshot.png",
  },
];
