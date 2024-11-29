import React from 'react';
import { Card } from './components/card';
const platformFeatures = [
  {
    title: "Enhance Knowledge and Wisdom",
    description: "Gain deeper insights into ancient teachings and philosophies that can guide you in your daily life.",
    imageSrc: "/image/19.jpg",
    link: "https://platform.example.com/knowledge",
    buttonText: "Explore Knowledge"
  },
  {
    title: "Find Spiritual Guidance",
    description: "Discover the power of spiritual teachings and how they can help you achieve inner peace and balance.",
    imageSrc: "/image/20.jpg",
    link: "https://platform.example.com/spiritual-guidance",
    buttonText: "Get Guided"
  },
  {
    title: "Practice Meditation & Mindfulness",
    description: "Learn meditation techniques that can help calm your mind and improve mental clarity.",
    imageSrc: "/image/21.jpg",
    link: "https://platform.example.com/meditation",
    buttonText: "Start Meditating"
  },
  {
    title: "Learn Self-Improvement Techniques",
    description: "Uncover methods for personal growth and development through disciplined practice and wisdom.",
    imageSrc: "/image/22.jpg",
    link: "https://platform.example.com/self-improvement",
    buttonText: "Start Improving"
  },
  {
    title: "Connect with Like-minded Individuals",
    description: "Join a community of seekers and learners who share similar spiritual interests and practices.",
    imageSrc: "/image/23.jpg",
    link: "https://platform.example.com/community",
    buttonText: "Join Now"
  },
  {
    title: "Discover Ancient Wisdom",
    description: "Access the timeless teachings of ancient sages and their insights into life’s deepest questions.",
    imageSrc: "/image/24.jpg",
    link: "https://platform.example.com/ancient-wisdom",
    buttonText: "Uncover Wisdom"
  }
];
import { Navbar } from './components/navbar';
import { Slider } from './components/slider';
import Footer from './components/footer';
import {Divider} from "@nextui-org/divider";
const Page = () => {
  return (
    <div>

      <Slider />
      <div className="flex justify-center">
        <div className="  p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {platformFeatures.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              link={feature.link}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </div>
      <Divider/>

    </div>
  );
};

export default Page;
