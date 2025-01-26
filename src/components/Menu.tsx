import type { TypeMenuItem } from "types/types"
import * as HeroIcon from "@heroicons/react/24/outline"

const menuItems: TypeMenuItem[] = [
    {
        title: 'home',
        icon: <HeroIcon.HomeIcon className="size-6 text-white lg:hidden" />,
        href: '#'
    },
    {
        title: 'skills',
        icon: <HeroIcon.QueueListIcon className="size-6 text-white lg:hidden" />,
        href: '#skills'
    },
    {
        title: 'projects',
        icon: <HeroIcon.ComputerDesktopIcon className="size-6 text-white lg:hidden" />,
        href: '#projects'
    },
    {
        title: 'education',
        icon: <HeroIcon.AcademicCapIcon className="size-6 text-white lg:hidden" />,
        href: '#education'
    },
    {
        title: 'experience',
        icon: <HeroIcon.BriefcaseIcon className="size-6 text-white lg:hidden" />,
        href: '#experience'
    },
    {
        title: 'contact',
        icon: <HeroIcon.EnvelopeIcon className="size-6 text-white lg:hidden" />,
        href: '#contact'
    },
]

const Menu = () => {
    const onClickMenuItem = (id: string) => {
        const targetEl = document.querySelector(id);

        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className="w-fit h-16 fixed top-12 left-1/2 -translate-x-1/2 rounded-xl bg-white/20 backdrop-blur-md">
            <ul className="h-full flex flex-row items-center">
                {menuItems.map(menuItem => (
                    <li
                        key={menuItem.href}
                        className="px-4 capitalize cursor-pointer text-white"
                        title={menuItem.title}
                        onClick={() => onClickMenuItem(menuItem.href)}
                    >
                        <span className="hidden lg:block">{menuItem.title}</span>
                        {menuItem.icon}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;