
export const skills = [
    // Frontend Skills
    { name: "HTML", category: "frontend", icon: "/skillIcons/html/html2.svg" },
    { name: "CSS", category: "frontend", icon: "/skillIcons/css/css1.svg" },
    { name: "JavaScript", category: "frontend", icon: "/skillIcons/javascript/javascript1.svg" },
    { name: "React.js", category: "frontend", icon: "/skillIcons/react/react1.svg" },
    { name: "Tailwind CSS", category: "frontend", icon: "/skillIcons/tailwind/tailwind1.svg" },

    // Backend Skills
    { name: "Node.js", category: "backend", icon: "/skillIcons/node/node2.svg" },
    { name: "Express.js", category: "backend", icon: "/skillIcons/express/express1.svg" },
    { name: "SQL / MySQL", category: "backend", icon: "/skillIcons/sql/sql3.svg" },
    { name: "MongoDB", category: "backend", icon: "/skillIcons/mongodb/mongodb2.svg" },
    { name: "Aggregation Pipeline", category: "backend", icon: "/skillIcons/mongodb/aggregationpipeline1.svg" },
    { name: "Mongoose", category: "backend", icon: "/skillIcons/mongoose/mongoose1.svg" },

    // Tools
    { name: "Git", category: "tools", icon: "/skillIcons/git/git2.svg" },
    { name: "GitHub", category: "tools", icon: "/skillIcons/github/github1.svg" },
    { name: "Postman", category: "tools", icon: "/skillIcons/postman/postman1.svg" },
    { name: "Vercel", category: "tools", icon: "/skillIcons/vercel/vercel2.svg" },
    { name: "Vite", category: "tools", icon: "/skillIcons/vite/vite2.svg" },
    { name: "VS Code", category: "tools", icon: "/skillIcons/vscode/vscode2.svg" },
].map((skill, index) => ({
    ...skill,
    animation: index % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"
}))
