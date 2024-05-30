import { useEffect, useState } from "react";
import supabase from "@/components/connectionSupabase";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Title } from "@/components/ui/title";

interface Experience {
  id: number;
  created_at: string;
  name: string;
  location: string;
  logo: string;
  start_date: string;
  end_date: string;
  description: string[];
}

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchExperiences() {
      const { data: experiences, error } = await supabase
        .from("experiences")
        .select("*")
        .order("end_date", { ascending: false });
      if (error) console.error(error.message);
      setExperiences(experiences || []);
    }
    fetchExperiences();
  }, []);

  const formatDate = (date: string) => {
    return (
      format(new Date(date), "MMMM yyyy").charAt(0).toUpperCase() +
      format(new Date(date), "MMMM yyyy").slice(1)
    );
  };

  return (
    <section id="experiences" className="p-12">
      <Title text="My experiences" />
      <div className="flex flex-col items-center gap-4 m-4">
        {experiences.map((experience) => (
          <Card key={experience.id} className="sm:w-[500px] md:w-[700px]">
            <CardHeader>
              <CardTitle>
                <div className="flex gap-4 items-center">
                  {experience.logo && (
                    <Image
                      src={experience.logo}
                      alt={experience.name}
                      width={50}
                      height={50}
                      className="h-auto w-auto"
                    />
                  )}
                  <p>{experience.name}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc mx-4">
                {experience.description.map((desc, index) => (
                  <li key={index} className="text-gray-400">
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <div className="text-gray-400 bg-white/[.1] px-2 py-1 rounded-lg flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  <p className="text-start">
                    {formatDate(experience.start_date)}
                    {experience.start_date !== experience.end_date &&
                      ` - ${formatDate(experience.end_date)}`}
                  </p>
                </div>
                <div className="text-gray-400 bg-white/[.1] px-2 py-1 rounded-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p>{experience.location}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
