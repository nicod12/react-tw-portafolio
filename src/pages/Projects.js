import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { projectsData } from "../resources/projects";
import AOS from "aos";
AOS.init({ duration: 1000 });

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl semi-bold text-center">
            Good ideas are not adopted automatically. They must be driven into
            practice with corageous patience
          </p>
          <h1
            className="text-4xl text-center font-bold mt-5"
            data-aos="slide-up"
          >
            Because
          </h1>
        </div>
        <div className="font-bold text-center bg-orange-600 mx-20 p-20 text-white rounded-full sm:mx-5">
          <h1 className="text-8xl sm:text-3xl" data-aos="slide-left">
            THE GAME IS...
          </h1>
          <h1 className="text-8xl sm:text-3xl" data-aos="slide-right">
            CONSISTANCY
          </h1>
        </div>
      </div>

      <div className="grid mt-20 sm:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 sm:mx-5">
        {projectsData.map((project) => {
          const { title, image, description, link } = project;
          return (
            <div>
              <div className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img src={image} className="w-full h-52 text-center" />

                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                  <h1 className="text-4xl font-semibold text-white">{title}</h1>
                  <button className="border-2 rounded border-white py-2 hover:bg-red-600 px-5 mt-5 text-white">
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
