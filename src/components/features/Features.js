import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Drawing from my background in Business Administration, I specialize in crafting digital strategies that drive business growth and success. By combining market analysis with my expertise in web development, I help businesses establish a strong online presence and achieve their objectives."
         
        />
        <Card
          title="Web Development"
          des="As a full-stack web developer, I have the skills to bring your digital vision to life. From designing captivating user interfaces to building robust back-end systems, I create dynamic and scalable web solutions that meet your needs and exceed your expectations."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Combining my knowledge of business principles with my passion for design, I create user-centric experiences that delight and engage your audience. By understanding user behavior and preferences, I design intuitive interfaces that enhance usability and foster customer satisfaction."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="With my expertise in web development and server management, I provide reliable and secure hosting solutions for your website. From initial setup to ongoing maintenance, I ensure that your website is always accessible, fast-loading, and protected against security threats."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features