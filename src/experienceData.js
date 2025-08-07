// experienceData.js
const experienceData = [
  {
    company: "NetApp",
    companyShort: "NetApp",
    companyUrl: "https://www.netapp.com/",
    title: "Site Reliability Engineer",
    date: "September 2024 - Present",
    bullets: [
      "Developed a health monitoring API using Flask to track application service status, reducing downtime and improving observability.",
      "Designed and implemented custom monitoring and alerting solutions for GENAI applications using Grafana, Prometheus and Blackbox exporter.",
      "Conduct weekly validation and deployments of CIT application."
    ],
  },
  {
    company: "Tesla, Inc",
    companyShort: "Tesla",
    companyUrl: "https://www.tesla.com/",
    title: "Software Engineer Intern",
    date: "January 2024 - May 2024",
    bullets: [
      "Enhanced the BCM(Bright Cluster Manager) exporter by integrating additional metrics for improved functionality and performance.",
      "Implemented Blackbox Exporter and Redfish Exporter monitoring solutions for DNS resolution, HTTP endpoints, and hardware metrics; integrated with Prometheus, reducing incident response time by 30%.",
      "Managed HPC cluster infrastructure, focusing on systems automation, configuration management, and large-scale deployment, resulting in a 20% increase in operational efficiency.",
      "Revamped Prometheus monitoring target population by integrating devices from Netbox, expanding monitoring coverage by 40%.",
      "Engineered a Python script for detecting cabling issues by cross-referencing Netbox and LLDP data, reducing network downtime by 25%.",
      "Created customized Prometheus metrics for LLDP neighbors, improving network monitoring accuracy by 15%."
    ],
  },
  {
    company: "Arizona State University",
    companyShort: "ASU",
    companyUrl: "https://www.asu.edu/",
    title: "ETS Linux Support",
    date: "October 2022 - December 2023",
    bullets: [
      "Automated configuration and installation of applications and software for diverse academic units using Ansible AWX, Bash, and Python scripts, achieving significant efficiency gains."
    ],
  },
  {
    company: "ESRI",
    companyShort: "ESRI",
    companyUrl: "https://www.esri.com/",
    title: "Software Developer Intern",
    date: "May 2023 - August 2023",
    bullets: [
      "Developed Ansible playbooks to automate infrastructure provisioning, configuration management and application deployment, resulting in a 60% reduction in deployment time.",
      "Collaborated with development and testing teams to create CI/CD pipelines using Jenkins, Git and Ansible for fast and reliable application deployments.",
      "Devised a Docker-based containerization strategy, enabling seamless application deployments and scalability."
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    companyShort: "Bosch",
    companyUrl: "https://www.bosch.com/",
    title: "Software Engineer",
    date: "August 2019 - July 2022",
    bullets: [
      "Utilized project management software JIRA to track the progress of the project and Git for version control.",
      "Automated BAU activity using Jenkins, Bash, Python and PowerShell scripts, achieving a 50% reduction in manpower.",
      "Provisioned VM setups in vCenter through Terraform.",
      "Created Ansible playbooks to configure Red Hat servers.",
      "Led the upgrade of ESXi servers to address a critical vulnerability, managing the entire change ticket process, securing approval, and coordinating with customers across four regions.",
      "Installed patches, software upgradation and performed backup for ESXi, Windows and Linux servers.",
      "Designed and developed modular and reusable front-end components using Angular11, Typescript and Angular Material."
    ],
  }
];
export default experienceData;