import { Youtube, Instagram } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="bg-black/80 backdrop-blur-sm border-b border-white/10">
            <div className="container">
                <div className="flex items-center justify-end h-16">
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.youtube.com/@criativosdafavela"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <Youtube size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/cri.ativosdafavela/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}; 