import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
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

    const quickLinks = [
        { name: 'About', href: 'https://portfolio-three-taupe-xauhh4b7f7.vercel.app/' },
        { name: 'Projects', href: 'https://portfolio-three-taupe-xauhh4b7f7.vercel.app/' },
        { name: 'Experience', href: 'https://portfolio-three-taupe-xauhh4b7f7.vercel.app/' },
        { name: 'Contact', href: 'https://portfolio-three-taupe-xauhh4b7f7.vercel.app/' }
    ];

    return (
        <footer className="bg-portfolio-footer-bg border-t border-portfolio-footer-border mt-20">
            <div className="container mx-auto px-6 py-12 text-white ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Bishwajeet kumar</h3>
                        <p className="text-muted-foreground max-w-md text-white">
                            Full-stack developer passionate about creating beautiful, functional web experiences.
                            Always learning, always building.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-emerald-500 transition-colors duration-200 w-fit"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <div className="flex space-x-4">
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
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-portfolio-footer-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>© {currentYear} Bishwajeet Kumar. All rights reserved.</span>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <span>Built with</span>
                        <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                        <span>using React & JavaScript</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;