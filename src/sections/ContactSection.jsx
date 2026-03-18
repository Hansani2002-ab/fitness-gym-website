"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Trophy, Users, Search } from 'lucide-react';

const ServiceSection = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');
  const [loading, setLoading] = useState(true);

  const bodyParts = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];

  const fetchExercises = async (type = 'all') => {
    setLoading(true);
    let url = 'https://exercisedb.p.rapidapi.com/exercises?limit=9';
    if (type !== 'all') {
      url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${type}?limit=9`;
    }

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setExercises(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises(selectedBodyPart);
  }, [selectedBodyPart]);

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
        
        {/* Core Services */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black dark:text-white mb-4 uppercase tracking-tighter"
          >
            OUR <span className="text-[#E1B12C]">SERVICES</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium italic">Professional fitness solutions tailored for your body and goals.</p>
        </div>

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

        {/* Dynamic Exercise Database Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black dark:text-white uppercase mb-2">LIVE <span className="text-[#E1B12C]">WORKOUT</span> DB</h3>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">Real-time Exercise Engine</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
               <input 
                type="text" placeholder="Search movements..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border dark:bg-[#161616] dark:border-white/10 dark:text-white outline-none focus:border-[#E1B12C] transition-all font-medium"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="p-4 rounded-2xl border dark:bg-[#161616] dark:border-white/10 dark:text-white outline-none capitalize cursor-pointer font-bold hover:border-[#E1B12C] transition-colors"
              onChange={(e) => setSelectedBodyPart(e.target.value)}
            >
              {bodyParts.map(part => <option key={part} value={part}>{part}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-32">
            <div className="relative inline-block h-12 w-12">
               <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-white/10"></div>
               <div className="absolute inset-0 rounded-full border-4 border-[#E1B12C] border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-[#E1B12C] font-black tracking-widest uppercase text-xs">Accessing RapidAPI Hub...</p>
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
                  <div className="relative h-72 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                    {/* --- PROXY URL & ERROR HANDLING --- */}
                    <img 
                      src={`https://images.weserv.nl/?url=${encodeURIComponent(ex.gifUrl)}&default=https://placehold.co/400x400/161616/E1B12C?text=Fitness`}
                      alt={ex.name} 
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy"
                      onError={(e) => {
                        // Image එක load වුණේ නැත්නම් Placeholder එකක් පෙන්වන්න
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/400x400/161616/E1B12C?text=${ex.name.split(' ')[0]}`;
                      }}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="bg-black/80 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-md font-bold">LIVE GIF</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black bg-[#E1B12C] text-black px-3 py-1.5 rounded-full uppercase tracking-tighter">
                        {ex.target}
                      </span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest italic">ID: {ex.id}</span>
                    </div>
                    <h4 className="font-black capitalize dark:text-white text-xl line-clamp-1 group-hover:text-[#E1B12C] transition-colors duration-300">
                      {ex.name}
                    </h4>
                    <p className="text-gray-500 text-[11px] uppercase mt-3 tracking-widest font-bold flex items-center gap-2">
                      <span className="h-1 w-4 bg-[#E1B12C]/30"></span> Part: {ex.bodyPart}
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