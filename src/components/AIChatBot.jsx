import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatBot = () => {
    const { language } = useLanguage();
    const c = content[language];
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Initialize chat with welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { id: 1, text: c.chat.welcome, sender: 'bot' }
            ]);
        }
    }, [isOpen, language]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI Delay
        setTimeout(() => {
            const botResponse = generateResponse(userMsg.text, language);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    // Keyword based simple mock logic (Rule based AI)
    const generateResponse = (text, lang) => {
        const lowerText = text.toLowerCase();

        if (lang === 'en') {
            if (lowerText.includes('cost') || lowerText.includes('price')) return "Solar installation costs depend on the system size (kW). Typically, a 3kW residential system ranges from ₹1.8L to ₹2.2L. Would you like a site survey for an exact quote?";
            if (lowerText.includes('pump') || lowerText.includes('water')) return "Solar water pumps are available in 3HP, 5HP, and 7.5HP capacities. Government subsidies up to 90% (Kusum Yojana) might be available.";
            if (lowerText.includes('subsidy')) return "Yes! Under PM Surya Ghar Muft Bijli Yojana, you can get subsidies up to ₹78,000 for residential systems up to 3kW.";
            if (lowerText.includes('contact') || lowerText.includes('number')) return "You can call us at +91 9309865542 or visit our office in Kemwadi.";
            return "Thank you for your query! I am a trained AI assistant. For specific technical details, please click the 'Call Now' button to speak with Mr. Onkar directly.";
        } else {
            if (lowerText.includes('पैसे') || lowerText.includes('किंमत') || lowerText.includes('खर्च')) return "सौर ऊर्जा प्रकल्पाचा खर्च सिस्टमच्या क्षमतेवर (kW) अवलंबून असतो. साधारणपणे ३ किलोवॅट घरगुती सिस्टमचा खर्च १.८ ते २.२ लाख रुपये दरम्यान असू शकतो. अचूक माहितीसाठी आम्ही साइट सर्व्हे करू का?";
            if (lowerText.includes('पंप') || lowerText.includes('पाणी')) return "सौर कृषी पंप ३ HP, ५ HP आणि ७.५ HP क्षमतेमध्ये उपलब्ध आहेत. कुसुम योजनेअंतर्गत ९०% पर्यंत सबसिडी उपलब्ध असू शकते.";
            if (lowerText.includes('सबसिडी') || lowerText.includes('अनुदान')) return "होय! पीएम सूर्य घर मोफत वीज योजनेअंतर्गत, ३ किलोवॅटपर्यंतच्या घरगुती सिस्टमसाठी तुम्हाला ७८,००० रुपयांपर्यंत सबसिडी मिळू शकते.";
            if (lowerText.includes('संपर्क') || lowerText.includes('नंबर')) return "तुम्ही आम्हाला +91 9309865542 वर कॉल करू शकता किंवा केमवाडी येथील आमच्या ऑफिसला भेट देऊ शकता.";
            return "तुमच्या प्रश्नाबद्दल धन्यवाद! मी एक एआय असिस्टंट आहे. अधिक तांत्रिक माहितीसाठी, कृपया श्री. ओंकार यांच्याशी थेट बोलण्यासाठी 'कॉल करा' बटणावर क्लिक करा.";
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-solar-blue to-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 pr-6 group"
            >
                <div className="relative">
                    <Bot className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                </div>
                <span className="font-semibold hidden group-hover:block transition-all duration-300">
                    {c.chat.ask}
                </span>
                <span className="font-semibold block group-hover:hidden transition-all duration-300">
                    AI
                </span>
            </motion.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 flex items-end justify-center pointer-events-none"
                    >
                        <div className="bg-white pointer-events-auto w-full max-w-md rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px] max-h-[80vh]">
                            {/* Header */}
                            <div className="bg-solar-blue p-4 flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">Onkar Solar AI</h3>
                                        <p className="text-xs text-blue-100 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-solar-blue text-white self-end rounded-tr-none'
                                                : 'bg-white text-gray-800 self-start shadow-sm rounded-tl-none border border-gray-100'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-75"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-150"></span>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-3 bg-white border-t border-gray-100">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder={c.chat.placeholder}
                                        className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-solar-blue focus:bg-white transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isTyping}
                                        className="bg-solar-blue text-white p-3 rounded-full disabled:opacity-50 disabled:grayscale hover:bg-blue-600 transition"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatBot;
