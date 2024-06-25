import { Linkedin, Github, Mail } from "lucide-react";
import { Title } from "@/components/ui/title";
import Link from "next/link";

export default function Socials() {
  return (
    <section id="socials" className="p-12">
      <Title text="My socials" />
      <div className="flex justify-center items-center gap-4">
        <Link href="https://nathanguianvarch.fr/linkedin">
          <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
            <Linkedin className="w-14 h-14" />
          </div>
        </Link>
        <Link href="https://nathanguianvarch.fr/github">
          <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
            <Github className="w-14 h-14" />
          </div>
        </Link>
        <Link href="mailto:jonathan.m.s.s@gmail.com">
          <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
            <Mail className="w-14 h-14" />
          </div>
        </Link>
      </div>
    </section>
  );
}
