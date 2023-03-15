import type { Project } from "../types"
import { useState } from "react"
import { AnchorButton } from "./AnchorButton"

interface ProjectsProps {
  projects: Project[]
}

type StatedProject = Omit<Project, "image">
const extractProject = (project: Project): StatedProject => ({
  name: project.name,
  description: project.description,
  screenshot: project.screenshot,
  link: project.link,
  repository: project.repository
})

export function Projects({ projects }: ProjectsProps) {
  const initialProject = projects[0]
  const [currentProject, setCurrentProject] = useState(
    extractProject(initialProject)
  )

  function chooseProject(index: number) {
    setCurrentProject(extractProject(projects[index]))
  }

  return (
    <>
      <div className="flex flex-wrap xlg:grid xlg:grid-cols-2 gap-6 h-fit">
        {projects.map((project, index) => (
          <button
            key={index}
            className="project-thumb p-1 w-20 aspect-square border-2 border-green-500 cursor-pointer focus-visible:outline-dashed focus-visible:outline-[3px] focus-visible:outline-green-500 focus-visible:outline-offset-4"
            onClick={() => chooseProject(index)}
          >
            <img
              className="w-full aspect-square"
              src={project.image}
              alt={project.name}
            />
          </button>
        ))}
      </div>
      <div className="project-view flex flex-wrap items-start gap-10">
        <div
          id="project-img"
          className="p-2 max-w-[24rem] md:w-[24rem] w-full aspect-square border-2 border-green-500"
        >
          <img
            className="w-full aspect-square"
            src={currentProject.screenshot}
            alt={currentProject.name}
          />
        </div>
        <div className="project-content">
          <h2 className="mb-2 text-4xl text-green-400">{currentProject.name}</h2>
          <p className="max-w-[30ch] text-xl">{currentProject.description}</p>
          <div className="flex flex-wrap gap-5 mt-5">
            {currentProject.repository && (
              <AnchorButton
                href={currentProject.repository}
                text="Repository"
              />
            )}
            <AnchorButton href={currentProject.link} text="Demo" />
          </div>
        </div>
      </div>
    </>
  )
}
