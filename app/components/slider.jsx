'use client'
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Gita_chapters = [
    {
      image: "/image/1.jpg",
      main_heading: "Chapter 1: Arjuna Vishada Yoga",
      sub_heading: "The Yoga of Arjuna's Dejection",
    },
    {
      image: "/image/2.jpg",
      main_heading: "Chapter 2: Sankhya Yoga",
      sub_heading: "Transcendental Knowledge",
    },
    {
      image: "/image/3.jpg",
      main_heading: "Chapter 3: Karma Yoga",
      sub_heading: "The Yoga of Action",
    },
    {
      image: "/image/4.jpg",
      main_heading: "Chapter 4: Jnana Karma Sanyasa Yoga",
      sub_heading: "The Yoga of Knowledge and Action",
    },
    {
      image: "/image/5.jpg",
      main_heading: "Chapter 5: Karma Sanyasa Yoga",
      sub_heading: "The Yoga of Renunciation of Action",
    },
    {
      image: "/image/6.jpg",
      main_heading: "Chapter 6: Dhyana Yoga",
      sub_heading: "The Yoga of Meditation",
    },
    {
      image: "/image/7.jpg",
      main_heading: "Chapter 7: Jnana Vijnana Yoga",
      sub_heading: "The Yoga of Knowledge and Wisdom",
    },
    {
      image: "/image/8.jpg",
      main_heading: "Chapter 8: Aksara Brahma Yoga",
      sub_heading: "The Yoga of the Imperishable Absolute",
    },
    {
      image: "/image/9.jpg",
      main_heading: "Chapter 9: Raja Vidya Raja Guhya Yoga",
      sub_heading: "The Yoga of Royal Knowledge and Royal Secret",
    },
    {
      image: "/image/10.jpg",
      main_heading: "Chapter 10: Vibhuti Yoga",
      sub_heading: "The Yoga of Divine Glories",
    },
    {
      image: "/image/11.jpg",
      main_heading: "Chapter 11: Visvarupa Darsana Yoga",
      sub_heading: "The Yoga of the Vision of the Universal Form",
    },
    {
      image: "/image/12.jpg",
      main_heading: "Chapter 12: Bhakti Yoga",
      sub_heading: "The Yoga of Devotion",
    },
    {
      image: "/image/13.jpg",
      main_heading: "Chapter 13: Kshetra Kshetragna Vibhaga Yoga",
      sub_heading: "The Yoga of the Field and the Knower of the Field",
    },
    {
      image: "/image/14.jpg",
      main_heading: "Chapter 14: Gunatraya Vibhaga Yoga",
      sub_heading: "The Yoga of the Division of the Three Gunas",
    },
    {
      image: "/image/15.jpg",
      main_heading: "Chapter 15: Purusottama Yoga",
      sub_heading: "The Yoga of the Supreme Divine Personality",
    },
    {
      image: "/image/16.jpg",
      main_heading: "Chapter 16: Daivasura Sampad Vibhaga Yoga",
      sub_heading: "The Yoga of the Division between the Divine and the Non-Divine",
    },
    {
      image: "/image/17.jpg",
      main_heading: "Chapter 17: Shraddhatraya Vibhaga Yoga",
      sub_heading: "The Yoga of Three Divisions of Faith",
    },
    {
      image: "/image/18.jpg",
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
      <Carousel slideInterval={5000}
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
                      <br />
                      <br />
                      <Link href={`/chapters/${index+1}`}>
                        <Button color="primary" className="md:w-1/2 md:h-20 md:text-2xl text-white font-extrabold neon-glow">Know More</Button></Link>

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