import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex items-center h-16 px-16 md:px-16 border-b shadow-sm bg-slate-900"
    >
      <nav className="flex items-center space-x-4">
        <Link href="#">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
                alt="@nathanguianvarch"
              />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Nathan Guianvarch</span>
          </div>
        </Link>
      </nav>
      <nav className="ml-auto flex items-center space-x-2 hidden md:block">
        <Link href="#skills">Skills</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#socials">Contact</Link>
      </nav>
    </motion.header>
  );
}
type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a href={href} className="hover:bg-slate-800 px-3 py-1 rounded text-lg">
      {children}
    </a>
  );
};
