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
    techs: ["python","php","mysql","JS"],
    link: "https://github.com/ryuux21/Secure-scan",
    contributors: "contributers: @brainiac"
  },
  {
    title: "Portfolio",
    techs: ["javascript", "css"],
    link: "https://redadmin.pages.dev/",
  },
  
  {
    title: "Adonispot",
    techs: ["Nextjs13", "typescript", "tailwind", "clerk", "..."],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
