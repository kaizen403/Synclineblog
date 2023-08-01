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
    title: "Adonispot",
    techs: ["Nextjs", "Typescript", "Tailwind", "Clerk", "next-auth", "Prisma"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
