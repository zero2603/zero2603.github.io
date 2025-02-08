import type { ReactElement } from "react";

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
