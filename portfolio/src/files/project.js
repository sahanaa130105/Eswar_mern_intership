import React from "react";
import "./project.css";

export const Project = () => {
  const projects = [
    {
      title: "Library Management System",
      description:
        "A Library Management System (LMS) is a software application designed to manage and automate the various tasks and processes involved in running a library efficiently. It serves as a centralized platform for librarians to organize, catalog, and track library resources, as well as facilitate user interactions with those resources.",
      technologies: ["C", "CSS", "HTML", "JavaScript"],
    },
    {
      title: "Cost Analysis And Expense Management",
      description:
        "The primary objective of the Cost Analysis and Expense Management module is to provide a comprehensive system for tracking, analyzing, and optimizing vehicle-related expenses, including fuel, maintenance, insurance, and repairs. By categorizing expenses and aggregating data, the module aims to deliver actionable insights that support better decision-making, cost savings, and operational efficiency.",
      technologies: ["DBMS", "Java"],
    },
    {
      title: "Real Time Chat Application",
      description:
        "The Real-Time Chat Application is designed to provide seamless communication between users, enabling private messaging and group chats. It serves as a dynamic platform for instant and reliable interaction, catering to personal, professional, and collaborative needs.",
      technologies: ["DBMS", "Java"],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
