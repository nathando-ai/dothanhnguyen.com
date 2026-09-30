export type Social = {
  github?: string
  facebook?: string
  linkedin?: string
  email?: string
  x?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/nathando-ai',
  facebook: 'https://www.facebook.com/d0thanhnguyen',
  linkedin: 'https://linkedin.com/in/dothanhnguyen',
  email: 'mailto:contact@dothanhnguyen.com',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  facebook: {
    href: social.facebook,
    title: 'Facebook',
    icon: 'ri:facebook-box-line',
    color: '#1877F2',
  },
  linkedin: {
    href: social.linkedin,
    title: 'LinkedIn',
    icon: 'ri:linkedin-box-line',
    color: '#0A66C2',
  },
  email: {
    href: social.email,
    title: 'Email',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  x: {
    href: social.x,
    title: 'X',
    icon: 'ri:twitter-x-line',
    color: '#000',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
