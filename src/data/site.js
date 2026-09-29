export const techStack = [
  { group: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
  { group: 'Infrastructure', items: ['Terraform', 'CloudFormation', 'Ansible'] },
  { group: 'Containers', items: ['Docker', 'Kubernetes', 'Helm'] },
  { group: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'CloudWatch'] },
  { group: 'Security / Quality', items: ['IAM', 'Secrets Management', 'SonarQube'] },
]

export const problems = [
  { title: 'Infrastructure is manually configured', text: 'Resources created by hand in the console cannot be reviewed or reproduced.' },
  { title: 'Deployments depend on one engineer', text: 'Releases wait until the one person who knows the process is available.' },
  { title: 'Cloud costs are difficult to understand', text: 'The bill grows every month and nobody can say which service is responsible.' },
  { title: 'Production monitoring is incomplete', text: 'Customers notice problems before the team does.' },
  { title: 'Kubernetes is becoming difficult to operate', text: 'Upgrades, networking and scaling take more time than the product.' },
  { title: 'Scaling decisions are reactive', text: 'Capacity is added by hand after something slows down.' },
  { title: 'No clear disaster-recovery strategy', text: 'Backups exist, but nobody has tested a full restore.' },
  { title: 'Infrastructure consumes engineering time', text: 'Product engineers spend their week on pipelines and servers.' },
]

export const processSteps = [
  { step: '01', title: 'Discover', text: 'Understand the product, architecture, constraints, and business goals.' },
  { step: '02', title: 'Design', text: 'Define the right infrastructure and operating model.' },
  { step: '03', title: 'Build', text: 'Automate infrastructure, deployment, and operational workflows.' },
  { step: '04', title: 'Validate', text: 'Test reliability, security, observability, and scalability.' },
  { step: '05', title: 'Handover', text: 'Document everything and establish a sustainable operating model.' },
]

export const principles = [
  { a: 'Automation', b: 'repetition', text: 'If a task happens twice, it should be written as code the third time.' },
  { a: 'Observability', b: 'assumptions', text: 'Decisions are based on metrics and logs, not on how things seem.' },
  { a: 'Documentation', b: 'tribal knowledge', text: 'Everything we build is written down so your team can own it.' },
  { a: 'Reliability', b: 'shortcuts', text: 'We choose the approach that still works when something fails.' },
  { a: 'Cost awareness', b: 'uncontrolled infrastructure', text: 'Every resource has an owner, a purpose and a budget.' },
  { a: 'Simple systems', b: 'unnecessary complexity', text: 'The simplest architecture that meets the requirement is the one we recommend.' },
]

export const trainingTopics = ['AWS', 'DevOps', 'Terraform', 'Kubernetes', 'CI/CD', 'Linux', 'Observability', 'Cloud troubleshooting']

export const helpOptions = [
  'Infrastructure planning',
  'Infrastructure automation (IaC)',
  'Deployment & CI/CD',
  'Monitoring & observability',
  'Audit & cost optimisation',
  'Reliability & scaling',
  'AI infrastructure',
  'Training',
  'Something else',
]

export const cloudOptions = ['AWS', 'Azure', 'Google Cloud', 'Multiple providers', 'On-premises / other', 'Not using cloud yet']
export const roleOptions = ['Founder / CEO', 'CTO', 'Engineering lead / manager', 'Engineer', 'Other']
