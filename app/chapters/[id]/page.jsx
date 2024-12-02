'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { useParams } from 'next/navigation';
import Detailsloading from '@/app/components/detailsloading';
const Page = () => {
  const [chapter, setChapter] = useState({}); // State to store chapters
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { id } = useParams();
  const videoUrls = [
    "https://www.youtube.com/embed/_9Gsy6c-UIA?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/mBjAzqoKJoI?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/g4oEUP4Ztas?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/E-TECeu7nDw?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/e9cJwVIpPVc?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/MogyeLoe9gs?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/MJlzBHbxDSk?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/mm7QSrjoM5g?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/eHj0JiiuRaQ?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/a0FGJEZqdHY?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/4bABPNlueAY?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/XqHvlUQ8BG8?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/b5h2STZX7Ro?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/ag54cHCfJGU?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/zsQVLsDvyL0?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/sosTze3oJMw?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/xU9M2F0iVno?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf",
    "https://www.youtube.com/embed/1qhbkOfs280?list=PLcgT1Y49mx8VdWJqTVQOYx5g1FCjS-3Jf"
  ];

  const get_all_chapters = async () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`,
      headers: {
        'x-rapidapi-key': 'b8dee9cb48mshcdf3b9dcfb365c8p1ae6e8jsnc937618846dd',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log("API Response Data: ", response.data);

      if (response.data) {

        setChapter(response.data); // Set the chapters in state
      } else {
        setError('No data received from API');
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
      setError('Failed to fetch data from API');
    }
  };

  // First useEffect for initial mounting: check localStorage or fetch from API
  useEffect(() => {

    // If no data in localStorage, fetch it from the API
    console.log("Fetching data from API...");
    get_all_chapters();
    // Simulate a minimum loading delay
    setTimeout(() => {
      setLoading(false); // Stop loading after a brief delay
    }, 1000); // 1 second delay for smooth transition

  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Second useEffect: monitor changes in `chapters` state
  useEffect(() => {
    console.log("Chapters state updated: ", chapter);
  }, [chapter]); // This effect runs when the `chapters` state changes

  // If still loading, show the loading skeletons
  if (loading) {
    return (
      <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
        <Detailsloading /> {/* Skeleton loader */}
      </div>
    );
  }

  // If there's an error, show the error message
  if (error) {
    return <div>{error}</div>;
  }

  // Once data is loaded, display the chapters
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="w-full cursor-pointer bg-white p-8 rounded-lg shadow-lg hover:box-glow   transition-all duration-200">
        {/* Chapter Title */}
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-500">Chapter {chapter.chapter_number}</h3> {/* Chapter Number */}
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">{chapter.name_translated}</h1>
        </div>

        {/* Video Section */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
          <MediaPlayer title="" src={videoUrls[id-1]}>
            <MediaProvider />
            <PlyrLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={plyrLayoutIcons} />
          </MediaPlayer>
        </div>

        {/* Chapter Meaning */}
        <h2 className="text-2xl font-medium text-center mb-4 text-gray-600">{chapter.name_meaning}</h2>

        {/* Chapter Summary */}
        <div className="mb-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Summary:</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{chapter.chapter_summary}</p>
        </div>

        {/* Chapter Number & Verse Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Chapter Number:</h3>
            <p className="text-lg text-gray-600">{chapter.chapter_number}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Total Verses:</h3>
            <p className="text-lg text-gray-600">{chapter.verses_count}</p>
          </div>
        </div>

        {/* Hindi Summary */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Hindi Summary:</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{chapter.chapter_summary_hindi}</p>
        </div>

        {/* Transliterated Name */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Transliterated Name:</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{chapter.name_transliterated}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center">
          {/* Previous Button */}
          <Link href={`/chapters/${chapter.chapter_number - 1}`} passHref>
            <button
              className={`px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors ${chapter.chapter_number === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={chapter.chapter_number === 1}
            >
              Previous
            </button>
          </Link>

          {/* Next Button */}
          <Link href={`/chapters/${chapter.chapter_number + 1}`} passHref>
            <button
              className={`px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors ${chapter.chapter_number === 18 ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={chapter.chapter_number === 18}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
