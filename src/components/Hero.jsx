import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-solar-light to-white pb-10 pt-16 rounded-b-[3rem] shadow-sm">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-solar-green rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="text-center px-6 relative z-10">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 border-2 border-solar-green/10"
                >
                    <Sun className="w-14 h-14 text-orange-500" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 mb-2"
                >
                    ONKAR SOLAR ENTERPRISES
                </motion.h1>
                <div className="w-16 h-1 bg-gradient-to-r from-solar-green to-solar-blue mx-auto rounded-full mb-4"></div>

                <p className="text-gray-600 font-medium text-lg max-w-xs mx-auto mb-2 leading-relaxed">
                    {c.hero.tagline}
                </p>
                <p className="text-sm text-gray-500 font-medium bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100">
                    Prime Plus Partner | Gama Era Energies
                </p>
            </div>
        </section>
    );
}

export default Hero;
