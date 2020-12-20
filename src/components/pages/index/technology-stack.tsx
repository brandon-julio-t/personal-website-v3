import * as React from "react";

export default function TechnologyStack() {
  return (
    <section className="max-w-screen-lg mx-auto">
      <h2 className="text-5xl text-center">Technology Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="text-left">
          <h3 className="text-4xl">Front-end</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Gatsby</li>
            <li>Nuxt</li>
            <li>Tailwind CSS</li>
            <li>Vue</li>
            <li>Vuetify</li>
          </ul>
        </section>

        <section className="text-right">
          <h3 className="text-4xl">Back-end</h3>
          <ul>
            <li>Express</li>
            <li>Laravel</li>
          </ul>
        </section>

        <section className="text-left">
          <h3 className="text-4xl">Programming</h3>
          <ul>
            <li>C/C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Go</li>
          </ul>
        </section>

        <section className="text-right">
          <h3 className="text-4xl">Database</h3>

          <section>
            <h4 className="text-3xl">NoSQL</h4>
            <ul>
              <li>FaunaDB</li>
              <li>MongoDB</li>
            </ul>
          </section>

          <section>
            <h4 className="text-3xl">SQL</h4>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
              <li>SQLite</li>
            </ul>
          </section>
        </section>

        <section className="text-left">
          <h3 className="text-4xl">Cloud</h3>
          <ul>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </section>

        <section className="text-right">
          <h3 className="text-4xl">Tools</h3>
          <ul>
            <li>Jetbrains IDEs</li>
            <li>Visual Studio Code</li>
          </ul>
        </section>

        <section className="text-left">
          <h3 className="text-4xl">Other</h3>
          <ul>
            <li>HTML/CSS/JS</li>
            <li>Markdown</li>
            <li>GraphQL</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
