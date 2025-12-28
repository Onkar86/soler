import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Phone, MessageCircle, MapPin, Mail, UserPlus, Share2 } from 'lucide-react';

const ContactButtons = () => {
    const { language } = useLanguage();
    const c = content[language];

    const actions = [
        {
            icon: Phone,
            label: c.actions.call,
            href: "tel:+919309865542",
            color: "bg-green-600",
            primary: true
        },
        {
            icon: MessageCircle,
            label: c.actions.whatsapp,
            href: "https://wa.me/919309865542?text=Hi%2C%20I%20am%20interested%20in%20Solar%20Services.",
            color: "bg-emerald-500",
            primary: true
        },
        {
            icon: MapPin,
            label: c.actions.map,
            href: "https://maps.google.com/?q=Kemwadi,Tal.Tuljapur,Dist.Dharashiv",
            color: "bg-blue-600",
            primary: false
        },
        {
            icon: Mail,
            label: c.actions.email,
            href: "mailto:mahamunio59@gmail.com",
            color: "bg-red-500",
            primary: false
        }
    ];

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Onkar Solar Enterprises',
                text: 'Check out Onkar Solar Services!',
                url: window.location.href,
            });
        }
    };

    return (
        <section className="px-6 -mt-8 relative z-20">
            <div className="grid grid-cols-2 gap-4 mb-4">
                {actions.map((action, idx) => (
                    <a
                        key={idx}
                        href={action.href}
                        target={action.href.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`${action.color} text-white p-4 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-center justify-center gap-2 transform active:scale-95 transition-all hover:opacity-90`}
                    >
                        <action.icon className="w-8 h-8" />
                        <span className="font-semibold text-sm">{action.label}</span>
                    </a>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="bg-white border border-gray-200 p-3 rounded-lg flex items-center justify-center gap-2 text-gray-700 font-medium shadow-sm active:bg-gray-50">
                    <UserPlus className="w-5 h-5 text-solar-blue" />
                    <span>{c.actions.save}</span>
                </button>
                <button
                    onClick={handleShare}
                    className="bg-solar-dark text-white p-3 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm active:opacity-90"
                >
                    <Share2 className="w-5 h-5" />
                    <span>{c.actions.share}</span>
                </button>
            </div>
        </section>
    );
};

export default ContactButtons;
