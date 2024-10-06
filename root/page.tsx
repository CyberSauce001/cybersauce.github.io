'use client'

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from './page.module.scss'
import Preloader from "./ui/sections/preloader/preloader";
import Lenis from "lenis";
import Hero from "./ui/sections/hero/hero";
import About from "./ui/sections/about/about";
import Blog from "./ui/sections/blog/blog";
import Resources from "./ui/sections/resources/resources";
import Footer from "./ui/sections/footer/footer";
import Cyber from "./ui/components/cyber/cyber";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect( () => {
    (
      async () => {
        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Hero />
        <About />
        <Cyber />
        <Blog />
        <Resources />
        <Footer />
      </main>
    </div>
  );
}
