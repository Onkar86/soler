import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { MapPin, Award } from 'lucide-react';

const Footer = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <footer className="bg-solar-dark text-white pt-8 pb-32 px-6 rounded-t-[2rem] mt-8">
            <div className="flex flex-col items-center text-center gap-4">

                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-yellow-400" />
                </div>

                <h3 className="text-lg font-bold">ONKAR SOLAR ENTERPRISES</h3>

                <p className="text-solar-light/80 text-sm max-w-xs leading-relaxed">
                    {c.footer.address}
                </p>

                <div className="w-full h-px bg-white/10 my-2"></div>

                <p className="text-xs text-emerald-300 font-medium">
                    {c.footer.partner}
                </p>

                <p className="text-xs text-gray-400 mt-4">
                    © {new Date().getFullYear()} Onkar Solar. All rights reserved.
                </p>
                <p className="text-[10px] text-gray-500">
                    Built by Smart Digital Card
                </p>
            </div>
        </footer>
    );
};

export default Footer;
