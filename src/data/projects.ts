     1|export type Project = {
     2|  title: string;
     3|  techs: string[];
     4|  link: string;
     5|  description?: string;
     6|  isPinned?: boolean;
     7|  contributors?: string;
     8|  isComingSoon?: boolean;
     9|};
    10|
    11|const projects: Project[] = [
    12|  /* ── Pinned ────────────────────────────────────────── */
    13|  {
    14|    title: "Automated Warranty Claims",
    15|    description: "AI-powered warranty claim adjudication system for OEMs — explainable decisioning layer over existing warranty/service systems.",
    16|    techs: ["typescript", "langchain", "nodejs", "prisma", "postgres"],
    17|    link: "https://github.com/kaizen403/Automated-Warranty-Claims",
    18|    isPinned: true,
    19|  },
    20|  {
    21|    title: "Accent AI",
    22|    description: "AI accent coaching and speech analysis platform.",
    23|    techs: ["typescript", "nextjs", "openai", "react"],
    24|    link: "https://github.com/kaizen403/accent-ai",
    25|    isPinned: true,
    26|  },
    27|  {
    28|    title: "Postgres MCP Server",
    29|    description:
    30|      "MCP server for AI tooling with secure query execution, observability, and workflow integration.",
    31|    techs: ["mcp", "postgres", "langchain", "nodejs", "prisma"],
    32|    link: "https://github.com/kaizen403/postgres-mpc-server",
    33|    isPinned: true,
    34|  },
    35|  {
    36|    title: "Pendent Interview Backend",
    37|    description:
    38|      "Interview orchestration backend for AI-assisted and voice-based interviews with LiveKit media, LangChain agents, and vector search.",
    39|    techs: [
    40|      "typescript",
    41|      "livekit",
    42|      "langchain",
    43|      "openai",
    44|      "milvus",
    45|      "prisma",
    46|      "postgres",
    47|    ],
    48|    link: "https://github.com/Pendent-ai/interview-pendent-be",
    49|    isPinned: true,
    50|  },
    51|  {
    52|    title: "gRPC Trading Server",
    53|    description:
    54|      "Realtime price-change streaming built with Kafka. Wall Street Hijack CTF challenge.",
    55|    techs: ["grpc", "kafka", "docker", "prisma", "nodejs", "postgres"],
    56|    link: "https://github.com/Parrot-CTFs/Grpc_TradingServer",
    57|    isPinned: true,
    58|  },
    59|  {
    60|    title: "Pendent Jobs Backend",
    61|    description:
    62|      "ATS listings backend with AI-reviewed job postings, resume uploads via MinIO, and hardened security middleware.",
    63|    techs: ["typescript", "express", "prisma", "postgres", "minio"],
    64|    link: "https://github.com/Pendent-ai/jobs-pendent-be",
    65|    isPinned: true,
    66|  },
    67|  {
    68|    title: "AI Browser Control v2",
    69|    description:
    70|      "Browser control framework for AI agents with task orchestration, stateful sessions, and safety guardrails.",
    71|    techs: ["typescript", "puppeteer", "langchain", "nodejs"],
    72|    link: "https://github.com/kaizen403/ai_browser_control_v2",
    73|    isPinned: true,
    74|  },
    75|  {
    76|    title: "AI Web Pentester",
    77|    description:
    78|      "AI pentesting toolkit with structured recon, vulnerability workflows, and automated reporting.",
    79|    techs: ["javascript", "langchain", "nodejs"],
    80|    link: "https://github.com/kaizen403/ai_web_pentester",
    81|    isPinned: true,
    82|  },
    83|
    84|  /* ── AI / ML ───────────────────────────────────────── */
    85|  {
    86|    title: "ExAI",
    87|    description:
    88|      "Bringing memories to life using LangGraph advanced RAG model with DeepSeek.",
    89|    techs: ["langgraph", "langchain", "deepseek", "nextjs", "nodejs"],
    90|    link: "https://github.com/kaizen403/exai",
    91|  },
    92|  {
    93|    title: "Systems Design AI",
    94|    description: "AI-powered systems design learning platform.",
    95|    techs: ["llama", "langchain", "nextjs", "prisma", "postgres", "typescript"],
    96|    link: "https://github.com/kaizen403/system-design-ai",
    97|  },
    98|  {
    99|    title: "KazDesk AI Call Center",
   100|    description:
   101|      "AI-driven call center with voice synthesis, LLM routing, and email automation.",
   102|    techs: [
   103|      "typescript",
   104|      "elevenlabs",
   105|      "openai",
   106|      "twilio",
   107|      "langchain",
   108|      "prisma",
   109|      "express",
   110|    ],
   111|    link: "https://github.com/kaizen403/kazdesk",
   112|  },
   113|  {
   114|    title: "AI Video Editor",
   115|    description: "AI-powered video editing toolkit with timeline automation.",
   116|    techs: ["typescript", "nodejs"],
   117|    link: "https://github.com/kaizen403/ai_video_editor",
   118|  },
   119|  {
   120|    title: "AI Interviewer VITAP",
   121|    description:
   122|      "AI interview platform for VITAP with real-time feedback and analytics.",
   123|    techs: ["typescript", "nextjs", "openai"],
   124|    link: "https://github.com/kaizen403/AI_Interviewer_vitap",
   125|  },
   126|  {
   127|    title: "OEM Telemetry AI",
   128|    description:
   129|      "Agentic AI workflow and data intelligence solutions for OEM telemetry devices.",
   130|    techs: ["typescript", "langchain", "nodejs"],
   131|    link: "https://github.com/kaizen403/OEM_telemetry_ai",
   132|  },
   133|  {
   134|    title: "Matrimony AI",
   135|    description:
   136|      "AI-powered matrimony matching platform with preference analysis.",
   137|    techs: ["typescript", "openai", "nodejs"],
   138|    link: "https://github.com/kaizen403/matrimony_ai",
   139|  },
   140|  {
   141|    title: "KazAI",
   142|    description:
   143|      "Upload a problem, watch AI solve it. Fast, easy, student-approved.",
   144|    techs: ["nextjs", "typescript", "react", "shadcn/ui"],
   145|    link: "https://github.com/kaizen403/Kaz_AI",
   146|  },
   147|  {
   148|    title: "LangGraph Agent",
   149|    description: "AI agent with tool bindings using LangGraph.",
   150|    techs: ["typescript", "langgraph", "langchain"],
   151|    link: "https://github.com/kaizen403/langgraph-agent",
   152|  },
   153|  {
   154|    title: "3D AI Japanese Teacher",
   155|    description:
   156|      "3D AI-powered Japanese language teacher using Three.js and speech synthesis.",
   157|    techs: ["nextjs", "three.js", "openai", "azure", "typescript"],
   158|    link: "https://github.com/kaizen403/3D-AI-japanese-teacher-three.js",
   159|  },
   160|  {
   161|    title: "AI Sales Agent",
   162|    description: "Conversational AI sales agent.",
   163|    techs: ["javascript", "nodejs", "openai"],
   164|    link: "https://github.com/kaizen403/ai_sales_agent",
   165|  },
   166|  {
   167|    title: "Voice Agent",
   168|    description: "Voice-based AI agent.",
   169|    techs: ["javascript", "nodejs"],
   170|    link: "https://github.com/kaizen403/voice_agent",
   171|  },
   172|  {
   173|    title: "WP AI SEO Automation",
   174|    description: "AI-driven SEO automation for WordPress sites.",
   175|    techs: ["javascript", "nodejs", "wordpress"],
   176|    link: "https://github.com/kaizen403/wp_ai_seo_automation",
   177|  },
   178|
   179|  /* ── Search & Data ─────────────────────────────────── */
   180|  {
   181|    title: "Realtime Semantic Search",
   182|    description: "Low-latency semantic retrieval with realtime index updates.",
   183|    techs: ["typescript", "nodejs", "embeddings"],
   184|    link: "https://github.com/kaizen403/realtime_semantic_search",
   185|  },
   186|  {
   187|    title: "Semantic Search",
   188|    description:
   189|      "Semantic search using LangChain, Mistral embeddings, and Pinecone.",
   190|    techs: ["javascript", "langchain", "mistral", "pinecone"],
   191|    link: "https://github.com/kaizen403/Semantic_search",
   192|  },
   193|
   194|  /* ── Security / CTF ────────────────────────────────── */
   195|  {
   196|    title: "Bluerock",
   197|    description: "Insecure MCP server — ParrotCTFs challenge.",
   198|    techs: ["typescript", "mcp", "langchain", "groq", "nextjs"],
   199|    link: "https://github.com/kaizen403/bluerock",
   200|  },
   201|  {
   202|    title: "Hacking Labs VITAP",
   203|    description: "Security lab environment for VITAP students.",
   204|    techs: ["javascript", "nodejs", "docker"],
   205|    link: "https://github.com/kaizen403/hacking_labs_vitap",
   206|  },
   207|  {
   208|    title: "DPDPA Compliant",
   209|    description: "DPDP Act compliance checker and consent management system.",
   210|    techs: ["typescript", "nodejs"],
   211|    link: "https://github.com/kaizen403/dpdpa_compliant",
   212|  },
   213|  {
   214|    title: "Insecure IDOR API",
   215|    description:
   216|      "Demonstration of an IDOR access control vulnerability in a REST API.",
   217|    techs: ["javascript", "express", "prisma", "postgres"],
   218|    link: "https://github.com/kaizen403/Insecure_IDOR_API",
   219|  },
   220|  {
   221|    title: "Veriface",
   222|    description:
   223|      "AWS Rekognition-based face verification and XXE insecure CTF challenge.",
   224|    techs: ["python", "aws rekognition", "nodejs"],
   225|    link: "https://github.com/kaizen403/Veriface",
   226|  },
   227|  {
   228|    title: "Face Login",
   229|    description: "Face comparison authentication using AWS Rekognition.",
   230|    techs: ["javascript", "aws rekognition", "nodejs"],
   231|    link: "https://github.com/kaizen403/face-login",
   232|  },
   233|  {
   234|    title: "Secure Scan",
   235|    description: "Web security scanner.",
   236|    techs: ["python", "php", "mysql", "javascript"],
   237|    link: "https://github.com/ryuux21/Secure-scan",
   238|    contributors: "w/ @brainiac",
   239|  },
   240|
   241|  /* ── Backend / Infra ───────────────────────────────── */
   242|  {
   243|    title: "AlphaSecurity gRPC Server",
   244|    description:
   245|      "gRPC backend for cybersecurity vulnerability report management. Faster than REST or GraphQL.",
   246|    techs: ["typescript", "grpc", "prisma", "postgres", "protobufs"],
   247|    link: "https://github.com/kaizen403/alphasecurity_GRPC_Server",
   248|  },
   249|  {
   250|    title: "gRPC WebRTC Server",
   251|    description:
   252|      "WebRTC over gRPC protocol — a novel implementation combining both protocols.",
   253|    techs: ["typescript", "grpc", "webrtc", "nodejs", "react"],
   254|    link: "https://github.com/kaizen403/grpc_webrtc_server",
   255|  },
   256|  {
   257|    title: "Code Execution Engine",
   258|    description:
   259|      "Run code securely inside Docker containers. Supports Node.js, Python, and more.",
   260|    techs: ["typescript", "nextjs", "socket.io", "docker", "aws s3"],
   261|    link: "https://github.com/kaizen403/CodeExecutionEngine",
   262|  },
   263|  {
   264|    title: "Image Optimization AWS",
   265|    description:
   266|      "On-the-fly image optimization through search query using AWS S3 and Lambda.",
   267|    techs: ["typescript", "aws s3", "aws lambda", "nodejs"],
   268|    link: "https://github.com/kaizen403/image-optimization-aws",
   269|  },
   270|  {
   271|    title: "Vitopia Scanner",
   272|    description:
   273|      "Anti-fraud entry scanner using Redis queue locking and Convex as source of truth.",
   274|    techs: ["typescript", "redis", "convex"],
   275|    link: "https://github.com/kaizen403/vitopia_scanner",
   276|  },
   277|  {
   278|    title: "Netts Backend",
   279|    description: "Backend services for the Netts platform.",
   280|    techs: ["javascript", "express", "nodejs"],
   281|    link: "https://github.com/kaizen403/netts-backend",
   282|  },
   283|  {
   284|    title: "Vitopia Website Backend",
   285|    description: "Backend for the VITAP Vitopia fest website.",
   286|    techs: ["javascript", "express", "nodejs"],
   287|    link: "https://github.com/kaizen403/Vitap-vitopia",
   288|  },
   289|  {
   290|    title: "OpenLinear",
   291|    description: "Linear-style project management for OpenCode.",
   292|    techs: ["javascript", "nodejs"],
   293|    link: "https://github.com/kaizen403/openlinear",
   294|  },
   295|
   296|  /* ── Full-Stack Apps ───────────────────────────────── */
   297|  {
   298|    title: "Pantrypal",
   299|    description:
   300|      "Marketplace for hostel residents to buy, sell, or exchange food and essentials.",
   301|    techs: [
   302|      "nextjs",
   303|      "lucia auth",
   304|      "prisma",
   305|      "typescript",
   306|      "shadcn/ui",
   307|      "uploadthing",
   308|    ],
   309|    link: "https://github.com/kaizen403/Pantrypal",
   310|  },
   311|  {
   312|    title: "CupidMatch",
   313|    description:
   314|      "Dating app for college students with an innovative matching algorithm.",
   315|    techs: ["nextjs", "next-auth", "prisma", "typescript", "react"],
   316|    link: "https://github.com/kaizen403/CupidMatch",
   317|  },
   318|  {
   319|    title: "Adonispot",
   320|    description:
   321|      "Platform for introspective leaders to engage in meaningful connections and personal growth.",
   322|    techs: ["typescript", "nextjs", "react"],
   323|    link: "https://github.com/kaizen403/Adonispot",
   324|  },
   325|  {
   326|    title: "Cryptoscope",
   327|    description: "Crypto portfolio tracking and analysis platform.",
   328|    techs: ["typescript", "nextjs", "react"],
   329|    link: "https://github.com/kaizen403/cryptoscope",
   330|  },
   331|  {
   332|    title: "Crypto Portfolio Tracker",
   333|    description: "Real-time cryptocurrency portfolio tracker.",
   334|    techs: ["javascript", "nodejs"],
   335|    link: "https://github.com/kaizen403/crypto-portfolio-tracker",
   336|  },
   337|  {
   338|    title: "DevFlow",
   339|    description: "Large-scale Next.js 14 developer platform.",
   340|    techs: ["nextjs", "typescript", "react"],
   341|    link: "https://github.com/kaizen403/devflow",
   342|  },
   343|  {
   344|    title: "The CodePad",
   345|    description: "Collaborative code editor — CodePad alternative.",
   346|    techs: ["typescript", "react", "nodejs"],
   347|    link: "https://github.com/kaizen403/thecodepad",
   348|  },
   349|  {
   350|    title: "Web Builder",
   351|    description: "Visual web page builder.",
   352|    techs: ["typescript", "react"],
   353|    link: "https://github.com/kaizen403/web-builder",
   354|  },
   355|  {
   356|    title: "MunchMates",
   357|    description: "Food sharing and meal coordination app.",
   358|    techs: ["typescript", "nextjs", "react"],
   359|    link: "https://github.com/kaizen403/munchmates",
   360|  },
   361|
   362|  /* ── Networking / WebRTC ───────────────────────────── */
   363|  {
   364|    title: "WebRTC P2P",
   365|    description: "Peer-to-peer video and audio streaming using WebRTC.",
   366|    techs: ["typescript", "webrtc", "nodejs", "react"],
   367|    link: "https://github.com/kaizen403/webrtc-omegle-p2p",
   368|  },
   369|  {
   370|    title: "P2P WebRTC (Go)",
   371|    description: "P2P WebRTC implementation in Go.",
   372|    techs: ["go", "webrtc"],
   373|    link: "https://github.com/kaizen403/p2p-webrtc",
   374|  },
   375|
   376|  /* ── Tools / Utilities ─────────────────────────────── */
   377|  {
   378|    title: "Cursor for Investors",
   379|    description: "AI-assisted investor research and deal-flow tooling — a Cursor-style IDE experience for VCs.",
   380|    techs: ["typescript", "nextjs", "openai"],
   381|    link: "https://github.com/kaizen403/cursor-for-investors",
   382|  },
   383|  {
   384|    title: "Vahaan Watch",
   385|    description: "Vehicle monitoring and telematics intelligence platform.",
   386|    techs: ["typescript", "nodejs"],
   387|    link: "https://github.com/kaizen403/vahaan-watch",
   388|  },
   389|  {
   390|    title: "VC IDE",
   391|    description: "IDE-style interface for venture capital research and portfolio management.",
   392|    techs: ["typescript", "react", "nextjs"],
   393|    link: "https://github.com/kaizen403/vc-ide",
   394|  },
   395|  {
   396|    title: "Penstrike AI",
   397|    description: "AI-assisted penetration testing framework with automated recon and attack surface analysis.",
   398|    techs: ["python", "nodejs", "langchain"],
   399|    link: "https://github.com/kaizen403/penstrike_ai",
   400|  },
   401|  {
   402|    title: "Fleetora Landing",
   403|    description: "Landing page for Fleetora — fleet management and OEM warranty AI platform.",
   404|    techs: ["nextjs", "typescript", "react"],
   405|    link: "https://github.com/kaizen403/fleetora-landing",
   406|  },
   407|  {
   408|    title: "OEM Service Unit",
   409|    description: "Modular service unit management system for OEM aftersales and warranty operations.",
   410|    techs: ["typescript", "nodejs"],
   411|    link: "https://github.com/kaizen403/OEM_service_unit",
   412|  },
   413|  {
   414|    title: "Secured Gov DB",
   415|    description: "Hardened government database API with access control and audit logging.",
   416|    techs: ["typescript", "nodejs", "postgres"],
   417|    link: "https://github.com/kaizen403/secured_gov_db",
   418|  },
   419|  {
   420|    title: "ReAct AI Agent",
   421|    description: "ReAct (Reason + Act) AI agent implementation with tool use and chain-of-thought.",
   422|    techs: ["typescript", "langchain", "nodejs"],
   423|    link: "https://github.com/kaizen403/ReAct-Ai-Agent",
   424|  },
   425|  {
   426|    title: "Code Extractor",
   427|    description:
   428|      "Extracts your entire codebase into a single text file for LLM context.",
   429|    techs: ["javascript", "nodejs"],
   430|    link: "https://github.com/kaizen403/codeExtractor",
   431|  },
   432|];
   433|
   434|export default projects;
   435|