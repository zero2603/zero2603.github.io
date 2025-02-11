import type { CSSProperties } from "react";
import type { TypeSkill, TypeSkillGroup } from "types/types";

const skillGroups: TypeSkillGroup[] = [
    {
        title: 'Programming',
        skills: [
            {
                title: 'JavaScript'
            },
            {
                title: 'TypeScript'
            },
            {
                title: 'PHP'
            },
            {
                title: 'Shopify Liquid'
            },
            {
                title: 'Python'
            },
            {
                title: 'HTML'
            },
            {
                title: 'CSS'
            }
        ]
    },
    {
        title: 'Databases',
        skills: [
            {
                title: 'MySQL'
            },
            {
                title: 'PostgreSQL'
            },
            {
                title: 'MongoDB'
            },
            {
                title: 'Redis'
            }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            {
                title: 'NodeJS'
            },
            {
                title: 'ExpressJS'
            },
            {
                title: 'NestJS'
            },
            {
                title: 'NextJS'
            },
            {
                title: 'ReactJS'
            },
            {
                title: 'React Native'
            },
            {
                title: 'Laravel'
            },
            {
                title: 'Shopify'
            },
            {
                title: 'Redux'
            },
            {
                title: 'Bootstrap'
            },
            {
                title: 'TailwindCSS'
            },
            {
                title: 'jQuery'
            }
        ]
    },
    {
        title: 'Cloud Architecture',
        skills: [
            {
                title: 'AWS'
            },
            {
                title: 'Google Cloud Platform'
            },
            {
                title: 'Heroku'
            },
            {
                title: 'Git'
            },
            {
                title: 'Docker'
            },
            {
                title: 'CI/CD'
            }
        ]
    },
    {
        title: 'Tools',
        skills: [
            {
                title: 'VSCode'
            },
            {
                title: 'Figma'
            },
            {
                title: 'Postman'
            }
        ]
    },
];

const Skills = () => {
    return (
        <section className="container py-8 lg:py-16" id="skills">
            <div className="flex flex-col justify-center items-center gap-6 mb-8">
                <h2 className="text-5xl text-white font-bold bg-title text-gradient leading-tight">My Skills</h2>
                <p className="w-full max-w-[512px] text-white text-center font-light">I specialize in frontend and backend technologies. Below, you can explore my key skills and the tools I use to build efficient and scalable solutions.</p>
            </div>
            <div className="columns-1 gap-8 md:columns-2 md:gap-6 lg:columns-3 lg:gap-8">
                {skillGroups.map((skillGroup: TypeSkillGroup, index: number) => (
                    <div
                        key={index}
                        className="pt-8 md:pt-6 lg:pt-8"
                    >
                        <div
                            className="relative bg-dark-700 rounded-lg break-inside-avoid-column before:absolute before:content-[''] before:block before:w-8 before:h-8 before:bg-secondary before:-top-2 before:-left-2 before:-z-10 before:rounded-r-lg before:rounded-bl-lg lg:before:-top-4 lg:before:-left-4"
                        >
                            <div className="p-4 border-b border-secondary">
                                <h4 className="text-white uppercase font-semibold">{skillGroup.title}</h4>
                            </div>
                            <ul className="">
                                {skillGroup.skills.map((skill: TypeSkill, skillIndex: number) => (
                                    <li
                                        key={skillIndex}
                                        className="flex items-center text-white px-4 h-12 opacity-0 animate-fade-in"
                                        style={{ "--animation-order": skillIndex } as CSSProperties}
                                    >
                                        {skill.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;