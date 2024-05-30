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
import { CalendarDays, MapPin } from "lucide-react";
import { Title } from "@/components/ui/title";

interface Schools {
  id: number;
  created_at: string;
  name: string;
  location: string;
  logo: string;
  start_date: string;
  end_date: string;
  description: string;
}

export default function Schools() {
  const [schools, setSchools] = useState([] as Schools[]);
  useEffect(() => {
    async function fetchSchools() {
      let { data: schools, error } = await supabase
        .from("schools")
        .select("*")
        .order("end_date", { ascending: false });
      setSchools(schools as Schools[]);
    }
    fetchSchools();
  }, []);
  return (
    <section id="schools" className="p-12">
      <Title text="My schools" />
      <div className="flex flex-col items-center gap-4 m-4">
        {schools?.map((school) => (
          <Card key={school.id} className="sm:w-[500px] md:w-[700px]">
            <CardHeader>
              <CardTitle>
                <div className="flex gap-4 items-center">
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={50}
                    height={50}
                    className="h-auto w-auto"
                  />
                  {school.name}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col m-2">
                <p className="text-gray-400">{school.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <div className="text-gray-400 bg-white/[.1] px-2 py-1 rounded-lg flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  <p className="text-start">
                    {new Date(school.start_date).getFullYear()} -{" "}
                    {new Date(school.end_date).getFullYear()}{" "}
                  </p>
                </div>
                <div className="text-gray-400 bg-white/[.1] px-2 py-1 rounded-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p>{school.location}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
