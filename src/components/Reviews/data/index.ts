import Ev from "./avatarImages/Ev.jpeg";
import Vasiliy from "./avatarImages/Vasiliy.jpeg";
import George from "@/components/Reviews/data/avatarImages/George.jpeg";


export type Profile = {
    name: string;
    position: string;
    avatar: string;
    profileLink: string;
}

export type Review = {
    profile: Profile;
    review: string[];
}

export const ReviewsData: Review[] = [
    {
        profile: {
            name: "Evelyn Stender",
            position: "Senior Software Engineer at Goji",
            avatar: Ev.src,
            profileLink: "https://www.linkedin.com/in/evelyn-stender/"
        },
        review: ["I really enjoyed working with Denis. He's a great Frontend Web Developer who knows a lot about HTML, CSS, JavaScript, TypeScript, React, Next.js, and more. He is good at making interesting and working websites. He is also really good with Redux, Jest, Cypress, Prismic CMS, and Algolia React components."
            ,
            "Denis is great at solving problems. He can always find out what's going wrong and fix it. This helped us a lot in our projects. He likes to join in when we're thinking of new ideas and his thoughts have really helped our team do well."
            ,
            "Something special about Denis is the way he thinks about his work. He knows that everything in a project is connected and he ensures his work fits in well with everything else. He always wants to keep learning and stay up-to-date with what's new in his field."
        ]
    },
    {
        profile: {
            name: "Vasiliy Ledovsky",
            position: "Graphic & Web Designer at inploi",
            avatar: Vasiliy.src,
            profileLink: "https://www.linkedin.com/in/vledov/"
        },
        review: ["It would be difficult to count how many hours I've spent paired with Denis and I can confidently say that he is a dream companion for a product designer!"
            ,
            "He is always ready to patiently explain all technical aspects and offer a creative solution to any problem. Frankly speaking, I think he has a solution for any challenge, as I've never heard him saying \"no, it's impossible\"."
            ,
            "Denis doesn't just develop solutions for isolated problem, his holistic approach allows him to look at the problem from above and come up with a solution that is flexible, reliable, efficient and fits perfectly into the project as a whole. This is very important in inploi projects, as each solution must fit different clients with completely different branding."
            ,
            "I'm sure Denis will be a great addition to any team and project!",
            "And will also help any product designer to become a bit better by passing on his superb knowledge"]
    },
    {
        profile: {
            name: "George Taylor",
            position: "Product manager at inploi",
            avatar: George.src,
            profileLink: "https://www.linkedin.com/in/hellogeorgetaylor/",
        },
        review: ["Denis is an exceptional front-end developer, whose knowledge and helpfulness have been invaluable assets to our team."
            ,
            "Denis is a problem-solver by nature. He thrives on tackling complex challenges and finding innovative solutions to them. His ability to dissect problems, identify root causes, and implement effective solutions has been instrumental in overcoming various hurdles throughout our projects."
            ,
            "One of Denis's strongest qualities is his willingness to contribute ideas and collaborate with the team to find the best solutions. He actively participates in brainstorming sessions, offering valuable insights and perspectives that lead to more robust outcomes. Denis's proactive approach and eagerness to share his expertise enrich our team dynamics and contribute to our collective success."
            ,
            "Denis possesses a strong understanding of how front-end development supports and integrates with other development services. He recognises the interconnectedness of different components within a project and ensures that his work aligns seamlessly with the broader objectives and functionalities. His holistic approach to development enhances the overall quality and efficiency of our projects."
            ,
            "Denis's contributions have been invaluable to our projects at inploi and I have no hesitation in recommending Denis for future roles and projects."]
    }

];