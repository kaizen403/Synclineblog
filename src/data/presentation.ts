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
  work: "Full Stack Webdev @ ParrotCTFS",
  description:
    "Just a 19-year-old passionate about technology and product development, with a strong interest in fitness.",
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
      link: "https://github.com/kaizen403",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/rishi-vhavle-35a166296",
    },
    
  ],
};

export default presentation;
