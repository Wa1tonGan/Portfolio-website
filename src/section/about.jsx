import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
            {/* Profile Image */}
            <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden mx-auto">
              <img
                src="your-profile-image.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
    
            {/* About Text */}
            <div className='mr-4'>
              <h2 className="text-4xl font-bold text-blue-500">
                About Me
              </h2>
              <p className="mt-4 text-gray-700 text-justify">
              I’m Gan, a student passionate about learning and growing in the tech world.I’m excited to dive deeper into development and ready to explore as many programming languages and technologies as possible, always eager to take on new challenges.
              </p>
              <br />
              <p>Outside of coding, I plenty of activities that help me stay creative and balanced. I’m looking forward to contributing my skills to impactful projects and growing as a developer.
              </p>
    
             
              
            </div>
          </div>
        </section>
      );
};

export default About;