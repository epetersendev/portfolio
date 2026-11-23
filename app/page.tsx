import Link from "next/link";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  return (
    <>
      <section className="hero">
        <h1>Senior developer for CMS websites, Dynamics 365, and .NET back ends.</h1>
        <p className="lede">
          I design content models editors actually enjoy using, build the APIs and data layers behind
          them, and carry projects through migration and launch. 15 years of remote client work, built
          with Claude Code every day.
        </p>
      </section>

      <section id="work">
        <h2>Selected work</h2>
        <div className="cards">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}/`} className="card">
              <span className="eyebrow">
                {p.client}
                {p.year ? ` · ${p.year}` : ""}
              </span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.platform.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          I build CMS-driven websites on WordPress, Drupal, Sitecore, and Kentico, and lead Dynamics 365
          and Power Platform solutions for membership and professional organizations. My back-end work
          is C#/.NET and Node.js on Azure, with React and Next.js on the front end.
        </p>
        <p>
          I work with AI agents the way a lead works with a team: clear scope, written instructions,
          and verification of everything before it merges.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          <a href="mailto:epetersendev@gmail.com">epetersendev@gmail.com</a>
        </p>
      </section>
    </>
  );
}
