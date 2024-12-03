"use client"
import acmeLogo from "@/assets/logo-acme.png"
import quantunLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <>
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">

        <motion.div className="flex gap-14 flex-none pr-14"
        animate={{
          translateX: "-50%"
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        >
          <Image className="logo-ticker-image" src={acmeLogo} alt="acme" />
          <Image className="logo-ticker-image" src={quantunLogo} alt="quantunLogo" />
          <Image className="logo-ticker-image" src={echoLogo} alt="echoLogo" />
          <Image className="logo-ticker-image" src={celestialLogo} alt="celestialLogo" />
          <Image className="logo-ticker-image" src={pulseLogo} alt="pulseLogo" />
          <Image className="logo-ticker-image" src={apexLogo} alt="apexLogo" />

{/* Second set of logos */}
          <Image className="logo-ticker-image" src={acmeLogo} alt="acme" />
          <Image className="logo-ticker-image" src={quantunLogo} alt="quantunLogo" />
          <Image className="logo-ticker-image" src={echoLogo} alt="echoLogo" />
          <Image className="logo-ticker-image" src={celestialLogo} alt="celestialLogo" />
          <Image className="logo-ticker-image" src={pulseLogo} alt="pulseLogo" />
          <Image className="logo-ticker-image" src={apexLogo} alt="apexLogo" />
        
        </motion.div>
        </div>

      </div>

    </div>
    </>
  )
};
