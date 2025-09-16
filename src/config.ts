import { date } from "astro:schema";

export const siteConfig = {
  name: "Pratish Neerputh",
  title: "Electrical Engineer & Business Intelligence Engineer",
  description: "Portfolio website of Pratish Neerputh - Electrical Engineer specializing in Business Intelligence, Python development, and IoT solutions",
  accentColor: "#299ac7ff",
  social: {
    email: "pratz.neerputh@email.com",
    linkedin: "https://linkedin.com/in/kyroninja",
    twitter: "https://x.com/kyroninja",
    github: "https://github.com/kyroninja",
  },
  aboutMe:
    "Experienced Electrical Engineer and Business Intelligence Engineer with a passion for Python development, machine learning, and IoT solutions. Proven track record in hackathons, infrastructure maintenance, and developing innovative solutions for complex engineering challenges. Expertise in data analysis, automation systems, and electrical project management.",
  skills: [
    "Python",
    "Machine Learning", 
    "AI Chatbot",
    "IoT Design",
    "Business Intelligence",
    "Django",
    "Flask",
    "Embedded Systems",
    "AutoCAD",
    "MATLAB",
    "Simulink",
    "SAP",
    "Data Analytics",
    "Automation",
    "Electrical Engineering"
  ],
  projects: [
    {
      name: "EmpowerHer AI Hackathon - GBV Reporting Chatbot",
      description: "3rd place winner. Designed and implemented a WhatsApp chatbot for confidential workplace GBV reporting using AI and natural language processing.",
      link: "#", 
      skills: ["Python", "AI Chatbot", "WhatsApp API", "NLP"],
      year: "2024"
    },
    {
      name: "BCX Cloud Hackathon - Contextual LLM",
      description: "Implemented and deployed a Large Language Model with contextual training on documents using Alibaba Cloud for personalized responses.",
      link: "#",
      skills: ["Python", "LLM", "Alibaba Cloud", "Machine Learning"],
      year: "2023"
    },
    {
      name: "IoT Emergency Wearable Device",
      description: "Created a wearable IoT device that recognizes emergency movements and triggers alert calls through Twilio integration to emergency contacts.",
      link: "#",
      skills: ["IoT", "Python", "Twilio", "Embedded Systems"],
      year: "2023"
    },
    {
      name: "Microsoft Responsible AI Application",
      description: "Web-based Python/Django application using natural language generation and machine learning to promote diversity and dataset transparency.",
      link: "#",
      skills: ["Python", "Django", "Machine Learning", "NLP"],
      year: "2022"
    },
    {
      name: "Customer Personality Classification System",
      description: "Tweet-based customer personality classification for improved Freshdesk ticket resolution using machine learning algorithms.",
      link: "#",
      skills: ["Python", "Machine Learning", "Twitter API", "Data Analysis"],
      year: "2022"
    },
    {
      name: "CORTX and Filecoin Integration",
      description: "Integration of Filecoin and CORTX storage API providing decentralized file storage solution with fee-based retrieval system.",
      link: "#",
      skills: ["Python", "Blockchain", "API Integration", "Storage Systems"],
      year: "2022"
    },
    {
      name: "Cable Theft Detection System",
      description: "Computer vision system for identifying cable theft in images and alerting security/armed response teams in real-time.",
      link: "#",
      skills: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
      year: "2022"
    },
    {
      name: "Nifty - Music Synchronized Lighting App",
      description: "MTN App of the Year winner. Mobile application that synchronizes lights to background music using real-time audio analysis.",
      link: "#",
      skills: ["Python", "Audio Processing", "IoT", "Mobile Development"],
      year: "2022"
    },
    {
      name: "App/SMS Controlled E-Textile",
      description: "Smart textile system controlled via mobile app and SMS integration for wearable technology applications.",
      link: "#",
      skills: ["IoT", "Embedded Systems", "Textile Technology", "Mobile Integration"],
      year: "2022"
    },
    {
      name: "Scale Mini Cooper Control System",
      description: "Custom Arduino-based control system for vintage Mini Cooper with XBOX controller integration, featuring speed control and motor overdrive functionality.",
      link: "#",
      skills: ["Arduino", "Embedded Systems", "C++", "Hardware Design"],
      year: "2019"
    },
    {
      name: "In-Car HUD/Gaming System",
      description: "Raspberry Pi-based heads-up display for Mahindra Scorpio showing OBD-II data with integrated retro gaming system for passengers.",
      link: "#",
      skills: ["Raspberry Pi", "Python", "OBD-II", "Hardware Integration"],
      year: "2019"
    }
  ],
  experience: [
    {
      company: "Tevo Pty (Ltd)", 
      title: "Business Intelligence Engineer",
      dateRange: "June 2023 - Current",
      bullets: [
        "Design, develop, and maintain ETL processes for data extraction, transformation, and loading across multiple data sources",
        "Ensure data quality, consistency, and integrity through comprehensive data validation and cleansing procedures",
        "Develop and manage data warehouse solutions including dimensional modeling and star schema implementations",
        "Optimize database performance and storage through query optimization, indexing strategies, and partition management",
        "Collaborate with cross-functional teams including data scientists, analysts, and business stakeholders to understand requirements",
        "Communicate technical concepts to non-technical stakeholders through clear documentation and presentations",
        "Monitor BI systems and troubleshoot issues including data pipeline failures, performance bottlenecks, and system outages",
        "Provide support and training to end-users on BI tools, dashboards, and self-service analytics platforms",
        "Maintain thorough documentation of BI processes including data lineage, transformation logic, and system architecture",
        "Ensure documentation is up-to-date and accessible through centralized knowledge management systems",
        "Adhere to data governance policies and security measures including GDPR compliance and data privacy protocols",
        "Ensure compliance with relevant regulations and standards for data handling and reporting requirements",
        "Build and maintain automated data pipelines using modern data engineering tools and cloud platforms",
        "Implement data quality monitoring and alerting systems to proactively identify and resolve data issues",
        "Design and develop real-time streaming data solutions for time-sensitive business intelligence requirements",
        "Create and maintain data marts for specific business domains ensuring optimal performance and usability",
        "Perform data profiling and analysis to understand data patterns, relationships, and business impact",
        "Implement version control and CI/CD practices for data pipeline deployment and maintenance",
        "Conduct capacity planning and scalability assessments for growing data volumes and user demands",
        "Develop custom analytics solutions and KPI dashboards using business intelligence platforms and visualization tools"
      ],
    },
    {
      company: "Transnet", 
      title: "Maintenance Manager: Planning",
      dateRange: "April 2022 - June 2023",
      bullets: [
        "Effective implementation and management of infrastructure maintenance standards",
        "Application and coordination of the effective utilization of occupations and permits",
        "Maintenance of on-track machines",
        "Management of material reverse logistics",
        "Shutdown planning and technical training to ensure engineering and safety compliance",
        "Ensured the implementation and adherence to various maintenance standards",
        "Carried out internal maintenance business process audits",
        "Management of material movement",
        "Managing and control of depot MIS",
        "Managing and tracking Lean Six Sigma projects to completion",
        "Attended to National Clearing House disputes",
        "SAP Plant Maintenance",
        "Ensured process adherence and coordinated PAA audit preparation",
        "Drove and updated depot goals and key performance indicators",
        "Ensured monthly maintenance plans are submitted",
        "Monitored productivity performance and work center capacities",
        "Monitored notifications, overdue PMs and maintenance compliance",
        "Managed COPEX plans on MS Projects and ensured submission and tracking of depot monthly forecasts",
        "Performed quality checks on job cards and used SAP for all maintenance executed"
      ],
    },
    {
      company: "Transnet", 
      title: "Electrical Engineer",
      dateRange: "May 2018 - March 2022",
      bullets: [
        "Supervised Lean Six Sigma White Belt projects: guided data analysis, identified root causes, applied Lean tools, proofread work, and advised on tollgate improvements.",
        "Reviewed and implemented new technologies with senior engineers, addressing gaps and recommending solutions.",
        "Led electrical technical forum: monitored resources, ensured material availability through approved ordering/replacement processes.",
        "Analyzed new technology documentation: assessed practical benefits and budget-aligned implementation feasibility.",
        "Gained hands-on design and engineering exposure via site visits and clarified new concepts to on-site staff.",
        "Designed and implemented SAP automation using VBA macros for scheduling electrical maintenance plans.",
        "Planned and executed infrastructure maintenance: condition assessments, micrometer/stagger readings, defect corrections.",
        "Conducted departmental performance analysis using Pareto charts, pivot tables, and graphs to identify trends and improvement areas.",
        "Managed maintenance planning personnel with shift/rotation systems and guidance on new concepts.",
        "Ensured compliance with Transnet maintenance standards across operations.",
        "Managed electrical assets through lifecycle analysis, identifying obsolete equipment and planning budget-conscious replacements.",
        "Reinforced engineering and safety compliance via symposiums, daily green area meetings, and employee engagement.",
        "Maintained substation availability by prioritizing rehabilitation of high-impact substations during breakdowns.",
        "Oversaw OPEX and CAPEX budgets with forecasting strategies, weekly tracking, and expenditure oversight.",
        "Managed procurement of maintenance materials: ensured timely orders to minimize delays and expedite delivery.",
        "Directed infrastructure maintenance execution personnel through standby roster rotations and morning planning conferences.",
        "Ensured safety compliance with monthly symposiums, awareness sessions, and daily green area talks.",
        "Controlled personnel overtime and productivity through shift/rotation systems, jobcard tracking, and corrective measures.",
        "Allocated human and material resources for planned work via planning team coordination and weekly activity overviews.",
        "Managed contracted vehicle performance: monitored kilometers, speed compliance, grounding protocols, and corrective actions."
      ],
    }
  ],
  education: [
    {
      school: "University of Kwa-Zulu Natal",
      degree: "Bachelor of Science: Electrical Engineering",
      dateRange: "2012 - 2017", // Update with actual dates
      achievements: [
        "Specialized in Electrical Engineering with focus on power systems",
        "Participated in multiple engineering projects and hackathons",
        "Developed expertise in automation and control systems"
      ],
    },
    {
      school: "University of Kwa-Zulu Natal",
      degree: "Post Graduate Diploma: Data Science",
      dateRange: "2021 - Current", // Update with actual dates
      achievements: [
        "Focused on data analysis, machine learning, and big data technologies",
        "Completed projects involving real-world data sets and predictive modeling",
        "Gained proficiency in Python, R, and SQL for data manipulation and analysis"
      ],
    }
  ],
  electricalProjects: [
    {
      name: "Replacement of Copper Catenary from Glencoe to Uithoek",
      dateRange: "11 May 2019 - 16 May 2019",
      description: "Replaced 6km of copper wire with aluminum to prevent theft and maintain train service reliability",
      role: "Technical Officer",
      responsibilities: [
        "Oversaw project safety file compliance and team safety induction",
        "Ensured material availability and coordinated transport to site",
        "Monitored project milestones to achieve daily target of 1.5km",
        "Updated COPEX tracking app and shutdown occupation app"
      ]
    },
    {
      name: "Reduction of Substation Failures at Boughton",
      dateRange: "01 December 2020 - 30 May 2021",
      description: "Lean Six Sigma project to reduce substation failures from 1.1 per week to zero using DMAIC methodology",
      role: "Project Lead",
      responsibilities: [
        "Identified PCB component contributing to most delays and incidents",
        "Applied Lean methodology to close performance gap by 80%",
        "Completed all DMAIC phases with stakeholder sign-off",
        "Successfully realized project benefits"
      ]
    },
    {
      name: "Automated Departmental Performance Report Generator",
      dateRange: "July 2021",
      description: "Created automated 20-page monthly performance report system using Excel and VBA",
      role: "Developer",
      responsibilities: [
        "Connected to database using Excel's database access capabilities",
        "Developed VBA code for automatic table updates",
        "Created PowerPoint presentation generator with latest data",
        "Streamlined monthly reporting process significantly"
      ]
    },
    {
      name: "Lightning Substation Tripping Investigation",
      dateRange: "August 2021",
      description: "Investigated and resolved repeated substation tripping during lightning storms",
      role: "Project Lead",
      responsibilities: [
        "Analyzed five years of substation data and conducted site visits",
        "Identified incorrect earthing of primary lightning arrestors as root cause",
        "Recommended connection changes from circuit breaker frame to earth spike",
        "Significantly reduced lightning-related substation trips"
      ]
    },
    {
      name: "Replacement of Contact Wire in Cedara Tunnel",
      dateRange: "11 May 2019 - 16 May 2019",
      description: "Replaced 7km of contact wire to mitigate OHTE hookup risk in tunnel environment",
      role: "Technical Officer",
      responsibilities: [
        "Arranged material procurement and delivery to site",
        "Coordinated resource availability for work execution",
        "Managed complex tunnel work environment challenges"
      ]
    },
    {
      name: "Reduction of OHTE Failures at Ladysmith Depot",
      dateRange: "October 2019 - January 2020",
      description: "Applied Lean Six Sigma DMAIC to reduce OHTE failures from 1.13 to 0.51 per week",
      role: "Project Lead",
      responsibilities: [
        "Identified contact wire in Estcourt to Rushbrook area as contributing factor",
        "Implemented quick wins and solutions reducing failure rate by 55%",
        "Applied DMAIC methodology throughout project lifecycle"
      ]
    },
    {
      name: "Replacement of Steel Earth Wire from Dundee to Tayside",
      dateRange: "16 January 2021 - 25 January 2021",
      description: "Replaced 20km of rust-susceptible steel earth wire with aluminum to prevent OHTE hookups",
      role: "Technical Officer",
      responsibilities: [
        "Oversaw project execution and resolved on-site challenges",
        "Managed daily targets of 2km wire replacement",
        "Coordinated with safety office for equipment issues resolution",
        "Redistributed shortfalls across multiple days to meet project goals"
      ]
    }
  ]
};