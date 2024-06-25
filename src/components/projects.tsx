"use client";
import { useEffect, useState } from "react";
import useSupabase from "@/hooks/useSupabase";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/title";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  created_at: string;
  illustration: string;
}

export default function Projects() {
  const [projects, setProjects] = useState([] as Project[]);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();
  useEffect(() => {
    async function fetchData() {
      let { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      setProjects(projects as Project[]);
      setLoading(false);
    }
    fetchData();
  }, [supabase]);
  return (
    <section id="projects" className="p-12">
      <div>
        <Title text="My projects" />
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {loading && (
            <Card className="max-w-96">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-8 w-[250px]" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-48 w-[320px]" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-6 w-[200px]" />
              </CardFooter>
            </Card>
          )}
          {projects?.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="max-w-96" key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Image
                      src={project.illustration}
                      alt={project.title}
                      sizes="100vw"
                      className="w-full h-auto"
                      width={500}
                      height={300}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-gray-400 bg-white/[.1] px-2 py-1 rounded-lg flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>
                      Published on{" "}
                      {format(new Date(project.created_at), "dd MMMM yyyy")}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
