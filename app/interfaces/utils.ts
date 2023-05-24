import { StaticImageData } from 'next/image'

export interface Timeline {
    description: string;
    place: string;
    placeLink: string;
    time: string;
    title: string;
}

export interface Project {
    description: string;
    github: string;
    image: StaticImageData;
    name: string;
    technologies: string[];
}
