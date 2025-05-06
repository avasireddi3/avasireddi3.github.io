"use client"

import { notFound } from "next/navigation"
import { CalendarIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Efficient Data Pipelines with Airflow",
    slug: "building-efficient-data-pipelines-with-airflow",
    description:
      "Learn how to design and implement efficient data pipelines using Apache Airflow for better data engineering workflows.",
    date: "2023-05-15",
    tags: ["Data Engineering", "Airflow", "ETL", "Python"],
    readTime: "8 min read",
    content: `
      # Building Efficient Data Pipelines with Airflow

      Data pipelines are the backbone of modern data engineering. They enable the smooth flow of data from various sources to destinations where it can be analyzed and used for business insights. Apache Airflow has emerged as one of the most popular tools for building and managing these pipelines.

      ## What is Apache Airflow?

      Apache Airflow is an open-source platform to programmatically author, schedule, and monitor workflows. It was developed by Airbnb and later donated to the Apache Software Foundation. Airflow allows you to define your data pipelines as code, making them more maintainable, versionable, testable, and collaborative.

      ## Key Concepts in Airflow

      ### DAGs (Directed Acyclic Graphs)

      In Airflow, workflows are defined as DAGs - Directed Acyclic Graphs. A DAG is a collection of tasks that you want to run, organized in a way that reflects their relationships and dependencies. The "directed" nature means that the tasks have a clear direction of flow, and "acyclic" means that the tasks don't create a cycle.

      ### Operators

      Operators determine what actually gets done by a task. Airflow provides many built-in operators:

      - BashOperator: Executes a bash command
      - PythonOperator: Calls a Python function
      - EmailOperator: Sends an email
      - SimpleHttpOperator: Sends an HTTP request
      - SqliteOperator, MySqlOperator, PostgresOperator, etc.: Run SQL commands

      ### Tasks

      A task is the basic unit of execution in Airflow. Tasks are generated when instantiating operator objects. They represent a unit of work within a DAG and are arranged based on their dependencies.

      ## Building an Efficient Data Pipeline

      Let's look at how to build an efficient data pipeline with Airflow:

      ### 1. Define Clear Pipeline Stages

      Break your pipeline into clear stages:
      - Extract: Pull data from source systems
      - Transform: Clean, validate, and transform the data
      - Load: Load the processed data into the target system

      ### 2. Use the Right Operators

      Choose the appropriate operators for each task. For example:
      - Use the PythonOperator for complex transformations
      - Use the appropriate database operator for database operations
      - Consider custom operators for specific needs

      ### 3. Optimize Task Dependencies

      Set up task dependencies to ensure tasks run in the correct order:

      \`\`\`python
      # Example of setting up task dependencies
      extract_task >> transform_task >> load_task
      \`\`\`

      ### 4. Implement Error Handling

      Add proper error handling to make your pipelines robust:
      - Set up retries for tasks that might fail temporarily
      - Configure email alerts for critical failures
      - Use SLAs to monitor task duration

      ### 5. Monitor and Optimize

      Regularly monitor your pipelines and optimize them:
      - Use Airflow's UI to monitor task execution
      - Analyze task duration and identify bottlenecks
      - Consider parallelizing independent tasks

      ## Conclusion

      Building efficient data pipelines with Airflow can significantly improve your data engineering workflows. By following best practices and leveraging Airflow's features, you can create robust, maintainable, and scalable data pipelines that meet your organization's needs.
    `,
  },
  {
    id: 2,
    title: "From Business Analyst to Data Engineer: My Career Transition",
    slug: "from-business-analyst-to-data-engineer",
    description:
      "My personal journey transitioning from a business analyst role to data engineering, including challenges, learnings, and tips for others making a similar transition.",
    date: "2023-04-02",
    tags: ["Career", "Data Engineering", "Business Analysis"],
    readTime: "12 min read",
    content: `
      # From Business Analyst to Data Engineer: My Career Transition

      Making a career transition can be both exciting and challenging. In this post, I'll share my personal journey transitioning from a business analyst role to data engineering, including the challenges I faced, what I learned along the way, and tips for others considering a similar path.

      ## My Background as a Business Analyst

      As a business analyst, I spent several years working closely with stakeholders to understand business requirements, analyze processes, and recommend solutions. I became proficient in SQL for data analysis, created reports and dashboards, and developed a deep understanding of how businesses use data to make decisions.

      While I enjoyed my role, I found myself increasingly drawn to the technical aspects of my work. I was fascinated by the data pipelines that fed our dashboards and wanted to understand how they worked under the hood.

      ## Why I Decided to Transition to Data Engineering

      Several factors influenced my decision to transition to data engineering:

      1. **Technical Interest**: I enjoyed solving technical problems and wanted to dive deeper into the engineering side of data.
      2. **Career Growth**: Data engineering offered exciting growth opportunities and the chance to work with cutting-edge technologies.
      3. **Impact**: I wanted to build the infrastructure that enables data-driven decision making across organizations.
      4. **Market Demand**: The growing demand for data engineers meant good job security and competitive compensation.

      ## My Learning Journey

      Transitioning to data engineering required developing new technical skills. Here's how I approached it:

      ### 1. Building a Strong Foundation

      I started by strengthening my programming skills:
      - Deepened my knowledge of Python through online courses and practice projects
      - Learned software engineering principles like version control with Git
      - Studied data structures and algorithms to improve my problem-solving skills

      ### 2. Learning Data Engineering Tools and Technologies

      Next, I focused on specific data engineering tools:
      - Apache Airflow for workflow orchestration
      - SQL databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB)
      - Data warehousing solutions like Snowflake and BigQuery
      - ETL/ELT processes and best practices
      - Cloud platforms (AWS, GCP) for data processing

      ### 3. Hands-on Projects

      I applied my learning through practical projects:
      - Built ETL pipelines to process and analyze public datasets
      - Created data models and implemented them in various database systems
      - Deployed data pipelines on cloud platforms
      - Contributed to open-source data projects

      ## Challenges I Faced

      The transition wasn't without challenges:

      1. **Technical Knowledge Gap**: Bridging the gap between business analysis and engineering required significant learning.
      2. **Imposter Syndrome**: I often felt like I didn't belong in technical discussions.
      3. **Job Search Difficulties**: Getting that first data engineering role was challenging without direct experience.
      4. **Balancing Learning with Work**: Finding time to learn while maintaining my current job was difficult.

      ## How My Business Analyst Background Helped

      Interestingly, my business analyst background provided several advantages:

      1. **Business Context**: I understood how data is used to drive business decisions.
      2. **Stakeholder Communication**: I could effectively communicate with non-technical stakeholders.
      3. **Requirements Gathering**: I knew how to translate business needs into technical requirements.
      4. **Data Literacy**: I already had a strong foundation in data analysis and SQL.

      ## Tips for Others Making the Transition

      Based on my experience, here are some tips for business analysts looking to transition to data engineering:

      1. **Leverage Your Strengths**: Your business knowledge and communication skills are valuable assets.
      2. **Start Small**: Begin with projects at your current job that involve more technical work.
      3. **Build a Learning Roadmap**: Create a structured plan for developing technical skills.
      4. **Find Mentors**: Connect with experienced data engineers who can guide your learning.
      5. **Create a Portfolio**: Build projects that demonstrate your data engineering skills.
      6. **Network**: Attend meetups, conferences, and online communities focused on data engineering.
      7. **Be Patient**: The transition takes time, so be persistent and celebrate small wins.

      ## Conclusion

      Transitioning from business analyst to data engineer has been a rewarding journey. While it required significant effort and persistence, the combination of business knowledge and technical skills has positioned me uniquely in the field. If you're considering a similar transition, I hope my experience provides some guidance and encouragement for your journey.
    `,
  },
  {
    id: 3,
    title: "Building Interactive Dashboards with React and D3.js",
    slug: "building-interactive-dashboards-with-react-and-d3",
    description:
      "A step-by-step guide to creating interactive data visualizations and dashboards using React and D3.js.",
    date: "2023-03-10",
    tags: ["Data Visualization", "React", "D3.js", "Frontend"],
    readTime: "10 min read",
    content: `
      # Building Interactive Dashboards with React and D3.js

      Data visualization is a powerful way to communicate insights and tell stories with data. When it comes to building interactive dashboards on the web, combining React with D3.js creates a powerful toolkit for creating engaging and dynamic visualizations.

      ## Why React and D3.js?

      **React** excels at building user interfaces and managing application state, while **D3.js** (Data-Driven Documents) is the gold standard for creating custom data visualizations. Together, they complement each other perfectly:

      - React handles the UI components, state management, and rendering lifecycle
      - D3.js provides powerful tools for data manipulation and visualization

      ## Setting Up Your Project

      Let's start by setting up a basic React project with D3.js:

      1. Create a new React application:
         \`\`\`bash
         npx create-react-app dashboard-app
         cd dashboard-app
         \`\`\`

      2. Install D3.js:
         \`\`\`bash
         npm install d3
         \`\`\`

      3. Optional: Add a CSS framework for styling (I recommend Tailwind CSS):
         \`\`\`bash
         npm install tailwindcss postcss autoprefixer
         npx tailwindcss init -p
         \`\`\`

      ## Approaches to Integrating React and D3.js

      There are several approaches to integrating React and D3.js:

      ### 1. React for Structure, D3 for Calculations

      In this approach, React handles the DOM rendering while D3 is used for its powerful data transformation and calculation capabilities.

      \`\`\`jsx
      import React, { useEffect, useState } from 'react';
      import * as d3 from 'd3';

      function BarChart({ data }) {
        const [bars, setBars] = useState([]);

        useEffect(() => {
          // Use D3 for calculations
          const scale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, 300]);
          
          // Prepare the data for React to render
          const barsData = data.map((d, i) => ({
            x: i * 45,
            y: 300 - scale(d),
            height: scale(d),
            width: 40,
            value: d
          }));
          
          setBars(barsData);
        }, [data]);

        // React renders the SVG elements
        return (
          <svg width="400" height="300">
            {bars.map((bar, i) => (
              <rect
                key={i}
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                fill="steelblue"
              />
            ))}
          </svg>
        );
      }
      \`\`\`

      ### 2. React for Components, D3 for Direct DOM Manipulation

      In this approach, React creates and manages the container elements, while D3 directly manipulates the DOM within those containers.

      \`\`\`jsx
      import React, { useRef, useEffect } from 'react';
      import * as d3 from 'd3';

      function BarChart({ data }) {
        const svgRef = useRef();

        useEffect(() => {
          // D3 code to create/update the visualization
          const svg = d3.select(svgRef.current);
          
          // Clear previous chart
          svg.selectAll("*").remove();
          
          // Create scales
          const xScale = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, 400])
            .padding(0.1);
            
          const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([300, 0]);
          
          // Create and update bars
          svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(i))
            .attr("y", d => yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("height", d => 300 - yScale(d))
            .attr("fill", "steelblue");
        }, [data]);

        return <svg ref={svgRef} width="400" height="300"></svg>;
      }
      \`\`\`

      ## Building a Complete Dashboard

      Now let's build a more complete dashboard with multiple visualizations:

      1. **Create reusable chart components** for each visualization type (bar charts, line charts, etc.)
      2. **Implement dashboard layout** using CSS Grid or Flexbox
      3. **Add interactivity** with filters, tooltips, and transitions
      4. **Implement responsive design** to work across device sizes

      ## Adding Interactivity

      Interactivity makes dashboards more engaging and useful. Here are some ways to add interactivity:

      ### 1. Tooltips

      \`\`\`jsx
      // Inside your D3 rendering code
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        // ... other attributes ...
        .on("mouseover", function(event, d) {
          const [x, y] = d3.pointer(event);
          
          d3.select("#tooltip")
            .style("left", x + "px")
            .style("top", y + "px")
            .style("opacity", 1)
            .html(\`Value: \${d}\`);
        })
        .on("mouseout", function() {
          d3.select("#tooltip")
            .style("opacity", 0);
        });
      \`\`\`

      ### 2. Filtering and Drill-Down

      Implement filters using React state to allow users to explore different aspects of the data.

      ### 3. Animations and Transitions

      Use D3's transition API to animate changes in your visualizations:

      \`\`\`jsx
      // Inside your D3 rendering code
      svg.selectAll("rect")
        .data(data)
        .join("rect")
        .transition()
        .duration(500)
        .attr("y", d => yScale(d))
        .attr("height", d => 300 - yScale(d));
      \`\`\`

      ## Best Practices

      1. **Separate concerns**: Keep data fetching, processing, and visualization logic separate
      2. **Responsive design**: Make your dashboard work on different screen sizes
      3. **Performance**: Be mindful of re-renders and DOM manipulations
      4. **Accessibility**: Ensure your visualizations are accessible with proper ARIA attributes
      5. **Testing**: Write tests for your visualization components

      ## Conclusion

      Combining React and D3.js gives you the best of both worlds for building interactive dashboards. React's component model and state management paired with D3's powerful visualization capabilities create a robust foundation for data visualization applications.

      By following the approaches and best practices outlined in this article, you can create engaging, interactive, and insightful dashboards that help users understand and explore data effectively.
    `,
  },
  {
    id: 4,
    title: "Optimizing SQL Queries for Better Performance",
    slug: "optimizing-sql-queries-for-better-performance",
    description:
      "Tips and techniques for writing more efficient SQL queries to improve database performance and reduce query execution time.",
    date: "2023-02-18",
    tags: ["SQL", "Database", "Performance", "Optimization"],
    readTime: "7 min read",
    content: `
      # Optimizing SQL Queries for Better Performance

      SQL query performance can make or break an application's user experience. Slow queries can lead to frustrated users, increased server load, and higher operational costs. In this article, I'll share practical tips and techniques for optimizing SQL queries to improve database performance.

      ## Why Query Optimization Matters

      Even small improvements in query performance can have significant impacts:

      - **Better user experience**: Faster page loads and report generation
      - **Reduced server load**: More efficient use of database resources
      - **Lower costs**: Less CPU time and memory usage
      - **Improved scalability**: Support more concurrent users

      ## Understanding Query Execution

      Before optimizing queries, it's important to understand how databases execute them. Most relational databases follow these steps:

      1. **Parsing**: The SQL statement is parsed for syntax
      2. **Optimization**: The query optimizer creates an execution plan
      3. **Execution**: The database executes the plan and returns results

      The key to optimization is influencing the execution plan to use the most efficient path to retrieve or modify data.

      ## Essential Optimization Techniques

      ### 1. Use Indexes Effectively

      Indexes are the most powerful tool for query optimization:

      - **Create indexes on columns used in WHERE, JOIN, and ORDER BY clauses**
      - **Consider composite indexes for queries with multiple conditions**
      - **Be aware of index selectivity**: Indexes work best when they filter out a large percentage of rows

      Example:
      \`\`\`sql
      -- Create an index on the email column
      CREATE INDEX idx_users_email ON users(email);

      -- Query that will use the index
      SELECT * FROM users WHERE email = 'user@example.com';
      \`\`\`

      ### 2. Be Specific in SELECT Statements

      Avoid using SELECT * and only request the columns you need:

      \`\`\`sql
      -- Instead of this
      SELECT * FROM orders JOIN customers ON orders.customer_id = customers.id;

      -- Do this
      SELECT orders.id, orders.order_date, customers.name 
      FROM orders 
      JOIN customers ON orders.customer_id = customers.id;
      \`\`\`

      ### 3. Optimize JOINs

      JOINs can be expensive operations:

      - **Join on indexed columns whenever possible**
      - **Use the appropriate join type** (INNER, LEFT, RIGHT)
      - **Consider denormalizing frequently joined tables** for read-heavy workloads
      - **Be mindful of join order** in complex queries

      ### 4. Use WHERE Conditions Efficiently

      The WHERE clause determines which rows to include:

      - **Place the most restrictive conditions first**
      - **Avoid functions on indexed columns** as they prevent index usage
      - **Use appropriate operators** that can leverage indexes

      Example:
      \`\`\`sql
      -- Instead of this (prevents index usage)
      SELECT * FROM users WHERE LOWER(email) = 'user@example.com';

      -- Do this
      SELECT * FROM users WHERE email = 'user@example.com';
      \`\`\`

      ### 5. Limit Result Sets

      Only retrieve the data you need:

      - **Use LIMIT/OFFSET for pagination**
      - **Consider windowing functions for complex pagination**

      \`\`\`sql
      -- Retrieve only the first 20 results
      SELECT id, name FROM products ORDER BY created_at DESC LIMIT 20;
      \`\`\`

      ### 6. Optimize Subqueries

      Subqueries can be performance bottlenecks:

      - **Consider replacing subqueries with JOINs** when appropriate
      - **Use EXISTS instead of IN** for checking existence
      - **Be careful with correlated subqueries** that run once per outer row

      Example:
      \`\`\`sql
      -- Instead of this
      SELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE country = 'USA');

      -- Do this
      SELECT o.* 
      FROM orders o
      JOIN customers c ON o.customer_id = c.id
      WHERE c.country = 'USA';
      \`\`\`

      ### 7. Use Query Hints Sparingly

      Most databases allow query hints to influence the optimizer:

      - **Only use hints when necessary** and you understand the implications
      - **Test thoroughly** before and after applying hints
      - **Document why** the hint was necessary

      ## Tools for Query Analysis

      Use these tools to identify slow queries and optimization opportunities:

      1. **EXPLAIN / EXPLAIN ANALYZE**: View the execution plan
      2. **Query logs**: Identify slow-running queries
      3. **Performance monitoring tools**: Track query performance over time

      Example:
      \`\`\`sql
      -- PostgreSQL
      EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 123;
      \`\`\`

      ## Common Anti-Patterns to Avoid

      1. **Implicit conversions**: Ensure data types match in comparisons
      2. **LIKE with leading wildcards**: Prevents index usage (e.g., LIKE '%text')
      3. **Unnecessary ORDER BY**: Only sort when needed
      4. **Complex calculations in WHERE clauses**: Move to a derived table or CTE
      5. **Retrieving more data than needed**: Filter at the database level, not in application code

      ## Conclusion

      Query optimization is both an art and a science. By understanding how databases execute queries and applying these optimization techniques, you can significantly improve the performance of your database operations.

      Remember that optimization should be data-driven. Always measure performance before and after changes to ensure your optimizations are actually improving performance. What works for one database or dataset might not work for another, so testing is crucial.
    `,
  },
]

// Format date to readable format
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no post is found, return 404
  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12">
      <article className="prose prose-slate dark:prose-invert max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{post.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
