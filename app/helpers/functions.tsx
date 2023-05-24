import { IconType } from 'react-icons'

import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

type IconName = 'CSS' | 'Express' | 'Git' | 'HTML' | 'JavaScript' | 'MongoDB' | 'Next' | 'Node' | 'React' | 'Redux' | 'Tailwind' | 'TypeScript';

type IconMap = {
  [key in IconName]: IconType;
};

export const getIconByName = (name: string) => {
  const nameFormatted = name.split(' ')[0].split('.')[0] as IconName

  const iconsMap: IconMap = {
    CSS: SiCss3,
    Express: SiExpress,
    Git: SiGit,
    HTML: SiHtml5,
    JavaScript: SiJavascript,
    MongoDB: SiMongodb,
    Next: SiNextdotjs,
    Node: SiNodedotjs,
    React: SiReact,
    Redux: SiRedux,
    Tailwind: SiTailwindcss,
    TypeScript: SiTypescript
  }

  const IconComponent = iconsMap[nameFormatted]

  if (!IconComponent) return null

  return <IconComponent size={24} />
}
