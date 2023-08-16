export type Project = {
  title: string;
  techs: string[];
  link: string;
  contributors?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Secure Scan",
    techs: ["Python","php","Mysql","Javascript"],
    link: "https://github.com/ryuux21/Secure-scan",
    contributors: "contributers: @brainiac"
  },
  {
    title: "Old Portfolio",
    techs: ["Javascript", "CSS"],
    link: "https://redadmin.pages.dev/",
  },
  
  {
    title: "SigmaGram",
    techs: ["Nextjs", "Typescript","Tailwind","React", "Mongodb", "Uploadthing", "Shadcnui", "Zod"],
    link: "https://sigmagram.in",
  },
];

export default projects;
