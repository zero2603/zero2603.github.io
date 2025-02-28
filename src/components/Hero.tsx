import type { CSSProperties } from 'react'
// image
import avatarImg from 'assets/images/avatar.jpg'
// component
import * as HeroIcon from "@heroicons/react/24/outline"

const Hero = () => {
    const onContact = () => {
        const targetEl = document.querySelector('#contact');
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="w-full h-full min-h-dvh bg-gradient-to-b from-primary to-transparent lg:h-dvh">
            <div className="w-full h-full flex flex-col items-center gap-16 pt-40 pb-10 max-w-[90%] mx-auto lg:flex-row lg:pt-0 lg:pb-0 2xl:container">
                <div className="">
                    <h2 className="text-white text-2xl font-semibold leading-tight md:text-3xl lg:text-5xl lg:leading-[1.2]">
                        <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 0 } as CSSProperties}>Hi 👋,</span>
                        <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 1 } as CSSProperties}>My name is Pham Thu.</span>
                        <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 2 } as CSSProperties}>I build things for web.</span>
                    </h2>
                    <div className="flex flex-col gap-4 items-center mt-8 opacity-0 animate-fade-in md:flex-row md:gap-6" style={{ "--animation-order": 4 } as CSSProperties}>
                        <button
                            className="px-4 py-2 flex items-center gap-2 border border-white border-2 rounded-full bg-none text-sm text-white transtion-all duration-300 hover:bg-button lg:text-base xl:px-6 xl:py-3"
                            onClick={onContact}
                        >
                            <HeroIcon.PaperAirplaneIcon className='size-4 text-white' />
                            Contact me
                        </button>
                    </div>
                </div>
                <div className="flex flex-1 justify-center animate-fade-in">
                    <div className="size-72 rounded-full overflow-hidden lg:size-80 2xl:w-[480px] 2xl:h-[480px]">
                        <img src={avatarImg.src} alt="Avatar" loading="eager" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;