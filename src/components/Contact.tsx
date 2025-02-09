import type { CSSProperties } from 'react';
import type { TypeContactUrl } from 'types/types';

const contactUrls: TypeContactUrl[] = [
    {
        url: 'mailto:thu.pa1506@gmail.com',
        title: 'Mail',
        color: '#c71610'
    },
    {
        url: 'https://join.skype.com/invite/c2F47eGbG2ls',
        title: 'Skype',
        color: '#00AFF0'
    },
    {
        url: 'https://www.linkedin.com/in/thu-pham-3a828724a/',
        title: 'Linkedin',
        color: '#0072B1'
    },
    {
        url: 'https://github.com/zero2603/',
        title: 'Github',
        color: '#24292e'
    }
]

const Contact = () => {
    const iconClass = 'w-8 h-8 transition-all duration-300 group-hover:text-white';

    const renderIcon = (type: string) => {
        if (type === 'mail') {
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className={iconClass}>
                    <path fill="currentColor" fill-rule="evenodd" d="M5 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5zM7.625 8.22a1 1 0 1 0-1.25 1.56l3.75 3.001a3 3 0 0 0 3.75 0l3.75-3a1 1 0 1 0-1.25-1.562l-3.75 3a1 1 0 0 1-1.25 0l-3.75-3z" clip-rule="evenodd" />
                </svg>
            );
        } else if (type === 'skype') {
            return (
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M8.028 12.213c-2.325 0-3.388-1.184-3.388-2.053a.754.754 0 01.795-.754c.996 0 .736 1.494 2.593 1.494.95 0 1.508-.572 1.508-1.11 0-.322-.185-.69-.812-.838L6.65 8.429c-1.666-.424-1.957-1.351-1.957-2.21 0-1.785 1.632-2.43 3.186-2.43 1.43 0 3.132.79 3.132 1.86 0 .461-.385.708-.832.708-.85 0-.708-1.194-2.418-1.194-.85 0-1.298.398-1.298.956 0 .558.662.747 1.243.874l1.53.345c1.678.378 2.125 1.363 2.125 2.305 0 1.45-1.122 2.57-3.335 2.57h.002zm6.422-3.067c.066-.381.1-.767.099-1.153a6.55 6.55 0 00-7.685-6.479A3.854 3.854 0 004.933 1a3.918 3.918 0 00-3.381 5.857 6.555 6.555 0 007.587 7.629 3.852 3.852 0 001.93.514 3.918 3.918 0 003.38-5.854z" fill="currentColor" />
                </svg>
            );
        } else if (type === 'linkedin') {
            return (
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z" fill="currentColor" />
                </svg>
            );
        } else if (type === 'github') {
            return (
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z" fill="currentColor"/>
                </svg>
            );
        }
    }

    return (
        <section className="container py-8 lg:py-16" id="contact">
            <div className="flex justify-center items-center mb-16">
                <h2 className="text-5xl text-white font-bold bg-title text-gradient leading-tight">Interested in working together?</h2>
            </div>
            <div className="flex flex-row gap-6 items-center justify-center">
                {contactUrls.map((contactUrl: TypeContactUrl, index: number) => (
                    <a
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-white transition-all duration-300 group hover:bg-[var(--social-icon-bg)]`}
                        style={{ "--social-icon-bg": contactUrl.color } as CSSProperties}
                        href={contactUrl.url}
                        title={contactUrl.title}
                        key={index}
                    >
                        {renderIcon(contactUrl.title.toLowerCase())}
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Contact;