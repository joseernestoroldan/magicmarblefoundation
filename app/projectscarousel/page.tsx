import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import { getAllData } from "@/client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import EnterElement from "@/components/animations/enterElement/EnterElement";

const ProjectsCarouselPage = async () => {
  const projects = await getAllData("projects");

  return (
    <EnterSection>
      <div className="pt-4 flex flex-col w-full">
        <HeadingCenterAnimation>
          <Heading
            title="Our Projects"
            color="text-cyan-500"
            shadow=""
            textSize="text-5xl"
            center="flex justify-center "
          />
          <EnterElement>
            <div className="relative w-full h-[600px] flex justify-center overflow-hidden pb-24">
              <Carousel className="w-full max-w-[350px] min-[425px]:max-w-[423px] md:max-w-[766px] lg:max-w-[900px] text-cyan-600 font-bold">
                <CarouselContent className="rounded-2xl">
                  {projects.map((project: any, index: number) => (
                    <CarouselItem key={index} className="border-0 rounded-2xl">
                      <div className="p-0">
                        <Card className=" border-0 rounded-2xl">
                          <CardContent className="flex aspect-video items-center justify-center p-0 w-full h-[600px] border-0 rounded-2xl">
                            <div className="text-4xl font-semibold w-full h-full relative">
                              <div className="absolute z-10 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-5 bottom-10  flex flex-col md:flex-row justify-start md:justify-between items-center w-full">
                                <div className=" bg-black bg-opacity-70 w-[300px] min-[425px]:w-[400px] p-4 rounded-2xl space-y-4">
                                  <h1 className="text-white text-xl min-[425px]:text-2xl font-bold w-full text-center">
                                    {project.title}
                                  </h1>
                                  <p className="text-white text-base min-[425px]:text-lg font-medium text-wrap w-full indent-4">
                                    {project.description}
                                  </p>
                                  <div className="flex justify-around items-center">
                                    <Link
                                      href={`projects/project/${project._id}`}
                                    >
                                      <p className="text-cyan-300 text-base  font-bold underline">
                                        About This Project
                                      </p>
                                    </Link>
                                    <Link href={`projects`}>
                                      <p className="text-cyan-300 text-base  font-bold underline">
                                        More Projects
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="m-4 flex justify-center">
                                  <Link href={"/donations"}>
                                    <Button>Donate</Button>
                                  </Link>
                                </div>
                                </div>
                   
                              </div>

                              <Image
                                className="object-top object-cover rounded-2xl"
                                src={project.mainImage}
                                fill
                                alt={project.title}
                                priority={true}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </EnterElement>
        </HeadingCenterAnimation>
      </div>
    </EnterSection>
  );
};

export default ProjectsCarouselPage;
