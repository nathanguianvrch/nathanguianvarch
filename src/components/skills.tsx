"use client";
import { useEffect, useState } from "react";
import supabase from "@/components/connectionSupabase";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/title";

interface SkillsTypes {
  id: number;
  created_at: string;
  title: string;
  icon: string;
}
interface Skills {
  id: number;
  created_at: string;
  title: string;
  icon: string;
  type: number;
}

export default function Skills() {
  const [skills_types, setSkills_types] = useState([] as SkillsTypes[]);
  const [skills, setSkills] = useState([] as Skills[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkillsTypes() {
      let { data: skills_types, error } = await supabase
        .from("skills_types")
        .select("*")
        .order("id");
      setSkills_types(skills_types as SkillsTypes[]);
    }
    async function fetchSkills() {
      let { data: skills, error } = await supabase
        .from("skills")
        .select("*")
        .order("id");
      setSkills(skills as Skills[]);
      setLoading(false);
    }
    fetchSkillsTypes();
    fetchSkills();
  }, []);
  return (
    <section id="skills" className="p-12">
      <div>
        <Title text="My skills" />
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {loading && (
            <Card className="max-w-96">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-center items-center gap-2">
                    <Skeleton className="h-8 w-[150px]" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 w-64">
                  {[1, 2, 3].map((i) => (
                    <div
                      className="flex hover:bg-slate-800 px-4 py-2 rounded-lg border flex-wrap gap-2 items-center"
                      key={i}
                    >
                      <div className="flex gap-2">
                        <Skeleton className="h-[28px] w-[28px] rounded-full" />
                        <Skeleton className="h-6 w-[150px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {skills_types?.map((skill_type) => (
            <motion.div
              key={skill_type.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="max-w-96" key={skill_type.id}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-center items-center gap-2">
                      {skill_type.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2 w-64">
                    {skills
                      .filter((skill) => skill.type === skill_type.id)
                      .map((skill) => (
                        <div
                          key={skill.id}
                          className="flex hover:bg-slate-800 px-4 py-2 rounded-lg border flex-wrap gap-2 items-center"
                        >
                          {/*<Image
                          src={skill.icon ? skill.icon : "/icons/unknown.svg"}
                          width={28}
                          height={28}
                          alt="aa"
                    />*/}
                          {skill.icon && (
                            <Image
                              src={skill.icon}
                              width={28}
                              height={28}
                              alt="Icon"
                              className="fill-white"
                            />
                          )}
                          <p>{skill.title}</p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
