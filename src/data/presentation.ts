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
  title: "Hi, I’m Rishi  ",
  work:
    "Head of Software @ Netts<br/>Manager of Content Creation Services @ ParrotCTFS<br/>Founder and CTO @ KazDesk.in",
  description:
    "Just a 20-year old Powerlifter who is passionate about technology and product development.",
  socials: [
    {
      label: "Instagram",
      link: "https://instagram.com/rishivhavle",
    },
    {
      label: "Spotify",
      link: "https://open.spotify.com/user/vedofn5ayr7fr0k0qvx68hif0",
    },
    {
      label: "Github",
      link: "https://github.com/kaizen403",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/rishi-vhavle-35a166296",
    },
    
  ],
};

export default presentation;
