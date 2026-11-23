import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: `${p.title} — Eric Petersen`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="project">
      <Link href="/#work" className="back">
        ← All work
      </Link>
      <span className="eyebrow">{project.client}</span>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>

      <dl className="facts">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Platform</dt>
          <dd>{project.platform.join(", ")}</dd>
        </div>
        {project.year && (
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
        )}
        {project.url && (
          <div>
            <dt>Live site</dt>
            <dd>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        )}
      </dl>

      <div className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />
    </article>
  );
}
