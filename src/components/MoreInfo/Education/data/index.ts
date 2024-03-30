export type SingleEducation = {
    title: string;
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    link: string;
};

export const educationData: SingleEducation[] = [
    {
        title: "Front-end Developer",
        degree: "Professional Degree in Front-end development",
        school: "Nackademin(Sweden)",
        startDate: "Aug 2016",
        endDate: "Jun 2018",
        link: "https://nackademin.se/"
    }, {
        title: "C# & SharePoint Developer",
        degree: "Professional Degree in C# & SharePoint development",
        school: "Nackademin(Sweden)",
        startDate: "Aug 2014",
        endDate: "Jun 2016",
        link: "https://nackademin.se/"
    }
]