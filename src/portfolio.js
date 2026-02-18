/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static image
};

const greeting = {
  username: "Abhishek",
  title: "HELLO, I'M ABHISHEK",
  subTitle: emoji(
    "A Final Year Undergraduate at IIT Kanpur Full Stack Developer | ML Enthusiast | Chess | building impactful projects with React, Django, Python and Deep Learning."
  ),
  resumeLink:
    "https://placement.iitk.ac.in/cdn/view/SPO-IITK_0016_220043_abhishek_kumar_bt_me_9b598d21b1ca46efa3f51066a51d5ded.pdf", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  profilePic: require("./assets/images/abhishek.jpeg")
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhishek78527",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-3a338a263/",
  gmail: "abhishekku22@iitk.ac.in",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER & ML ENGINEER WHO LOVES BUILDING IMPACTFUL SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop full-stack web applications using React, Node.js, REST APIs and MongoDB"
    ),
    emoji("⚡ Build and deploy Machine Learning & Deep Learning models using TensorFlow, Keras and Python"),
    emoji(
      "⚡ Create data pipelines, signal processing systems and ML frameworks for real-world engineering problems"
    ),
    emoji("⚡ Design and develop backend systems using Django with RBAC, OpenCV and automated workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "LaTeX",
      fontAwesomeClassname: "fas fa-file-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kanpur",
      logo: require("./assets/images/iitk.png"), // Add IITK logo in assets/images folder
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "2022 - Present",
      desc: "CPI: 7.3/10 | Final Year Undergraduate",
      descBullets: [
        "Relevant Courses: AI/ML for Designers, Machine Learning for Engineers, Fundamentals of Computing I & II, Robot Manipulators, Electric Vehicles",
        "Coordinator, Chess Club IIT Kanpur — Managing 20+ secretaries, 50K budget, organized global tournament with 6000+ participants"
      ]
    },
    {
      schoolName: "Sri Gandhi High School, Sitamarhi",
      logo: require("./assets/images/bseb.png"), // Add school logo or use a placeholder
      subHeader: "BSEB (Class XII)",
      duration: "2021",
      desc: "Percentage: 84.6%",
      descBullets: []
    },
    {
      schoolName: "NS DAV Public School, Sitamarhi",
      logo: require("./assets/images/cbse.png"), // Add school logo or use a placeholder
      subHeader: "CBSE (Class X)",
      duration: "2019",
      desc: "Percentage: 91%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development (React + Node + MongoDB)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Python & Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Development (Django + REST APIs)",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "New Business Development Intern",
      company: "JSW Energy",
      companylogo: require("./assets/images/jsw.png"), // Add JSW logo in assets/images
      date: "May 2025 – July 2025",
      descBullets: [
        "Conducted comparative technical analysis of Alkaline, PEM, AEM and SOEC Electrolyzers for green hydrogen plant.",
        "Visited operational electrolyzer plant, collaborated with 20+ engineers, reviewed 15+ P&IDs documentation",
        "Updated 50+ commissioning checklists and benchmarked 10+ critical parameters across 4 electrolyzer types",
        "Detected 18% potential cost reduction and delivered PEM-focused roadmap identifying supply-chain risks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/Econet.png"), // Add project screenshot
      projectName: "EchoNet – Share and Converse",
      projectDesc:
        "A LinkedIn-like networking platform with secure communication, real-time live chat, Group & Direct Messaging, and collaborative engagement features. Enabled 50+ concurrent users, reduced communication gaps by 40%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anvay.shop"
        }
      ]
    },
    {
      image: require("./assets/images/Gesturetalk.jpg"), // Add project screenshot
      projectName: "GestureTalk",
      projectDesc:
        "Real-time sign language to speech translation system using MediaPipe Hands, TensorFlow/Keras deep learning. Achieved 88% gesture-to-speech accuracy at 10-12 FPS with Gemini & Hugging Face APIs integration.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abhishek78527/GestureTalk"
        }
      ]
    },
    {
      image: require("./assets/images/ncc.png"), // Add project screenshot
      projectName: "NCC Portal Development",
      projectDesc:
        "Student Management Portal in Django automating registration, results, and OpenCV admit-card generation for 500+ students. Reduced NCC workload by 60% with RBAC controls and FPDF certificate generation.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abhishek78527/NCC-Portal"
        }
      ]
    },
    {
      image: require("./assets/images/ml.jpg"), // Add project screenshot
      projectName: "ML for Machinery Health Monitoring",
      projectDesc:
        "ML-based framework replicating NI LabVIEW functionality for machine health monitoring. Used XGBoost and 1D-CNN models for fault detection with vibration datasets, achieving performance comparable to NI LabVIEW.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abhishek78527"
        }
      ]
    },
    {
      image: require("./assets/images/microgripper.png"), // Add project screenshot
      projectName: "Compliant Microgripper for Flow Control",
       projectDesc:
        "Designed compact spiral-spring compliant microgripper with PID-based actuation for microfluidic control. 46×46×11 mm PLA+ gripper handling 4 mm tubes, durable 100,000 cycles. Lead-screw produced 440 N force, PID achieved stable performance.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abhishek78527/ME763-Project"
        }
      ]
    },
        {
      image: require("./assets/images/battlebot.jpg"), // Add project screenshot
     projectName: "Drona Battlebot",
      projectDesc:
        "Designed and fabricated combat-ready Battlebot with comprehensive CAD analysis in Fusion 360. Integrated Arduino-based control with motors and sensors, conducted 20+ test runs validating reliability and combat readiness.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abhishek78527"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Awards and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Chess Club Coordinator — IIT Kanpur",
      subtitle:
        "Led a 2-tier chess club with 20+ secretaries, managed 50K budget. Organized global intercollegiate chess tournament with 6000+ participants and INR 900K+ prize pool.",
      image: require("./assets/images/chess_club.png"),
      imageAlt: "Chess Club",
      footerLink: []
    },
    {
      title: "Multiple Sports Medals — IIT Kanpur",
      subtitle:
        "Earned Gold and Silver medals at Inferno tournaments (2022–2024), Bronze & Silver at Udghosh'23 and Udghosh'24. Captained Chess Team leading 50+ active players.",
      image: require("./assets/images/chess_medal.jpeg"),
      imageAlt: "Sports Achievement",
      footerLink: []
    },
    {
      title: "Chess.com Campus Ambassador",
      subtitle:
        "Served as Chess.com Campus Ambassador at IIT Kanpur — awarding memberships, promoting tournaments, and fostering chess community.",
      image: require("./assets/images/chess.png"),
      imageAlt: "Chess.com",
      footerLink: [
        {
          name: "Chess.com Profile",
          url: "https://www.chess.com/member/aaa_43"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9525803475",
  email_address: "abhishekku22@iitk.ac.in",
  personal_email: "abhishekkumar7852785@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  resumeSection,
  isHireable
};