import type { TypeProject } from "types/types";
// images
import sellonboardImg from 'assets/images/sellonboard.png';
import lucyfolkImg from 'assets/images/lucyfolk.png';
import sarahandsebastianImg from 'assets/images/sarahandsebastian.png';
import kaihoImg from 'assets/images/kaiho.jpg';
import thoxaydungImg from 'assets/images/thoxaydung.png';
import stayImg from 'assets/images/2stay.jpg';
// component
import * as HeroIcon from "@heroicons/react/24/outline"

const projects: TypeProject[] = [
    {
        title: 'Sellonboard',
        description: 'Global Selling Tools and Analysis Platform to quickly enable merchants to reduce their operational costs. Instantly connect with multiple payments, shipping, notifications and accounting platforms and manage all transactions in one unified dashboard.',
        tags: [
            'E-commerce',
            'Micro-services',
            'AWS',
            'Laravel',
            'ReactJS',
            'Redis'
        ],
        featuredImage: sellonboardImg,
        website: 'https://sellonboard.com/'
    },
    {
        title: 'Lucy Folks',
        description: 'Lucy Folk is a contemporary lifestyle brand that transforms the creative mindset into wearable pieces of art. Creating handcrafted jewellery, Italian made eyewear, lust worthy accessories and resort inspired apparel.',
        tags: [
            'E-commerce',
            'Shopify',
            'TailwindCSS',
            'SEO',
            'Optimization'
        ],
        featuredImage: lucyfolkImg,
        website: 'https://lucyfolk.com/'
    },
    {
        title: 'SARAH & SEBASTIAN | Australian Fine Jewellery',
        description: 'SARAH & SEBASTIAN is an Australian fine jewellery practice, beloved for original handcrafted designs & responsibly sourced precious metals & diamonds.',
        tags: [
            'E-commerce',
            'Shopify',
            'TailwindCSS',
            'SEO',
            'Optimization'
        ],
        featuredImage: sarahandsebastianImg,
        website: 'https://www.sarahandsebastian.com/en-global'
    },
    {
        title: 'Kaiho OCR',
        description: "Kaiho OCR is an application that manages the recycling of used cars and their auto parts. You can view vehicle information by taking a picture of the caution plate, vehicle inspection certificate, and VIN code from the app and reading the information with AI-OCR. Also, by using the AI ​​image recognition function of the app, you can quickly check the detailed engine information of the vehicle.",
        tags: [
            'React Native',
            'NodeJS'
        ],
        featuredImage: kaihoImg,
        website: 'https://play.google.com/store/apps/developer?id=KAIHO+INDUSTRY+Co.,+LTD.'
    },
    {
        title: 'Thợ Xây Dựng',
        description: "`Thợ Xây Dựng` is a platform application that connects jobs with workers and facilitates the sharing of construction machines and equipment. Users include general laborers and construction workers, as well as individuals and organizations looking to hire or rent/sell construction machines and equipment.",
        tags: [
            'Micro-services',
            'AWS',
            'NodeJS',
            'ReactJS',
            'React Native',
            'Ant Design'
        ],
        featuredImage: thoxaydungImg
    },
    {
        title: '2stay',
        description: "Providing a comprehensive range of essential travel services, 2Stay offers users a diverse selection, including hotel bookings, ultra-budget flight tickets, transportation reservations, and even all-inclusive tour packages through the app.",
        tags: [
            'Micro-services',
            'AWS',
            'NodeJS',
            'ReactJS',
            'React Native',
            'Ant Design'
        ],
        featuredImage: stayImg
    }
]

const Projects = () => {
    return (
        <section className="container py-8 lg:py-16" id="projects">
            <div className="relative flex flex-col gap-6 md:flex-row lg:gap-8 xl:gap-16">
                <div className="flex flex-col justify-center items-center mb-8 h-dvh sticky top-0 md:items-start">
                    <h2 className="text-4xl text-white font-bold bg-title text-gradient leading-tight xl:text-5xl">Featured Projects</h2>
                    <div className="text-base text-white text-center font-light mt-8 md:text-left">A collection of projects showcasing my work.</div>
                    <div className="flex flex-row items-center gap-4 mt-8">
                        <HeroIcon.ArrowDownIcon className="size-4 text-white animate-bounce" />
                        <div className="text-sm text-white lg:text-base">Scroll down</div>
                    </div>
                </div>
                <div>
                    {projects.map((project: TypeProject, index: number) => (
                        <div className="h-dvh flex items-center sticky top-0" key={index}>
                            <div className="relative flex flex-col items-start gap-6 bg-dark-700 rounded-lg p-6 my-8 lg:flex-row xl:items-center lg:gap-8">
                                <img src={project.featuredImage.src} alt={project.title} className="w-full h-32 lg:size-40 lg:aspect-square object-cover rounded-lg xl:size-64" />
                                <div>
                                    <h4 className="text-2xl text-white mb-2 xl:text-3xl">{project.title}</h4>
                                    <p className="text-sm text-white font-light mb-4 xl:text-base">{project.description}</p>
                                    <div className="w-full flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag: string) => (
                                            <span className="p-2 border border-white rounded text-xs text-white font-light xl:text-sm">{tag}</span>
                                        ))}
                                    </div>
                                    {project.website && (
                                        <a href={project.website} title={`See the ${project.title}`} className="block w-fit">
                                            <button className="px-4 py-2 flex items-center gap-2 border border-white border-2 rounded-full bg-transparent text-sm text-white xl:px-6 xl:py-3 xl:text-base">
                                                See the website
                                                <HeroIcon.ArrowUpRightIcon className="size-4 text-white" />
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;