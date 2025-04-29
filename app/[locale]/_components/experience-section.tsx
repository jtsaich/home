import React from "react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "PRESENT",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <h4 className="text-xl font-semibold mb-2">
            GAZAI - Senior Product Engineer
          </h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Design and architect scalable, high-performance systems for AI
              image generation, considering factors such as model training,
              inference optimization, and data pipelines.
            </li>
            <li>
              Build from ground 0. Lead the development and implementation of
              core system components, utilizing your expertise in software
              engineering best practices and AI/ML technologies.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <h4 className="text-xl font-semibold mb-2">
            Routable - Senior Software Engineer
          </h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Write tech spec proposals and estimations for new feature based on
              product specs and design mockups
            </li>
            <li>
              Build interactive, typescript React components for payment
              automation application with Redux, Saga, React hooks,
              styled-components
            </li>
            <li>Implement scalable APIs with Django and Postgres</li>
            <li>
              Maintain code quality and test coverage by writing Jest and Pytest
              unit tests
            </li>
            <li>Pair and mod program with other developers</li>
            <li>
              Define specific test cases for QA engineers before ticket handoffs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <h4 className="text-xl font-semibold mb-2">
            New Engen / Jove - Tech Lead & Senior Software Engineer
          </h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>Manage and mentor the front-end team of 6 developers</li>
            <li>
              Ideate product solution and work with developers to come up with a
              holistic technical solution that meets product requirements
            </li>
            <li>
              Lead project and team meetings, driving the team to come up with
              architecture design of the project
            </li>
            <li>
              Architect, design, and document scalable, intuitive RESTful API
              with Java Spring framework
            </li>
            <li>Develop front-end components and dashboards with React</li>
            <li>Manage AWS cloud infrastructure for web service deployment</li>
            <li>
              Work with Elasticsearch ETL and query to power complex,
              interactive dashboard
            </li>
            <li>
              Build serverless code with AWS Lambda, SNS, SQS for data
              processing jobs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <h4 className="text-xl font-semibold mb-2">
            Sirqul - Software Engineer
          </h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Develop and maintain Sirqul&apos;s cloud based engagement services
              platform running on J2EE RESTful web service
            </li>
            <li>
              Design and develop a routing and logistics system that schedules
              and optimizes thousands of deliveries
            </li>
            <li>
              Design and develop web-based administration dashboard integrating
              with legacy code base
            </li>
            <li>
              Develop Uber-like web-based applications leveraging Sirqul&apos;s
              API
            </li>
            <li>
              Develop easy-to-use web-based analytics tools for marketers and
              brand managers
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-40 top-8 bottom-8 w-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Experience entries */}
      <div className="space-y-16">
        {experiences.map((experience) => (
          <div key={experience.title} className="relative flex gap-12">
            {/* Title with dot */}
            <div className="w-48 flex-shrink-0 pt-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold">{experience.title}</span>
                <div className="absolute left-40 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-2 flex-grow">{experience.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
