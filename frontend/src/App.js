import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Globe,
  Award,
  Sprout,
  Heart,
  Layout,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  Cpu,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  useSpring,
} from "framer-motion";

// --- Global Styles for Smooth Scroll ---
const GlobalStyles = () => (
  <style>
    {`
      html {
        scroll-behavior: smooth;
      }
    `}
  </style>
);

// --- Advanced Animation Variants ---

// Cinematic Word Reveal
const wordAnimation = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerWords = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Smooth Fade Up
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger Container (Orchestrator)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// --- Helper Components ---

const Counter = ({ from, to }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const roundedValue = useTransform(motionValue, (latest) =>
    Math.round(latest),
  );
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, from, to, motionValue]);

  return <motion.span ref={ref}>{roundedValue}</motion.span>;
};

// --- New Custom Visuals ---

const NeuralNetworkVisual = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 bg-red-500 rounded-full blur-[60px] opacity-20"
      />

      <svg className="w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {[...Array(6)].map((_, i) => (
          <motion.g key={i}>
            <motion.circle
              cx="200"
              cy="200"
              r={60 + i * 25}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
            <motion.circle r="4" fill="#ef4444" initial={{ pathLength: 0 }}>
              <animateMotion
                dur={`${10 + i * 2}s`}
                repeatCount="indefinite"
                path={`M 200, 200 m -${60 + i * 25}, 0 a ${60 + i * 25},${60 + i * 25} 0 1,0 ${(60 + i * 25) * 2},0 a ${60 + i * 25},${60 + i * 25} 0 1,0 -${(60 + i * 25) * 2},0`}
              />
            </motion.circle>
          </motion.g>
        ))}

        <motion.g
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <foreignObject x="176" y="176" width="48" height="48">
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-red-600">
              <Cpu size={24} />
            </div>
          </foreignObject>
        </motion.g>

        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="200"
            y1="200"
            x2={200 + Math.cos(i) * 150}
            y2={200 + Math.sin(i) * 150}
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 + i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- Layout Components ---

const LoadingScreen = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => finishLoading(), 3000);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -50,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center gap-4 mb-8"
      >
        <img className="h-20 w-auto" src="/logo.png" alt="AAItoai Logo" />
        <span className="font-bold text-4xl text-gray-800 tracking-tight">
          AAItoai
        </span>
      </motion.div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-red-600 absolute left-0 top-0"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-500 font-medium"
      >
        Empowering Rural Education...
      </motion.p>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4"}`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img className="h-10 w-auto" src="/logo.png" alt="AAItoai" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              AAItoai
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Programs", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-red-600/30"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-600 p-2 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {["Home", "About", "Programs", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-lg shadow-red-600/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 bg-gray-50 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-gradient-to-br from-red-100/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-gray-200/50 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 text-center lg:text-left pt-12 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 shadow-sm backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2 text-red-500 fill-current" />
                Non-Profit Organization
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-6 leading-tight"
              variants={staggerWords}
            >
              {"Empowering Rural Education with AI"
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    variants={wordAnimation}
                  >
                    {word === "AI" ? (
                      <span className="text-red-600">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-500 sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Democratizing Artificial Intelligence for the next billion users.
              We bridge the gap between rural communities and cutting-edge
              technology through accessible education.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-red-600 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-gray-700 bg-white/50 border-2 border-gray-200 hover:border-red-200 hover:text-red-600 transition-all backdrop-blur-sm"
              >
                Partner With Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 mt-16 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              <NeuralNetworkVisual />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 -left-4 md:left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-20"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">
                    Helped So Far
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    60+ Students
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute top-10 -right-4 md:right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-20"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">
                    Advisers
                  </p>
                  <p className="text-sm font-bold text-gray-900">10+ Helping</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Rural Communities", value: 150, suffix: "+" },
    { label: "Certified Educators", value: 500, suffix: "+" },
    { label: "Students Trained", value: 10000, suffix: "+" },
    { label: "Countries Served", value: 25, suffix: "+" },
  ];

  return (
    <div className="bg-gray-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="text-4xl sm:text-6xl font-black text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                <div className="flex justify-center items-baseline">
                  <Counter from={0} to={stat.value} />
                  <span className="text-3xl ml-1 text-red-600">
                    {stat.suffix}
                  </span>
                </div>
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
              <div className="w-12 h-1 bg-gray-800 mx-auto mt-4 rounded-full group-hover:w-24 group-hover:bg-red-600 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    {
      title: "Accessibility First",
      desc: "Simple, affordable, and available to everyone.",
      icon: <Layout className="h-6 w-6 text-white" />,
    },
    {
      title: "Community Driven",
      desc: "Building a network of passionate local educators.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Practical Learning",
      desc: "Real-world applications improving daily life.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
    {
      title: "Inclusive Growth",
      desc: "Benefits reaching every corner of society.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6 leading-tight"
            >
              Bridging the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Digital Divide
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 mb-8 leading-relaxed"
            >
              We envision a world where geographic location doesn't limit access
              to quality technological literacy. By combining local mentorship
              with global AI resources, we are rewriting the future of rural
              education.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <blockquote className="italic text-gray-700 text-xl font-medium relative z-10 leading-relaxed">
                "AAItoai transformed our community's understanding of
                technology. Now our farmers use AI to optimize crops!"
              </blockquote>
              <div className="mt-8 flex items-center relative z-10">
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-sm">
                  <span className="text-gray-600 font-bold text-lg">MS</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900 text-lg">
                    Maria Santos
                  </div>
                  <div className="text-red-600 font-medium">
                    Rural Educator, Philippines
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-16 lg:mt-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-red-100 transition-all duration-300 group"
              >
                <div className="h-12 w-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30 mb-6 group-hover:rotate-6 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "AI Fundamentals",
      desc: "Start your AI journey with basic concepts explained in simple terms.",
      features: ["Local language support", "Offline learning materials"],
      icon: <Globe className="h-8 w-8 text-red-600" />,
      color: "bg-red-50",
    },
    {
      title: "Educator Certification",
      desc: "Become a certified AI educator and help spread knowledge in your community.",
      features: ["Comprehensive training", "Certificate recognition"],
      icon: <Award className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: "AI for Agriculture",
      desc: "Practical AI applications for improving agricultural practices.",
      features: ["Real-world applications", "Local success stories"],
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      color: "bg-green-50",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm">
            Curriculum
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Programs
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Comprehensive AI education designed specifically for rural and
            underserved communities.
          </p>
        </motion.div>

        {/* FIXED: Flashing bug solved by moving whileInView to parent container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp} // Child simply follows parent variants
              whileHover={{ y: -15 }}
              className="bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`h-full ${prog.color} rounded-[1.5rem] p-8 flex flex-col`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {prog.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {prog.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {prog.desc}
                </p>

                <div className="space-y-4">
                  {prog.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm font-medium text-gray-700 bg-white/60 p-3 rounded-xl"
                    >
                      <div className="h-2 w-2 bg-gray-900 rounded-full mr-3"></div>
                      {feat}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 py-4 bg-white rounded-xl text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="p-12 lg:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
                <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                  Ready to bring AI education to your community? Whether you're
                  an educator or a community leader, we'd love to hear from you.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-red-500" />,
                      title: "Email Us",
                      content: "contact@aaitoai.org",
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-red-500" />,
                      title: "Call Us",
                      content: "+1 (555) 123-4567",
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-red-500" />,
                      title: "Visit Us",
                      content: "1234 Education Dr, Learning City",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      whileHover={{ x: 10 }}
                    >
                      <div className="bg-gray-800 p-3 rounded-xl">
                        {item.icon}
                      </div>
                      <div className="ml-5">
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-gray-400">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 lg:p-20 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-bold text-gray-900 tracking-wide block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-900 tracking-wide block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-900 tracking-wide block mb-2">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-gray-600 cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Join as Educator</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-900 tracking-wide block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl shadow-lg shadow-red-600/30 text-lg font-bold text-white bg-red-600 hover:bg-red-700 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                className="h-8 w-auto grayscale brightness-200"
                src="/logo.png"
                alt="AAItoai"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                AAItoai
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering rural communities worldwide with accessible, practical
              Artificial Intelligence education to bridge the digital divide.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6">Programs</h3>
            <ul className="space-y-4">
              {[
                "AI Fundamentals",
                "Educator Certification",
                "Agriculture & Business",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6">Subscribe</h3>
            <p className="text-xs text-gray-500 mb-4">
              Get the latest updates on our mission.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Email address"
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 AAItoai Association. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Facebook", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-current rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      <GlobalStyles /> {/* Injects CSS for smooth scroll */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            finishLoading={() => setIsLoading(false)}
            key="loader"
          />
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Programs />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
