import type { ReactElement, ReactNode } from "react";

export type TypeMenuItem = {
    title: string;
    icon: ReactElement,
    href: string;
}

export type TypeSkill = {
    title: string;
}

export type TypeSkillGroup = {
    title: string;
    skills: TypeSkill[];
}

export type TypeProject = {
    title: string;
    description: string;
    tags: string[];
    website: string;
    featuredImage: ImageMetadata;
}

export type TypeCompany = {
    name: string;
    logo: ImageMetadata;
    from: string;
    to: string;
    title: string;
}

export type TypeContactUrl = {
    url: string;
    title: string;
    color: string;
}