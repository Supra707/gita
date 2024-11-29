'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Chapterloading from '../components/chapterloading';
import { Card } from '../components/card';
import { useParams } from 'next/navigation';
import Detailsloading from '../components/detailsloading';
const page = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { id } = useParams(); 
  const get_all_chapters = async () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
      params: {
        skip: '0',
        limit: '18'
      },
      headers: {
        'x-rapidapi-key': 'b8dee9cb48mshcdf3b9dcfb365c8p1ae6e8jsnc937618846dd',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log("API Response Data: ", response.data); // Log the data
      if (response.data) {
        // Store the response in localStorage
        localStorage.setItem('chaptersData', JSON.stringify(response.data));
        setChapters(response.data); // Set the chapters in state
      } else {
        setError('No data received from API');
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
      setError('Failed to fetch data from API');
    }
  };

  useEffect(() => {
    // Check if data already exists in localStorage
    const storedChapters = localStorage.getItem('chaptersData');

    if (storedChapters) {
      // If data exists, parse it and set the state
      console.log("Data loaded from localStorage");
      setChapters(JSON.parse(storedChapters));
      // Simulate a minimum loading delay
      setTimeout(() => {
        setLoading(false);  // This ensures loading is set to false even if the API responds quickly
      }, 5000); // Delay of 2000ms (2 seconds)
    } else {
      // If no data in localStorage, fetch it from the API
      console.log("Fetching data from API...");
      get_all_chapters();
      // Simulate a minimum loading delay
      setTimeout(() => {
        setLoading(false);  // This ensures loading is set to false even if the API responds quickly
      }, 10000); // Delay of 10000ms (10 seconds)
    }


  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    // This will log the updated chapters state when it changes
    console.log("Chapters state updated: ", chapters);
  }, [chapters]); // This effect runs when `chapters` state changes

  if (loading) {
    return (
      <div className=" p-8 flex justify-center items-center min-h-screen bg-gray-100">
        {/* Create a responsive grid layout using Tailwind */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full max-w-full">
          {/* Generate multiple skeleton loading placeholders */}
          {[...Array(18)].map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-4 shadow-md flex flex-col justify-between items-center min-h-[300px]">
              <Chapterloading /> {/* Use your Chapterloading component here */}
            </div>
          ))}
        </div>
      </div>
    )// Show loading state while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (

    <div className="flex justify-center">
      <div className="  p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {chapters.map((chapter, index) => (
          <Link href={`/chapters/${index + 1}`} key={chapter.id}>
            <Card
              key={index}
              title={`Chapter ${index + 1}: ${chapter.name_translated}`}
              description={chapter.chapter_summary.slice(0, 150) + "..."}
              imageSrc={`/image/${index+1}.jpg`} // Assuming you have an image URL for each chapter
              link={`/chapter/${chapter.slug}`}
              buttonText="Read More"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
