import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-500 to-yellow-500 py-12 text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">Subscribe to our newsletter to get updates.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="email"
                                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="hover:underline hover:text-blue-500">Home</a>
                            <a href="#" className="hover:underline hover:text-blue-500">Who We Are</a>
                            <a href="#" className="hover:underline hover:text-blue-500">Our Philosophy</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Industries</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                            <a href="#" className="hover:underline hover:text-blue-500">Information Technology</a>
                            <a href="#" className="hover:underline hover:text-blue-500">Finance & Insurance</a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
                    </a>

                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 hover:text-blue-500" aria-label="Reddit">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14.0002 8.6367 13.681 8.488 13.122C8.33929 12.563 8.56316 12.0344 9.027 11.843C9.47916 11.6701 10.0208 11.8999 10.183 12.358C10.3455 12.817 10.1231 13.3193 9.666 13.5C9.54413 13.575 9.41167 13.6 9.28 13.6C9.12 13.6 9 13.485 9 13.35C9 13.215 9.10657 13.1008 9.222 13.071C9.45678 13.0188 9.61633 12.8385 9.667 12.587C9.71767 12.3355 9.66857 12.0782 9.527 11.879C9.356 11.653 9.076 11.607 8.858 11.747C8.559 11.932 8.687 12.137 9.032 12.111C9.232 12.054 9.416 12.21 9.45 12.42C9.497 12.626 9.642 12.76 9.796 12.844C9.961 12.9207 10.1185 12.995 10.28 13.08C10.524 13.202 10.682 13.48 10.79 13.767C10.8966 14.039 10.8583 14.317 10.721 14.55C10.5919 14.7674 10.352 14.887 10.106 14.938C9.97924 14.9687 9.85327 14.969 9.728 14.938C9.50067 14.8553 9.30342 14.651 9.214 14.424C9.18457 14.3356 9.13 14.2416 9.07 14.171C9.10626 14.1469 9.15874 14.0993 9.23 14C9.36563 14 9.53999 14 9.67 14Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer