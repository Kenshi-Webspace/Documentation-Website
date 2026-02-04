export const dataList = [
    {
        id: 1,
        heading: "This is just a dummy data",
        subHeading: "Soon these docs will be replaced",
        content: "Web Page under development!",
        code:
            `
    function haha(){
        console.log("This is a fucky fucntion!");
    }
    `
    },
    {
        id: 2,
        heading: "Introduction",
        subHeading: "Getting started",
        content: `
        This section gives a brief introduction to the topic.
        <ul>
            <li>Purpose of this guide</li>
            <li>Who should read this</li>
            <li>What you will learn</li>
        </ul>
    `,
    },
    {
        id: 3,
        heading: "Core Concepts",
        subHeading: "Understanding the foundation",
        content: `
        Before diving deeper, it's important to understand the basics.
        <ul>
            <li>Key terminology</li>
            <li>How the system works</li>
            <li>Common misconceptions</li>
        </ul>
    `,
    },
    {
        id: 4,
        heading: "Basic Example",
        subHeading: "A simple demonstration",
        content: "Below is a minimal example showing how the concept is applied.",
        code: `
    function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3)); // 5
    `
    },
    {
        id: 5,
        heading: "Data Flow",
        subHeading: "How information moves",
        content: `
        Understanding data flow helps in debugging and optimization.
        <ul>
            <li>Input handling</li>
            <li>Processing logic</li>
            <li>Output generation</li>
        </ul>
    `,
    },
    {
        id: 6,
        heading: "Error Handling",
        subHeading: "Dealing with unexpected cases",
        content: "Always anticipate edge cases and handle errors gracefully.",
        code: `
    function divide(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed";
        }
        return a / b;
    }

    console.log(divide(10, 2));
    `
    },
    {
        id: 7,
        heading: "Optimization Tips",
        subHeading: "Making things faster",
        content: `
        Small improvements can have a big impact on performance.
        <ul>
            <li>Avoid unnecessary computations</li>
            <li>Reuse logic where possible</li>
            <li>Keep memory usage low</li>
        </ul>
    `,
    },
    {
        id: 8,
        heading: "Reusable Functions",
        subHeading: "Write once, use everywhere",
        content: "Modular code improves maintainability and readability.",
        code: `
    function formatName(firstName, lastName) {
        return \`\${firstName} \${lastName}\`;
    }

    console.log(formatName("Abhishek", "Mathur"));
    `
    },
    {
        id: 9,
        heading: "Best Practices",
        subHeading: "Writing clean code",
        content: `
        Clean code is easier to understand and extend.
        <ul>
            <li>Consistent naming conventions</li>
            <li>Clear function responsibilities</li>
            <li>Proper comments where necessary</li>
        </ul>
    `,
    },
    {
        id: 10,
        heading: "Summary",
        subHeading: "Wrapping things up",
        content: `
        This section summarizes everything covered so far.
        <ul>
            <li>Reviewed core ideas</li>
            <li>Explored examples</li>
            <li>Learned best practices</li>
        </ul>
    `,
    }

]

