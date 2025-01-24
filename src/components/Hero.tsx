const Hero = () => (
    <section className="w-full h-dvh bg-gradient-to-b from-primary to-transparent">
        <div className="w-full h-full flex flex-col items-center gap-16 pt-40 max-w-[90%] mx-auto lg:flex-row">
            <div className="">
                <h2 className="text-white text-2xl font-semibold leading-tight text-gradient bg-title animate-fade-in md:text-3xl lg:text-5xl">
                    <span className="block">Hi 👋,</span>
                    <span className="block">My name is Pham Thu.</span>
                    <span className="block">I build things for web.</span>
                </h2>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="size-56 border-4 border-primary rounded-full overflow-hidden">
                    <img src="https://avatarfiles.alphacoders.com/322/322784.png" alt="Avatar" loading="eager" />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;