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
