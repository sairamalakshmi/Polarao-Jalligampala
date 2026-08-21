/**
 * PROFILE DATA
 * ------------------------------------------------------------------
 * Every value here is either placeholder personal content (marked
 * "// TODO") or a professional summary of ATIKES's public positioning.
 * Update the TODOs before publishing — nothing else in the codebase
 * needs to change.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: 'Polarao Jalligampala', // TODO: your full name
  designation: 'SailPoint Engineeer', // TODO
  company: 'ATIKES',
  intro:
    'SailPoint Engineer specializing in Identity Security Cloud (ISC), with hands-on experience in identity lifecycle management, access governance, automation, and SailPoint configuration.', // TODO
  location: 'Hyderabad,India', // TODO
  photo: '/profile-photo.jpg', // TODO: replace with your professional headshot (square, min 500x500px)
  email: 'polarao.jalligampala@atikes.com', // TODO
};
 
export const atikes = {
  name: 'ATIKES',
  logo: '/atikes-logo.png',
  tagline: 'Secure. Streamline. Automate. Govern.',
  description:
    'ATIKES is a global Identity & Access Management services firm helping enterprises automate onboarding and offboarding, enforce least-privilege access, and stay audit-ready across cloud and SaaS ecosystems.',
  focusAreas: [
    'Identity Lifecycle Management',
    'Access Governance',
    'Role-Based Access Control',
    'Privileged Access Management',
    'Cloud & SaaS Integrations',
    'Compliance & Audit Readiness',
    'IAM Automation',
  ],
  website: 'https://atikes.com/',
  linkedin: 'https://www.linkedin.com/company/atikes/',
};
 
export const about = {
  bio: 'SailPoint Engineer with hands-on experience in Identity Security Cloud (ISC), focusing on identity governance, access management, automation, and application integrations. Experienced in configuring sources, access profiles, roles, workflows, certifications, provisioning, and lifecycle processes.', // TODO
};
 
export const expertise = [
  { title: 'SailPoint', desc: 'SailPoint Identity Security Cloud (ISC)' },
  { title: 'Identity Governance', desc: 'Access governance and lifecycle management' },
  { title: 'Provisioning & Deprovisioning', desc: 'Automated user and account provisioning' },
  { title: 'Identity Lifecycle Management', desc: 'Onboarding, changes and offboarding' },
  { title: 'Role-Based Access Control (RBAC)', desc: 'LDAP / OpenLDAP' },
  { title: 'IAM Platforms', desc: 'SailPoint / midPoint' },
  { title: 'ISC Workflow Automation', desc: 'Workflow configuration and automation' },
  { title: 'Access Profile Configuration', desc: 'REST APIs / Enterprise integrations' },
  { title: 'Source & Connector Configuration', desc: 'Source, application and connector configuration' },
  { title: 'Access Certifications', desc: 'Access review and certification management' }
];
export const technologies = [
  'SailPoint Identity Security Cloud (ISC)',
  'Workflows',
  'Access Profiles',
  'Role Configuration',
  'Source Configuration',
  'Identity Profiles,',
  'Provisioning',
  'Identity Lifecycle Management',
  'Certifications',
  'Access Governance',
  'Application Integration'
]; // TODO: keep only the technologies you actually provide
 
export const social = {
  linkedin: 'https://www.linkedin.com/in/polarao-jalligampala-008aa8202/', // TODO
  email: 'mailto:polarao9640@gmail.com', // TODO
  website: atikes.website,
};
 
export const vcard = {
  firstName: 'Polarao', // TODO
  lastName: 'Jalligampala', // TODO
  org: atikes.name,
  title: profile.designation,
  email: profile.email,
  phone: profile.phone,
  website: atikes.website,
  linkedin: social.linkedin,
};
