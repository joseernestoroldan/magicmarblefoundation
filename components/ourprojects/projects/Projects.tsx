"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectsProps, QueryType } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const Projects = ({ projects, bg, color }: ProjectsProps) => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {projects.map((project: QueryType) => {
        const { _id, mainImage, hotSpotMain, title, description } = project;
        const x = (hotSpotMain?.x ?? 0.5) * 100;
        const y = (hotSpotMain?.y ?? 0.5) * 100;

        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 1 }}
            key={_id}
          >
            <Link href={`projects/project/${_id}`}>
              <div
                className={`m-4 w-[18rem] h-[20rem] md:w-[28rem]  md:h-[30rem] flex items-center flex-col space-y-2 rounded-xl overflow-hidden bg-white ${color} border-card shadow-md hover:shadow-lg  hover:brightness-90`}
              >
                <div
                  className={`sm:w-[28rem] w-[18rem] sm:h-[26rem] h-[20rem] relative overflow-hidden rounded-2xl`}
                >
                  <Image
                    className={`object-cover`}
                    src={mainImage ?? "/no-profile.webp"}
                    fill
                    alt="magic marble foundation diaries"
                    priority={true}
                    style={{ objectPosition: `${x}% ${y}%` }}
                  />
                </div>

                <h2 className="h-8 text-xl font-bold text-gray-500 text-center">
                  {title}
                </h2>
                <p className="h-8 text-base font-bold text-gray-500 text-center">
                  {description}
                </p>

                <Button className="text-cyan-500 text-lg">Learn More</Button>
              </div>{" "}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
