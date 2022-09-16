interface Props {
  socialLinks: {
    github: string;
    linkedin: string;
  }
}

function SocialMedia({ socialLinks: { github, linkedin } }: Props) {
return (
    <div>
        <a href={github}>{github}</a><br/>
        <a href={linkedin}>{linkedin}</a>
    </div>
);
}

export default SocialMedia