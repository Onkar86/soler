import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Home, Building2, Factory, Droplets, clipboard, BookOpen, HardHat } from 'lucide-react';

const Services = () => {
    const { language } = useLanguage();
    const c = content[language];

    const services = [
        { icon: Home, label: c.services.residential, color: "text-orange-500", bg: "bg-orange-50" },
        { icon: Building2, label: c.services.commercial, color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Factory, label: c.services.industrial, color: "text-slate-600", bg: "bg-slate-50" },
        { icon: Droplets, label: c.services.pumps, color: "text-cyan-600", bg: "bg-cyan-50" },
        { icon: HardHat, label: c.services.consultation, color: "text-yellow-600", bg: "bg-yellow-50" },
        { icon: BookOpen, label: c.services.training, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <section className="px-6 mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-solar-green rounded-full"></span>
                {c.services.title}
            </h2>
            <div className="grid grid-cols-1 gap-3">
                {services.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className={`p-3 rounded-lg ${s.bg}`}>
                            <s.icon className={`w-6 h-6 ${s.color}`} />
                        </div>
                        <span className="font-semibold text-gray-700 text-lg">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
