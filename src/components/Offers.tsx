import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Travel Enthusiast",
    quote: "Get Global made my dream vacation a reality! Their personalized recommendations and seamless booking process were truly remarkable.",
    metrics: [
      { label: "Destinations Visited", value: "12" },
      { label: "Customer Rating", value: "5/5" }
    ],
    image: "https://source.unsplash.com/100x100/?woman,portrait"
  },
  {
    id: 2,
    name: "Liam Johnson",
    role: "Adventure Seeker",
    quote: "The team at Get Global is fantastic! From planning to execution, everything was smooth, allowing me to focus on enjoying my journey.",
    metrics: [
      { label: "Adventures Completed", value: "8" },
      { label: "Support Satisfaction", value: "99%" }
    ],
    image: "https://source.unsplash.com/100x100/?man,portrait"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Family Traveler",
    quote: "Our family trip was unforgettable thanks to Get Global. The curated packages and support exceeded all expectations!",
    metrics: [
      { label: "Trips Booked", value: "5" },
      { label: "Family Rating", value: "4.9/5" }
    ],
    image: "https://source.unsplash.com/100x100/?family,portrait"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const cardsToShow = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - cardsToShow;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="mx-auto px-4 py-8 lg:mt-16 mt-8">
      <h2 className="lg:text-5xl text-3xl font-bold mb-10 text-blue-900 ml-5 lg:max-w-xl">
        Hear the testimony of our loyal customers.
      </h2>

      <div className="relative">
        {currentIndex > 0 && (
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <i className="fas fa-arrow-left w-6 h-6 text-blue-600"></i>
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <i className="fas fa-arrow-right w-6 h-6 text-blue-600"></i>
          </button>
        )}

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 px-3 ${isMobile ? 'w-full' : 'w-1/2'}`}
              >
                <div
                  className={`p-8 rounded-xl h-full ${
                    index % 2 === 0 ? 'bg-blue-800' : 'bg-blue-600'
                  }`}
                >
                  <div className="flex flex-col h-full items-center">
                    {/* Circular Image */}
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} portrait`}
                      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                    />

                    <blockquote className="text-white text-xl mb-8 flex-grow text-center">
                      {testimonial.quote}
                    </blockquote>

                    <div className="text-white text-center">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-white/80">{testimonial.role}</p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20">
                      <p className="text-white/80 mb-4">Highlights</p>
                      <div className="grid grid-cols-2 gap-4">
                        {testimonial.metrics.map((metric, i) => (
                          <div key={i}>
                            <p className="text-2xl font-bold text-white">
                              {metric.value}
                            </p>
                            <p className="text-white/80 text-sm">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
