import type { TypeCompany } from "types/types";
// images
import solislabLogo from 'assets/images/solislab.png';
import aimenextLogo from 'assets/images/aimenext.png';
import hoangvanLogo from 'assets/images/hoangvan.jpg';
// component
import * as HeroIcon from "@heroicons/react/24/outline"

const companies: TypeCompany[] = [
    {
        name: 'Solis Lab Co., Ltd',
        logo: solislabLogo,
        from: '2023',
        to: 'present',
        title: 'Shopify Developer'
    },
    {
        name: 'Ai-pro Joint Stock Company (was spin-off from Aimenext)',
        logo: aimenextLogo,
        from: '2022',
        to: '2023',
        title: 'Fullstack Developer'
    },
    {
        name: 'Aimenext Joint Stock Company',
        logo: aimenextLogo,
        from: '2021',
        to: '2022',
        title: 'Fullstack Developer'
    },
    {
        name: 'CTC Hoang Van Joint Stock Company',
        logo: hoangvanLogo,
        from: '2018',
        to: '2022',
        title: 'Fullstack Developer'
    }
]

const Experience = () => {
    return (
        <section className="container py-8 lg:py-16" id="experience">
            <div className="flex justify-center items-center mb-16">
                <h2 className="text-5xl text-white font-bold bg-title text-gradient leading-tight">Experience</h2>
            </div>
            <ol className="relative ml-12 border-s border-gray-200">
                {companies.map((company: TypeCompany, index: number) => (
                    <li className="mb-20 ms-6 pr-6 rounded-lg transition-all duration-300" key={index}>
                        <img src={company.logo.src} alt={company.name} className="absolute flex items-center justify-center -start-12 w-24 h-24 bg-white border-white border-2 lg:aspect-square object-contain rounded-full" />
                        <div className="pl-16">
                        <h3 className="flex items-center mb-2 text-2xl font-semibold text-white md:text-3xl">{company.name}</h3>
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <HeroIcon.CalendarDateRangeIcon className="size-6 text-white" />
                            <time className="block text-base font-normal text-white italic">{company.from} - {company.to}</time>
                        </div>
                        <div className="block text-lg font-medium leading-none text-white">{company.title}</div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Experience;