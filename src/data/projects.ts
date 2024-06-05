export type Project = {
  title: string;
  techs: string[];
  link: string;
  contributors?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
    {
    title: "webRTC_P2P",
    techs: ["webRTC", "Nodejs", "js", "ts", "React"],
    link: "https://github.com/kaizen403/webrtc-omegle-p2p/tree/main",
  },
  {
    title: "Image_Optimization_aws",
    techs: ["aws_s3", "aws_lambda", "nodejs", "ts"],
    link: "https://redadmin.pages.dev/",
  },
  {
    title: "Secure Scan",
    techs: ["Python","php","Mysql","Javascript"],
    link: "https://github.com/ryuux21/Secure-scan",
    contributors: "contributers: @brainiac"
  },
    {
    title: "Pantrypal",
    techs: ["Nextjs14","lucia auth", "prisma","Typescript","Tailwind","React","Shadcnui","uploadthing"],
    link: "https://pantrypal-delta.vercel.app/",
  },
    {
    title: "SigmaGram",
    techs: ["Nextjs", "Typescript","Tailwind","React", "Mongodb", "Uploadthing", "Shadcnui", "Zod", "(MERN STACK)"],
    link: "https://sigmagram.in",
  },

      {
    title: "CupidMatch",
    techs: ["Nextjs14","Next auth", "prismaorm","Typescript","Tailwind","React"],
    link: "https://cupid-match.vercel.app/",
  },
  {
    title: "KazAI",
    techs: ["Nextjs14","Typescript","Tailwind","React","Shadcnui"],
    link: "https://ai-exam-problem-solver.vercel.app/",
  },
    {
    title: "Old Portfolio",
    techs: ["Javascript", "CSS"],
    link: "https://redadmin.pages.dev/",
  },

  

];

export default projects;
