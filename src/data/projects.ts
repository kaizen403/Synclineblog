export type Project = {
  title: string;
  techs: string[];
  link: string;
  contributors?: string;
  isComingSoon?: boolean;
};

/* ── MCP projects first ─────────────────────────────── */
const projects: Project[] = [
  {
    title: "postgres-mpc-server",
    techs: ["pg", "nodejs", "langchain", "mcp", "js", "deepseek", "prisma"],
    link: "https://github.com/kaizen403/postgres-mpc-server",
  },
  {
    title: "Bluerock (Insecure MCP Server)",
    techs: ["nodejs", "langchain", "mcp", "groq", "nextjs", "pg"],
    link: "https://github.com/kaizen403/bluerock",
  },

  /* ── AI-focused projects ───────────────────────────── */
  {
    title: "Systems Design AI",
    techs: ["llama", "langchain", "ts", "nodejs", "nextjs", "js", "prisma", "pg"],
    link: "https://systems-design-ai.vercel.app/",
  },
  {
    title: "KazDesk AI Call Center",
    techs: [
      "ts",
      "nodejs",
      "elevenlabs",
      "gcp",
      "openai",
      "prisma",
      "twilio",
      "express",
      "langchain",
      "mailgun",
    ],
    link: "https://kazdesk.in/",
  },

  /* ── All other projects (original order retained) ─── */
  {
    title: "exai",
    techs: ["langchain", "langgraph", "deepseek", "nextjs", "Nodejs", "ts", "js"],
    link: "https://github.com/kaizen403/exai",
  },
  {
    title: "Grpc webrtc server",
    techs: ["webRTC", "grpc", "Nodejs", "js", "ts", "React"],
    link: "https://github.com/kaizen403/grpc_webrtc_server",
  },
  {
    title: "alphasecurity_GRPC_Server",
    techs: ["Grpc", "postgres", "prisma", "ts", "protobufs"],
    link: "https://github.com/kaizen403/alphasecurity_GRPC_Server",
  },
  {
    title: "CodeExecutionEngine",
    techs: ["Nextjs", "Nodejs", "Socket.io", "aws_S3", "Docker", "ts", "React"],
    link: "https://github.com/kaizen403/CodeExecutionEngine",
  },
  {
    title: "Grpc_TradingServer",
    techs: ["docker", "kafka", "prisma", "nodejs", "Grpc", "postgres", "js"],
    link: "https://github.com/kaizen403/Grpc_TradingServer",
  },
  {
    title: "Insecure IDOR API",
    techs: ["express", "nodejs", "prisma", "postgres", "js"],
    link: "https://github.com/kaizen403/Insecure_IDOR_API",
  },
  {
    title: "Pantrypal",
    techs: [
      "Nextjs14",
      "lucia auth",
      "prisma",
      "Typescript",
      "Tailwind",
      "React",
      "Shadcnui",
      "uploadthing",
    ],
    link: "https://pantrypal-delta.vercel.app/",
  },
  {
    title: "SigmaGram",
    techs: [
      "Nextjs",
      "Typescript",
      "Tailwind",
      "React",
      "Mongodb",
      "Uploadthing",
      "Shadcnui",
      "Zod",
      "(MERN STACK)",
    ],
    link: "https://sigmagram.in",
  },
  {
    title: "CupidMatch",
    techs: ["Nextjs14", "Next auth", "prismaorm", "Typescript", "Tailwind", "React"],
    link: "https://cupid-match.vercel.app/",
  },
  {
    title: "KazAI",
    techs: ["Nextjs14", "Typescript", "Tailwind", "React", "Shadcnui"],
    link: "https://ai-exam-problem-solver.vercel.app/",
  },
  {
    title: "Image_Optimization_aws",
    techs: ["aws_s3", "aws_lambda", "nodejs", "ts"],
    link: "https://github.com/kaizen403/image-optimization-aws/tree/main",
  },
  {
    title: "webRTC_P2P",
    techs: ["webRTC", "Nodejs", "js", "ts", "React"],
    link: "https://github.com/kaizen403/webrtc-omegle-p2p/tree/main",
  },
  {
    title: "Secure Scan",
    techs: ["Python", "php", "Mysql", "Javascript"],
    link: "https://github.com/ryuux21/Secure-scan",
    contributors: "contributers: @brainiac",
  },
  {
    title: "3D-AI-Japanese-Teacher",
    techs: ["Nextjs14", "Three.js", "Typescript", "openai", "azure"],
    link: "https://github.com/kaizen403/3D-AI-japanese-teacher-three.js",
  },
  {
    title: "Old Portfolio",
    techs: ["Javascript", "CSS"],
    link: "https://redadmin.pages.dev/",
  },
  {
    title: "Netts Backend",
    techs: ["nodejs", "express", "ts", "prisma", "pg"],
    link: "https://www.netts.in/",
  },
  {
    title: "Fundline",
    techs: ["nextjs", "ts"],
    link: "https://fundline.in/",
  },
  {
    title: "Veriface",
    techs: ["aws_rekognition", "2fa", "nodejs", "ts"],
    link: "https://github.com/kaizen403/Veriface",
  },
  {
    title: "Vitopia Website BE",
    techs: ["nodejs", "express", "pg"],
    link: "https://vitopia.vitap.ac.in/",
  },
];

export default projects;
