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
    title: "Accelute",
    description:
      "AI whiteboard tutor that teaches aloud while handwriting and verified diagrams appear in sync, across maths, physics, chemistry and DSA.",
    techs: [
      "typescript",
      "nextjs",
      "konva",
      "turborepo",
      "postgres",
      "auth.js",
      "websockets",
    ],
    link: "https://github.com/kaizen403/heytutor",
    isPinned: true,
  },
  {
    title: "OpenLinear",
    description:
      "Tauri desktop app where kanban tasks are executed by AI coding agents and shipped as GitHub pull requests.",
    techs: ["typescript", "tauri", "nextjs", "express", "prisma", "postgres"],
    link: "https://github.com/kaizen403/openlinear",
    isPinned: true,
  },
  {
    title: "Vahaan Watch",
    description:
      "Real time ANPR vehicle surveillance platform with watchlist alerts, an admin portal and edge workstation agents.",
    techs: ["typescript", "nextjs", "hono", "postgres", "docker"],
    link: "https://github.com/kaizen403/vahaan-watch",
    isPinned: true,
  },
  {
    title: "OEM Telemetry AI",
    description:
      "Agentic AI workflow and data intelligence solutions for OEM telemetry devices.",
    techs: ["typescript", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/OEM_telemetry_ai",
    isPinned: true,
  },
  {
    title: "AI Capstone Interviewer",
    description:
      "Voice agent that reviews student capstone presentations live, built on LiveKit with a LangGraph interview flow.",
    techs: [
      "typescript",
      "nextjs",
      "livekit",
      "langgraph",
      "elevenlabs",
      "prisma",
      "postgres",
    ],
    link: "https://github.com/kaizen403/AI_Interviewer_vitap",
    isPinned: true,
  },
  {
    title: "Hacking Labs VITAP",
    description:
      "CTF platform where students spin up isolated vulnerable lab containers, exploit them and submit flags.",
    techs: ["typescript", "nextjs", "express", "prisma", "postgres", "docker"],
    link: "https://github.com/kaizen403/hacking_labs_vitap",
    isPinned: true,
  },
  {
    title: "CtrlAgent",
    description:
      "Browser control framework for AI agents with task orchestration, stateful sessions, and safety guardrails.",
    techs: ["typescript", "playwright", "cdp", "mcp", "nodejs"],
    link: "https://github.com/kaizen403/CtrlAgent",
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
    title: "AI Web Pentester",
    description:
      "AI pentesting toolkit with structured recon, vulnerability workflows, and automated reporting.",
    techs: ["javascript", "langchain", "nodejs"],
    link: "https://github.com/kaizen403/ai_web_pentester",
    isPinned: true,
  },

  /* ── AI / ML ───────────────────────────────────────── */
  {
    title: "Accelute QA Agent",
    description:
      "GitHub PR QA agent that tests preview deployments in a real browser and posts a report with a demo video.",
    techs: [
      "typescript",
      "express",
      "nextjs",
      "playwright",
      "langchain",
      "prisma",
      "postgres",
    ],
    link: "https://github.com/kaizen403/accelute",
  },
  {
    title: "Automated Warranty Claims",
    description: "AI-powered warranty claim adjudication system for OEMs — explainable decisioning layer over existing warranty/service systems.",
    techs: ["typescript", "langchain", "nodejs", "prisma", "postgres"],
    link: "https://github.com/kaizen403/Automated-Warranty-Claims",
  },
  {
    title: "Accent AI",
    description:
      "Desktop app that converts your speech into a British, American, Australian or Indian accent.",
    techs: ["typescript", "tauri", "nextjs", "elevenlabs"],
    link: "https://github.com/kaizen403/accent-ai",
  },
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
    title: "Omegle VITAP",
    description:
      "Anonymous peer to peer video chat for VIT-AP students with an admin dashboard and TURN relay.",
    techs: ["typescript", "nextjs", "webrtc", "socket.io", "express", "redis"],
    link: "https://github.com/kaizen403/omegle",
  },
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
    title: "Archwillow",
    description:
      "Low latency speech to text overlay for Hyprland using ElevenLabs realtime transcription.",
    techs: ["python", "elevenlabs", "wayland"],
    link: "https://github.com/kaizen403/archwillow",
  },
  {
    title: "Cursor for Investors",
    description: "AI-assisted investor research and deal-flow tooling — a Cursor-style IDE experience for VCs.",
    techs: ["typescript", "nextjs", "openai"],
    link: "https://github.com/kaizen403/cursor-for-investors",
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
