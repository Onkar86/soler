import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Download, FileText } from 'lucide-react';

const Downloads = () => {
    const { language } = useLanguage();
    const c = content[language];

    const downloads = [
        {
            label: c.downloads.card,
            file: "/visiting-card.pdf",
            icon: FileText,
            color: "bg-gradient-to-r from-solar-green to-emerald-600"
        },
        {
            label: c.downloads.brochure,
            file: "/solar-brochure.pdf",
            icon: Download,
            color: "bg-gradient-to-r from-solar-blue to-cyan-600"
        }
    ];

    return (
        <section className="px-6 mt-8 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-solar-blue rounded-full"></span>
                {c.downloads.title}
            </h2>
            <div className="flex flex-col gap-3">
                {downloads.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.file}
                        download
                        className={`${item.color} text-white p-4 rounded-xl shadow-lg flex items-center justify-between active:scale-95 transition-transform`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/20 rounded-lg">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-semibold text-lg">{item.label}</span>
                        </div>
                        <div className="bg-white/20 p-2 rounded-full">
                            <Download className="w-5 h-5" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Downloads;
