"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectsProps } from "@/types/types";
import Photo from "@/components/photo/photo";
import Link from "next/link";

const Projects = ({ projects, bg, color }: ProjectsProps) => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {projects.map((project: any) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 1 }}
          key={project._id}
        >
          <Link href={`projects/project/${project._id}`}>
            <div
              className={`m-4 w-[18rem] h-[20rem] md:w-[28rem]  md:h-[30rem] flex items-center flex-col space-y-2 rounded-xl overflow-hidden bg-white ${color} border-card shadow-md hover:shadow-lg  hover:brightness-90`}
            >
              <Photo
                width="sm:w-[28rem] w-[18rem] "
                height="sm:h-[26rem] h-[20rem]"
                alt=""
                src={project.mainImage}
                borderRadius=""
                objectFit="object-cover"
              />
              
              <h2 className="h-8 text-xl font-bold text-gray-500 text-center">
                {project.title}
              </h2>
              <p className="h-8 text-base font-bold text-gray-500 text-center">{project.description}</p>

              <Button className="text-cyan-500 text-lg">Learn More</Button>
            </div>{" "}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
