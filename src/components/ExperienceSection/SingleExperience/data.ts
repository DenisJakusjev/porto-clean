import Inploi from "@/components/ExperienceSection/SingleExperience/CompanyIcons/Inploi.png";
import ByRotation from "@/components/ExperienceSection/SingleExperience/CompanyIcons/ByRotation.png";
import EvenMore from "@/components/ExperienceSection/SingleExperience/CompanyIcons/EvenMore.png";
import Ungapped from "@/components/ExperienceSection/SingleExperience/CompanyIcons/ungapped.png";

export type SingleExperience = {
    companyName: string;
    link: string;
    icon: any;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    techStack: string[];
}

const data: SingleExperience[] = [
    {
        companyName: "Inploi",
        link: "https://inploi.com",
        icon: Inploi,
        position: "FrontEnd Engineer",
        startDate: "Sep 2021",
        endDate: "March 2024",
        description: "As a full-time Front-end Engineer at Inploi, I functioned as the primary developer on the project, working closely with the director who was the lead developer at the beginning. Together, we built the project from the ground up, experimenting with different technologies and frameworks to determine the optimal stack for our needs. My main responsibilities included writing the project from scratch and conducting extensive testing of various frameworks to identify the most suitable options for our project.",
        techStack: ["TypeScript", "Next","JSX", "Redux","Styled-Components", "Motion", "Algolia", "MapBox","HTML", "CSS", "Jest", "Cypress", "Prismic CMS", "GitHub"]
    },
    {
        companyName: "ByRotation",
        link: "https://byrotation.com",
        icon: ByRotation,
        position: "FrontEnd Engineer",
        startDate: "May 2022",
        endDate: "May 2023",
        description: "In my role as a Front-end Engineer at ByRotation, I initially focused on building a chat feature for the admin panel. This involved utilizing GraphQL queries with hydration to avoid the need for live servers. The chat feature was not limited to simple message exchanges but also included functionalities such as sharing links to products within the project Subsequently, I contributed to other aspects of the project, both in terms of UI enhancements and integrating Algolia. Additionally, I delved into React-Native development for Android, broadening my skill set and contributing to the project's cross-platform functionality.",
        techStack: ["TypeScript", "Next", "JSX","Styled-Components", "Material-ui", "Motion", "Algolia", "React-Native" ,"GitLabs"]
    },
    {
        companyName: "EvenMore",
        link: "https://evenmore.tech/",
        icon: EvenMore,
        position: "FrontEnd Engineer",
        startDate: "Sep 2018",
        endDate: "Jul 2022",
        description: "As EvenMore is a consulting firm, my experience there involved working on various projects rather than being assigned to specific companies. Within a short period, I had the opportunity to contribute to a diverse range of projects and technologies, significantly expanding my skill set as a developer. Among the notable projects I worked on were a food ordering and delivery web application, a cryptocurrency wallet, and a web store for medical supplies. These experiences allowed me to gain insights into different industries and technologies, enriching my development capabilities and broadening my professional horizon.",
        techStack: ["TypeScript", "React", "Next", "REST API", "HTML", "CSS","Jest","Cypress", "Firebase", "Redux", "GitHub", "GitLabs"]
    },
    {
        companyName: "Ungapped",
        link: "https://ungapped.com/",
        icon: Ungapped,
        position: "FrontEnd Trainee",
        startDate: "Sep 2017",
        endDate: "March 2018",
        description: "The project was all about React. My job was to create a whole system from scratch that allowed some company that did hold a speaking event to have their own presentation with polls where the audience could vote if they were connected(QRCode connection). Audience could send questions to the speaker and those questions had to go thro moderation(accept/decline). All of those pools had to be stored in DB and questions/answers as well because the company was working a lot with statistics. I used Asp.net Entity db connection model for the DB connection, SignalR to have live server connection between ReactTS and Asp.net DB.",
        techStack: ["React", "TypeScript", "HTML","CSS", "ASP.net", "MongoDB", "Socket.io"]
    }
];