type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  work: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "rishivhavle21@gmail.com",
  title: "Hi, I’m Rishi 👋",
  work: "web devoloper @ parrotctfs",
  description:
    "Hey there, I'm a web developer and a cybersecurity enthusiast, and I've been diving deep into these fields for over three years, even during my high school days. Now, I've graduated and turned 18! Currently, I'm busy creating awesome projects using Next.js 13 and other cool tools. Oh, and by the way, I'm pretty into fitness too.",
  socials: [
    {
      label: "Instagram",
      link: "https://instagram.com/itz_kaizenn",
    },
    {
      label: "Spotify",
      link: "https://open.spotify.com/user/vedofn5ayr7fr0k0qvx68hif0",
    },
    {
      label: "Github",
      link: "https://github.com/",
    },
  ],
};

export default presentation;
