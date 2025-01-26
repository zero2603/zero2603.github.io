import type { CSSProperties } from 'react'

const Hero = () => (
    <section className="w-full h-dvh bg-gradient-to-b from-primary to-transparent">
        <div className="w-full h-full flex flex-col items-center gap-16 pt-40 max-w-[90%] mx-auto lg:flex-row lg:pt-0">
            <div className="">
                <h2 className="text-white text-2xl font-semibold leading-tight md:text-3xl lg:text-5xl lg:leading-[1.2]">
                    <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 0 } as CSSProperties}>Hi 👋,</span>
                    <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 1 } as CSSProperties}>My name is Pham Thu.</span>
                    <span className="block opacity-0 animate-fade-in" style={{ "--animation-order": 2 } as CSSProperties}>I build things for web.</span>
                </h2>
            </div>
            <div className="flex flex-1 justify-center animate-fade-in">
                <div className="size-72 border-4 border-primary rounded-full overflow-hidden lg:size-80">
                    <img src="https://avatarfiles.alphacoders.com/322/322784.png" alt="Avatar" loading="eager" />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;