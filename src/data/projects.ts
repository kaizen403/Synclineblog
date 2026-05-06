export type Project = {
  title: string;
  techs: string[];
  link: string;
  description?: string;
  isPinned?: boolean;
  contributors?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  /* ── Pinned ────────────────────────────────────────── */
  {
    title: "Automated Warranty Claims",
    description: "AI-powered warranty claim adjudication system for OEMs — explainable decisioning layer over existing warranty/service systems.",
    techs: ["typescript", "langchain", "nodejs", "prisma", "postgres"],
    link: "https://github.com/kaizen403/Automated-Warranty-Claims",
    isPinned: true,
  },
  {
    title: "Accent AI",
    description: "AI accent coaching and speech analysis platform.",
    techs: ["typescript", "nextjs", "openai", "react"],
    link: "https://github.com/kaizen403/accent-ai",
    isPinned: true,
  },
  {
    title: "Postgres MCP Server",
    description:
      "MCP server for AI tooling with secure query execution, observability, and workflow integration.",
    techs: ["mcp", "postgres", "langchain", "nodejs", "prisma"],
    link: "https://github.com/kaizen403/postgres-mpc-server",
    isPinned: true,
  },
  {
    title: "Pendent Interview Backend",
    description:
      "Interview orchestration backend for AI-assisted and voice-based interviews with LiveKit media, LangChain agents, and vector search.",
    techs: [
      "typescript",
      "livekit",
      "langchain",
      "openai",
      "milvus",
      "prisma",
      "postgres",
    ],
    link: "https://github.com/Pendent-ai/interview-pendent-be",
    isPinned: true,
  },
  {
    title: "gRPC Trading Server",
    description:
      "Realtime price-change streaming built with Kafka. Wall Street Hijack CTF challenge.",
    techs: ["grpc", "kafka", "docker", "prisma", "nodejs", "postgres"],
    link: "https://github.com/Parrot-CTFs/Grpc_TradingServer",
    isPinned: true,
  },
  {
    title: "Pendent Jobs Backend",
    description:
      "ATS listings backend with AI-reviewed job postings, resume uploads via MinIO, and hardened security middleware.",
    techs: ["typescript", "express", "prisma", "postgres", "minio"],
    link: "https://github.com/Pendent-ai/jobs-pendent-be",
    isPinned: true,
  },
  {
    title: "AI Browser Control v2",
    description:
      "Browser control framework for AI agents with task orchestration, stateful sessions, and safety guardrails.",
    techs: ["typescript", "puppeteer", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/ai_browser_control_v2",
    isPinned: true,
  },
  {
    title: "AI Web Pentester",
    description:
      "AI pentesting toolkit with structured recon, vulnerability workflows, and automated reporting.",
    techs: ["javascript", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/ai_web_pentester",
    isPinned: true,
  },

  /* ── AI / ML ───────────────────────────────────────── */
  {
    title: "ExAI",
    description:
      "Bringing memories to life using LangGraph advanced RAG model with DeepSeek.",
    techs: ["langgraph", "langchain", "deepseek", "nextjs", "nodejs"],
    link: "https://github.com/kaizen403/exai",
  },
  {
    title: "Systems Design AI",
    description: "AI-powered systems design learning platform.",
    techs: ["llama", "langchain", "nextjs", "prisma", "postgres", "typescript"],
    link: "https://github.com/kaizen403/system-design-ai",
  },
  {
    title: "KazDesk AI Call Center",
    description:
      "AI-driven call center with voice synthesis, LLM routing, and email automation.",
    techs: [
      "typescript",
      "elevenlabs",
      "openai",
      "twilio",
      "langchain",
      "prisma",
      "express",
    ],
    link: "https://github.com/kaizen403/kazdesk",
  },
  {
    title: "AI Video Editor",
    description: "AI-powered video editing toolkit with timeline automation.",
    techs: ["typescript", "nodejs"],
    link: "https://github.com/kaizen403/ai_video_editor",
  },
  {
    title: "AI Interviewer VITAP",
    description:
      "AI interview platform for VITAP with real-time feedback and analytics.",
    techs: ["typescript", "nextjs", "openai"],
    link: "https://github.com/kaizen403/AI_Interviewer_vitap",
  },
  {
    title: "OEM Telemetry AI",
    description:
      "Agentic AI workflow and data intelligence solutions for OEM telemetry devices.",
    techs: ["typescript", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/OEM_telemetry_ai",
  },
  {
    title: "Matrimony AI",
    description:
      "AI-powered matrimony matching platform with preference analysis.",
    techs: ["typescript", "openai", "nodejs"],
    link: "https://github.com/kaizen403/matrimony_ai",
  },
  {
    title: "KazAI",
    description:
      "Upload a problem, watch AI solve it. Fast, easy, student-approved.",
    techs: ["nextjs", "typescript", "react", "shadcn/ui"],
    link: "https://github.com/kaizen403/Kaz_AI",
  },
  {
    title: "LangGraph Agent",
    description: "AI agent with tool bindings using LangGraph.",
    techs: ["typescript", "langgraph", "langchain"],
    link: "https://github.com/kaizen403/langgraph-agent",
  },
  {
    title: "3D AI Japanese Teacher",
    description:
      "3D AI-powered Japanese language teacher using Three.js and speech synthesis.",
    techs: ["nextjs", "three.js", "openai", "azure", "typescript"],
    link: "https://github.com/kaizen403/3D-AI-japanese-teacher-three.js",
  },
  {
    title: "AI Sales Agent",
    description: "Conversational AI sales agent.",
    techs: ["javascript", "nodejs", "openai"],
    link: "https://github.com/kaizen403/ai_sales_agent",
  },
  {
    title: "Voice Agent",
    description: "Voice-based AI agent.",
    techs: ["javascript", "nodejs"],
    link: "https://github.com/kaizen403/voice_agent",
  },
  {
    title: "WP AI SEO Automation",
    description: "AI-driven SEO automation for WordPress sites.",
    techs: ["javascript", "nodejs", "wordpress"],
    link: "https://github.com/kaizen403/wp_ai_seo_automation",
  },

  /* ── Search & Data ─────────────────────────────────── */
  {
    title: "Realtime Semantic Search",
    description: "Low-latency semantic retrieval with realtime index updates.",
    techs: ["typescript", "nodejs", "embeddings"],
    link: "https://github.com/kaizen403/realtime_semantic_search",
  },
  {
    title: "Semantic Search",
    description:
      "Semantic search using LangChain, Mistral embeddings, and Pinecone.",
    techs: ["javascript", "langchain", "mistral", "pinecone"],
    link: "https://github.com/kaizen403/Semantic_search",
  },

  /* ── Security / CTF ────────────────────────────────── */
  {
    title: "Bluerock",
    description: "Insecure MCP server — ParrotCTFs challenge.",
    techs: ["typescript", "mcp", "langchain", "groq", "nextjs"],
    link: "https://github.com/kaizen403/bluerock",
  },
  {
    title: "Hacking Labs VITAP",
    description: "Security lab environment for VITAP students.",
    techs: ["javascript", "nodejs", "docker"],
    link: "https://github.com/kaizen403/hacking_labs_vitap",
  },
  {
    title: "DPDPA Compliant",
    description: "DPDP Act compliance checker and consent management system.",
    techs: ["typescript", "nodejs"],
    link: "https://github.com/kaizen403/dpdpa_compliant",
  },
  {
    title: "Insecure IDOR API",
    description:
      "Demonstration of an IDOR access control vulnerability in a REST API.",
    techs: ["javascript", "express", "prisma", "postgres"],
    link: "https://github.com/kaizen403/Insecure_IDOR_API",
  },
  {
    title: "Veriface",
    description:
      "AWS Rekognition-based face verification and XXE insecure CTF challenge.",
    techs: ["python", "aws rekognition", "nodejs"],
    link: "https://github.com/kaizen403/Veriface",
  },
  {
    title: "Face Login",
    description: "Face comparison authentication using AWS Rekognition.",
    techs: ["javascript", "aws rekognition", "nodejs"],
    link: "https://github.com/kaizen403/face-login",
  },
  {
    title: "Secure Scan",
    description: "Web security scanner.",
    techs: ["python", "php", "mysql", "javascript"],
    link: "https://github.com/ryuux21/Secure-scan",
    contributors: "w/ @brainiac",
  },

  /* ── Backend / Infra ───────────────────────────────── */
  {
    title: "AlphaSecurity gRPC Server",
    description:
      "gRPC backend for cybersecurity vulnerability report management. Faster than REST or GraphQL.",
    techs: ["typescript", "grpc", "prisma", "postgres", "protobufs"],
    link: "https://github.com/kaizen403/alphasecurity_GRPC_Server",
  },
  {
    title: "gRPC WebRTC Server",
    description:
      "WebRTC over gRPC protocol — a novel implementation combining both protocols.",
    techs: ["typescript", "grpc", "webrtc", "nodejs", "react"],
    link: "https://github.com/kaizen403/grpc_webrtc_server",
  },
  {
    title: "Code Execution Engine",
    description:
      "Run code securely inside Docker containers. Supports Node.js, Python, and more.",
    techs: ["typescript", "nextjs", "socket.io", "docker", "aws s3"],
    link: "https://github.com/kaizen403/CodeExecutionEngine",
  },
  {
    title: "Image Optimization AWS",
    description:
      "On-the-fly image optimization through search query using AWS S3 and Lambda.",
    techs: ["typescript", "aws s3", "aws lambda", "nodejs"],
    link: "https://github.com/kaizen403/image-optimization-aws",
  },
  {
    title: "Vitopia Scanner",
    description:
      "Anti-fraud entry scanner using Redis queue locking and Convex as source of truth.",
    techs: ["typescript", "redis", "convex"],
    link: "https://github.com/kaizen403/vitopia_scanner",
  },
  {
    title: "Netts Backend",
    description: "Backend services for the Netts platform.",
    techs: ["javascript", "express", "nodejs"],
    link: "https://github.com/kaizen403/netts-backend",
  },
  {
    title: "Vitopia Website Backend",
    description: "Backend for the VITAP Vitopia fest website.",
    techs: ["javascript", "express", "nodejs"],
    link: "https://github.com/kaizen403/Vitap-vitopia",
  },
  {
    title: "OpenLinear",
    description: "Linear-style project management for OpenCode.",
    techs: ["javascript", "nodejs"],
    link: "https://github.com/kaizen403/openlinear",
  },

  /* ── Full-Stack Apps ───────────────────────────────── */
  {
    title: "Pantrypal",
    description:
      "Marketplace for hostel residents to buy, sell, or exchange food and essentials.",
    techs: [
      "nextjs",
      "lucia auth",
      "prisma",
      "typescript",
      "shadcn/ui",
      "uploadthing",
    ],
    link: "https://github.com/kaizen403/Pantrypal",
  },
  {
    title: "CupidMatch",
    description:
      "Dating app for college students with an innovative matching algorithm.",
    techs: ["nextjs", "next-auth", "prisma", "typescript", "react"],
    link: "https://github.com/kaizen403/CupidMatch",
  },
  {
    title: "Adonispot",
    description:
      "Platform for introspective leaders to engage in meaningful connections and personal growth.",
    techs: ["typescript", "nextjs", "react"],
    link: "https://github.com/kaizen403/Adonispot",
  },
  {
    title: "Cryptoscope",
    description: "Crypto portfolio tracking and analysis platform.",
    techs: ["typescript", "nextjs", "react"],
    link: "https://github.com/kaizen403/cryptoscope",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracker.",
    techs: ["javascript", "nodejs"],
    link: "https://github.com/kaizen403/crypto-portfolio-tracker",
  },
  {
    title: "DevFlow",
    description: "Large-scale Next.js 14 developer platform.",
    techs: ["nextjs", "typescript", "react"],
    link: "https://github.com/kaizen403/devflow",
  },
  {
    title: "The CodePad",
    description: "Collaborative code editor — CodePad alternative.",
    techs: ["typescript", "react", "nodejs"],
    link: "https://github.com/kaizen403/thecodepad",
  },
  {
    title: "Web Builder",
    description: "Visual web page builder.",
    techs: ["typescript", "react"],
    link: "https://github.com/kaizen403/web-builder",
  },
  {
    title: "MunchMates",
    description: "Food sharing and meal coordination app.",
    techs: ["typescript", "nextjs", "react"],
    link: "https://github.com/kaizen403/munchmates",
  },

  /* ── Networking / WebRTC ───────────────────────────── */
  {
    title: "WebRTC P2P",
    description: "Peer-to-peer video and audio streaming using WebRTC.",
    techs: ["typescript", "webrtc", "nodejs", "react"],
    link: "https://github.com/kaizen403/webrtc-omegle-p2p",
  },
  {
    title: "P2P WebRTC (Go)",
    description: "P2P WebRTC implementation in Go.",
    techs: ["go", "webrtc"],
    link: "https://github.com/kaizen403/p2p-webrtc",
  },

  /* ── Tools / Utilities ─────────────────────────────── */
  {
    title: "Cursor for Investors",
    description: "AI-assisted investor research and deal-flow tooling — a Cursor-style IDE experience for VCs.",
    techs: ["typescript", "nextjs", "openai"],
    link: "https://github.com/kaizen403/cursor-for-investors",
  },
  {
    title: "Vahaan Watch",
    description: "Vehicle monitoring and telematics intelligence platform.",
    techs: ["typescript", "nodejs"],
    link: "https://github.com/kaizen403/vahaan-watch",
  },
  {
    title: "VC IDE",
    description: "IDE-style interface for venture capital research and portfolio management.",
    techs: ["typescript", "react", "nextjs"],
    link: "https://github.com/kaizen403/vc-ide",
  },
  {
    title: "Penstrike AI",
    description: "AI-assisted penetration testing framework with automated recon and attack surface analysis.",
    techs: ["python", "nodejs", "langchain"],
    link: "https://github.com/kaizen403/penstrike_ai",
  },
  {
    title: "Fleetora Landing",
    description: "Landing page for Fleetora — fleet management and OEM warranty AI platform.",
    techs: ["nextjs", "typescript", "react"],
    link: "https://github.com/kaizen403/fleetora-landing",
  },
  {
    title: "OEM Service Unit",
    description: "Modular service unit management system for OEM aftersales and warranty operations.",
    techs: ["typescript", "nodejs"],
    link: "https://github.com/kaizen403/OEM_service_unit",
  },
  {
    title: "Secured Gov DB",
    description: "Hardened government database API with access control and audit logging.",
    techs: ["typescript", "nodejs", "postgres"],
    link: "https://github.com/kaizen403/secured_gov_db",
  },
  {
    title: "ReAct AI Agent",
    description: "ReAct (Reason + Act) AI agent implementation with tool use and chain-of-thought.",
    techs: ["typescript", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/ReAct-Ai-Agent",
  },
  {
    title: "Code Extractor",
    description:
      "Extracts your entire codebase into a single text file for LLM context.",
    techs: ["javascript", "nodejs"],
    link: "https://github.com/kaizen403/codeExtractor",
  },
];

export default projects;
