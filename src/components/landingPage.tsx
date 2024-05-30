import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <section className="w-screen h-[calc(100vh-64px)] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex gap-6 sm:gap-8 md:gap-10 justify-center items-center">
          <div className="flex items-center text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Hi, I&apos;m{" "}
                <span className="inline-grid relative">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500 blur-xl absolute top-0 left-0 select-none">
                    Nathan Guianvarc&apos;h
                  </span>
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500 relative z-10">
                    Nathan Guianvarc&apos;h
                  </span>
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m a passionate web developer who loves creating beautiful
                and functional websites.
              </p>
            </div>
          </div>
          <div className="flex items-center text-center">
            <Image
              src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
              alt="portfolio"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
