import type { TypeMenuItem } from "types/types"

const menuItems: TypeMenuItem[] = [
    {
        title: 'home',
        href: '#'
    },
    {
        title: 'skills',
        href: '#skills'
    },
    {
        title: 'projects',
        href: '#projects'
    },
    {
        title: 'education',
        href: '#education'
    },
    {
        title: 'experience',
        href: '#experience'
    },
    {
        title: 'contact',
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
                        onClick={() => onClickMenuItem(menuItem.href)}
                    >
                        {menuItem.title}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;