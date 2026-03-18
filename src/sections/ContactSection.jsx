"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Trophy, Users, Search } from 'lucide-react';

const ServiceSection = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchWgerData = async () => {
    setLoading(true);
    try {
      const [exRes, imgRes] = await Promise.all([
        fetch('https://wger.de/api/v2/exercise/?language=2&limit=20'),
        fetch('https://wger.de/api/v2/exerciseimage/?limit=50')
      ]);

      const exData = await exRes.json();
      const imgData = await imgRes.json();

      const combinedData = exData.results.map(ex => {
        const imageObj = imgData.results.find(img => img.exercise === ex.id);
        
        const cleanDescription = ex.description 
          ? ex.description.replace(/<[^>]*>?/gm, '').slice(0, 80) + "..."
          : "Professional workout guide for better results.";

        return {
          id: ex.id,
          name: ex.name || "Fitness Movement",
          description: cleanDescription,
          image: imageObj ? imageObj.image : null, // Image එක නැත්නම් null කරනවා
          category: "Fitness"
        };
      });

      setExercises(combinedData);
      setLoading(false);
    } catch (error) {
      console.error("Wger Fetch Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWgerData();
  }, []);

  const filteredExercises = exercises.filter(ex => 
    ex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mainServices = [
    { title: "Personal Training", desc: "Customized workout plans for your goals.", icon: <Dumbbell size={32} /> },
    { title: "Group Classes", desc: "High energy sessions with expert coaches.", icon: <Users size={32} /> },
    { title: "Nutrition Plans", desc: "Fuel your body with the right nutrients.", icon: <Trophy size={32} /> },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black dark:text-white mb-4 uppercase tracking-tighter"
          >
            OUR <span className="text-[#E1B12C]">SERVICES</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium italic">Professional fitness solutions powered by Wger Open API.</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-gray-50 dark:bg-[#111] rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="text-[#E1B12C] mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold dark:text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <hr className="border-gray-100 dark:border-white/5 mb-24" />

        {/* Search & Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black dark:text-white uppercase mb-2">WGER <span className="text-[#E1B12C]">ENGINE</span></h3>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">Open Source Database</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-72">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
             <input 
              type="text" placeholder="Search Wger DB..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border dark:bg-[#161616] dark:border-white/10 dark:text-white outline-none focus:border-[#E1B12C] transition-all font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-32">
            <div className="relative inline-block h-12 w-12">
               <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-white/10"></div>
               <div className="absolute inset-0 rounded-full border-4 border-[#E1B12C] border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-[#E1B12C] font-black tracking-widest uppercase text-xs">Accessing Wger API...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredExercises.map((ex) => (
                <motion.div 
                  key={ex.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-gray-50 dark:bg-[#111] rounded-[2.5rem] overflow-hidden border border-transparent hover:border-[#E1B12C]/30 transition-all duration-500 shadow-lg"
                >
                  {/* Image Card Part Updated */}
                  <div className="relative h-64 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                    {ex.image ? (
                      <img 
                        src={ex.image}
                        alt={ex.name} 
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'; // Load වෙන්න බැරි වුණොත් අයින් කරනවා
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-6">
                        <div className="w-16 h-16 bg-[#E1B12C]/10 rounded-full flex items-center justify-center mb-4">
                          <Dumbbell className="text-[#E1B12C]" size={32} />
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                          {ex.name} <br /> <span className="text-[#E1B12C]/50">Visual Guide</span>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest italic mb-2 block">ID: {ex.id}</span>
                    <h4 className="font-black capitalize dark:text-white text-xl line-clamp-1 group-hover:text-[#E1B12C] transition-colors duration-300">
                      {ex.name}
                    </h4>
                    <p className="text-gray-500 text-xs mt-3 leading-relaxed line-clamp-2 italic">
                      {ex.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;