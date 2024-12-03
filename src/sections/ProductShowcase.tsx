"use client"
import ProductImage from "@/assets/product-image.png"
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
const {scrollYProgress} =  useScroll({
    target: sectionRef,
    offset:['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]) 

  return (
    <>
    <section ref={sectionRef} className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">

        <div className="flex justify-center">
        <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="section-title mt-5">A more effective way to track progress</h2>
        <p className="section-description mt-5 ">Effectively turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.</p>
        </div>
<div className="relative">

<Image src={ProductImage} alt="Product" className="mt-10" />
<motion.img
style={{
  translateY: translateY
}}
src={PyramidImage.src} alt="PyramidImage" height={262} width={262} className="absolute -right-36 -top-32 hidden md:block" />
<motion.img
style={{
  translateY: translateY
}}
src={TubeImage.src} alt="TubeImage" height={248} width={248} className="absolute bottom-24 -left-36 hidden md:block" />


</div>
      </div>

    </section>
    </>
  )
};
