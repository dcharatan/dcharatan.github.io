import React from 'react';
import { Link } from 'react-router-dom';
import Degree from '../resume/Degree';
import InformationPoint from '../resume/InformationPoint';
import ResumeSection from '../resume/ResumeSection';
import WorkExperience from '../resume/WorkExperience';
import Page from './Page';

const Resume = () => (
  <Page title="Resume">
    <ResumeSection name="Education">
      <Degree
        name="M.S. Computer Science"
        university="Brown University (Providence, RI)"
        years="2021–2022 (Expected)"
        className="mb-2"
      />
      <Degree
        name="Sc.B. Computer Engineering"
        university="Brown University (Providence, RI)"
        years="2017–2021"
        notes="with honors"
      />
    </ResumeSection>
    <ResumeSection name="Experience">
      <WorkExperience
        company="Common Sense Machines"
        location="Cambridge, MA"
        position="AI Resident (Internship)"
        dates="Starting May 2021"
        bullets={[
          'Developing technology related to 3D reconstruction and object understanding.',
        ]}
      />
      <WorkExperience
        company="Bloomberg L.P."
        location="New York, NY (Remote)"
        position="Software Engineering Intern"
        dates="June 2020–August 2020"
        bullets={[
          'Built a GraphQL API for real-time data using Node.js, Apollo Server and TypeScript with five full-time developers. Used continuous integration and test-driven development to produce high-quality code.',
          'Implemented Redis caching to reduce critical query latencies by more than 80%.',
          'Developed a React-based frontend for the API using Apollo Client and Redux.',
        ]}
      />
      <WorkExperience
        company="Onshape"
        location="Cambridge, MA"
        position="Software Development Intern"
        dates="May 2019–August 2019"
        bullets={[
          'Improved cloud-based 3D computer-aided design system using C++, Java and TypeScript.',
          'Enhanced selection, patterning, part assembly and FeatureScript, a proprietary scripting language for geometric data. Added glTF export format UI and implemented geometric queries (e.g. for unique vertices).',
        ]}
      />
      <WorkExperience
        company="USNR"
        location="Woodland, WA"
        position="Software Development Intern"
        dates="June 2018–August 2018"
        bullets={[
          'Built C#-based SolidWorks add-in to generate parametric 3D models from two proprietary laser scan file types, saving technical animators several hours per model.',
          'Automated defeaturing and recoloring of 3D engineering models for animation.',
        ]}
      />
    </ResumeSection>
    <ResumeSection name="Research & Publications">
      See <Link to="/research">research</Link>.
    </ResumeSection>
    <ResumeSection name="Projects & Paper Implementations">
      See <Link to="/projects">projects</Link>.
    </ResumeSection>
    <ResumeSection name="Additional Information" last>
      <InformationPoint heading="Awards and Recognition">
        Association for Computer Professionals in Education (ACPE) Scholarship,
        Tau Beta Pi Membership, 2021 Brown CS Undergraduate Research Symposium
        Winner (4 of 27 presenters chosen), 3rd Place at 2020 5C Hackathon
      </InformationPoint>
      <InformationPoint heading="Activities">
        Hack@Brown Design Team, Animator for SciToons at Brown, Brown FSAE
      </InformationPoint>
      <InformationPoint heading="Languages">
        English and German (native), French (conversational)
      </InformationPoint>
    </ResumeSection>
  </Page>
);

export default Resume;
