'use client'
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Gita_chapters = [
    {
      image: "https://www.bhagavad-gita.us/wp-content/uploads/2012/09/gita-03.jpg",
      main_heading: "Chapter 1: Arjuna Vishada Yoga",
      sub_heading: "The Yoga of Arjuna's Dejection",
    },
    {
      image: "https://pragmaticgita.com/wp-content/uploads/2024/10/immortal-soul-Sig-1024x675.webp",
      main_heading: "Chapter 2: Sankhya Yoga",
      sub_heading: "Transcendental Knowledge",
    },
    {
      image: "https://www.arogyayogaschool.com/blog/wp-content/uploads/2017/08/Karma-Yoga.jpg",
      main_heading: "Chapter 3: Karma Yoga",
      sub_heading: "The Yoga of Action",
    },
    {
      image: "https://www.4to40.com/wp-content/uploads/2015/01/jnana-yoga-bhagavad-gita-chapter-4.jpg",
      main_heading: "Chapter 4: Jnana Karma Sanyasa Yoga",
      sub_heading: "The Yoga of Knowledge and Action",
    },
    {
      image: "https://divyakataksham.wordpress.com/wp-content/uploads/2021/03/krishna_arjuna_mahabharata-kurukshetra1.jpg",
      main_heading: "Chapter 5: Karma Sanyasa Yoga",
      sub_heading: "The Yoga of Renunciation of Action",
    },
    {
      image: "https://static.sadhguru.org/d/46272/1626099406-science-of-meditation-49951022-c.jpg",
      main_heading: "Chapter 6: Dhyana Yoga",
      sub_heading: "The Yoga of Meditation",
    },
    {
      image: "https://i.ytimg.com/vi/M4WZNFBkDJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGIh0p1gILH3nag1w-t9f4ktdN7g",
      main_heading: "Chapter 7: Jnana Vijnana Yoga",
      sub_heading: "The Yoga of Knowledge and Wisdom",
    },
    {
      image: "https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/465238203_8915697818489057_8835417650906063523_n.png?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TtZed5_LEBsQ7kNvgEakNih&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=AhfWeSCIt8PEvVlF2dQ_0Wg&oh=00_AYCj0eLlF4dxVxr6_wO1MNc2V_hxrAhIrnRPLniuPAUpKw&oe=674E06B8",
      main_heading: "Chapter 8: Aksara Brahma Yoga",
      sub_heading: "The Yoga of the Imperishable Absolute",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-9.1-923x1024.jpg",
      main_heading: "Chapter 9: Raja Vidya Raja Guhya Yoga",
      sub_heading: "The Yoga of Royal Knowledge and Royal Secret",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-10.1-819x1024.jpg",
      main_heading: "Chapter 10: Vibhuti Yoga",
      sub_heading: "The Yoga of Divine Glories",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-11.1-1024x981.jpg",
      main_heading: "Chapter 11: Visvarupa Darsana Yoga",
      sub_heading: "The Yoga of the Vision of the Universal Form",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-12.1-1024x928.jpg",
      main_heading: "Chapter 12: Bhakti Yoga",
      sub_heading: "The Yoga of Devotion",
    },
    {
      image: "https://githa.koyil.org/wp-content/uploads/2015/12/world-in-krishna-mouth.jpg",
      main_heading: "Chapter 13: Kshetra Kshetragna Vibhaga Yoga",
      sub_heading: "The Yoga of the Field and the Knower of the Field",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-14.1-821x1024.jpg",
      main_heading: "Chapter 14: Gunatraya Vibhaga Yoga",
      sub_heading: "The Yoga of the Division of the Three Gunas",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-15.1-819x1024.jpg",
      main_heading: "Chapter 15: Purusottama Yoga",
      sub_heading: "The Yoga of the Supreme Divine Personality",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-16.4-1024x1024.jpg",
      main_heading: "Chapter 16: Daivasura Sampad Vibhaga Yoga",
      sub_heading: "The Yoga of the Division between the Divine and the Non-Divine",
    },
    {
      image: "https://cdn.vivekavani.com/wp-content/uploads/2022/07/Bhagavad-Gita-17.1-1024x1024.jpg",
      main_heading: "Chapter 17: Shraddhatraya Vibhaga Yoga",
      sub_heading: "The Yoga of Three Divisions of Faith",
    },
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif07PDJWQW7I6w4o9yxibbu1KQs1C15woZPVtxlk8696T3RTXtypUNvMPt5A03q8c0_YyaX3iNYWQRo8p3LNmB1GJHYoH6EiBi79YYauJXlPygx0DRZJLP28IPg_4mtaEtI9s1iFMZH3s/s1600/%25E0%25AE%2595%25E0%25AF%2581%25E0%25AE%25B0%25E0%25AF%2585%25E0%25AE%25B0%25E0%25AF%258D%25E0%25AE%25A4%25E0%25AE%25BF%25E0%25AE%25B0%25E0%25AE%25AE%25E0%25AF%258D+%25E0%25AE%25AA%25E0%25AF%258B%25E0%25AE%25B0%25E0%25AF%258D+%25E0%25AE%25A4%25E0%25AF%258A%25E0%25AE%259F%25E0%25AE%2599%25E0%25AF%258D%25E0%25AE%2595%25E0%25AE%25B2%25E0%25AF%258D.jpg",
      main_heading: "Chapter 18: Moksha Sanyasa Yoga",
      sub_heading: "The Yoga of Liberation and Renunciation",
    },
  ];

  // Animation variants
  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: {
      y: 100,
      opacity: 0,
      rotateX: 90
    },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    },
    exit: {
      y: 100,
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="h-[100vh] relative">
      <Carousel
        onSlideChange={(currentSlide) => setActiveSlide(currentSlide)}
        indicators={false}
      >
        {Gita_chapters.map((chapter, index) => (
          <div key={index} className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {activeSlide === index && (
                <>
                  <motion.img
                    key={`image-${index}`}
                    src={chapter.image}
                    alt={chapter.main_heading}
                    className="object-cover w-full h-full bg-center brightness-50"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    loading="lazy"
                  />
                  <motion.div
                    key={`text-${index}`}
                    className="absolute inset-0 flex justify-center items-center p-8"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="text-center max-w-4xl px-4">
                      <motion.h2
                        className="text-5xl md:text-7xl font-extrabold mb-6 
                        text-transparent bg-clip-text text-white
                        uppercase neon-glow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100
                          }
                        }}
                      >
                        {chapter.main_heading}
                      </motion.h2>

                      <motion.p
                        className="text-2xl md:text-3xl font-semibold 
                          text-yellow-100 
                          bg-black/30 backdrop-blur-sm 
                          rounded-xl p-4
                        shadow-2xl border-2 border-yellow-600/30
                        tracking-wide"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.6,
                            type: "spring",
                            stiffness: 100
                          }
                        }}
                       
                      >
                        {chapter.sub_heading}
                      </motion.p>
                    </div>
                  </motion.div>

                </>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Carousel>
    </div>
  );
}