
import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/Bishwajeet-07',
            label: 'GitHub Profile'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/bishwajeet-kumar-040a78247/',
            label: 'LinkedIn Profile'
        },

        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:bishwajeetk121@gamil.com',
            label: 'Send Email'
        }
    ];



    return (
        <div className=" mt-20 m-auto">
            <div className="container m-auto px-6 py-12 text-white ">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8 m-auto">
                    {/* Contact & Social */}
                    <div className="space-y-4 m-auto">
                        <h4 className="text-lg font-semibold text-yellow-400 text-center">Bishwajeet Kumar</h4>
                        <div className="flex space-x-4 justify-center">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="p-2 rounded-lg bg-muted/0 text-muted-foreground  hover:text-emerald-500 transition-all duration-200 transform hover:scale-105"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Available for freelance opportunities
                        </p>
                        <div className=' flex justify-center items-center'>
                            <a className=' bg-yellow-500 py-2 px-4 text-xl rounded-md text-white text-center' href='https://portfolio-three-taupe-xauhh4b7f7.vercel.app/' target='_blank' >Portfolio</a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;