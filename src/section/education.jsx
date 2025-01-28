import React from "react";

function Education() {

  return (
    <section id="Journey" className="">
          <h2 className="text-4xl md:text-5xl font-bold text-center pb-3 mb-9 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Journey
        </h2>
        <ul class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
            <li>
                <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
                </div>
                <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic">2024 - 2025</time>
                <div class="text-lg font-black">Internship For Frontend Developer</div>
                    <div className="text-justify">
                        I worked as a Frontend Developer Intern at Studio20, located in APW, Bangsar for 3 months. My main responsibilities included maintaining websites by managing staging and live environments, as well as developing new website blocks using WordPress, Advanced Custom Fields (ACF), and Custom Post Types (CPT).
                        During my internship, I was exposed to various technologies, including Swiper.js and Alpine.js, which allowed me to create dynamic, interactive components. I contributed to major projects for clients like <b><i>DRB-HICOM</i></b> and <b><i>HONDA BOON SIEW</i></b>, gaining valuable experience in delivering high-quality web solutions for corporate clients.
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
                </div>
                <div class="timeline-end md:mb-10">
                <time class="font-mono italic">2023 - Present</time>
                <div class="text-lg font-black">Diploma In Information Technology (TARUMT)</div>
                During my diploma studies, I was exposed to various programming languages, including Java, PHP, C, and SQL databases. I also participated in group projects, where I honed my skills in collaboration, team communication, and problem-solving, working closely with peers to deliver functional and efficient solutions.,
                </div>
                <hr />
            </li>
        </ul>
    </section>
  );
}

export default Education;