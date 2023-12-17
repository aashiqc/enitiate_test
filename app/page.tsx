"use client";

import React from "react";
import Image from "next/image";
import Container from "./components/Container";
import hero from "../public/hero_image-01.svg";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import HomeLayout from "./components/layouts/HomeLayout";
import "aos/dist/aos.css";
import AOS from "aos";

const HomePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/posts");
  };

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <HomeLayout>
      <section className="w-full h-screen pt-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-2 py-5">
            <div className="flex flex-row items-center gap-5 md:gap-32 md:w-1/2">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                
                className="text-white text-center md:text-start text-4xl md:text-5xl lg:text-7xl font-bold"
              >
                Explore, Connect and share your thoughts
              </h1>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000"
                 data-aos-delay="100" className="flex items-center justify-center md:w-1/2">
              <Image className="object-fill" src={hero} alt="hero" />
            </div>
          </div>
          <div className="flex items-center md:items-start justify-center md:justify-start">
            <div data-aos="fade-up"
                data-aos-duration="1000"
                 data-aos-delay="100" className="flex w-[200px]">
              <Button label="All posts" onClick={handleClick} />
            </div>
          </div>
        </Container>
      </section>
    </HomeLayout>
  );
};

export default HomePage;
