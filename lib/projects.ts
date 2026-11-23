import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/** Content model for a portfolio project. Each project is one Markdown file in
 *  content/projects; the frontmatter holds these fields and the body is the write-up. */
export interface ProjectMeta {
  slug: string;
  title: string;
  client: string;
  summary: string;
  year?: string;
  role: string;
  platform: string[];
  url?: string;
  order: number;
}

export interface Project extends ProjectMeta {
  html: string;
}

const DIR = path.join(process.cwd(), "content", "projects");

function read(file: string): Project {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  return {
    slug,
    title: String(data.title ?? slug),
    client: String(data.client ?? ""),
    summary: String(data.summary ?? ""),
    year: data.year ? String(data.year) : undefined,
    role: String(data.role ?? ""),
    platform: Array.isArray(data.platform) ? data.platform.map(String) : [],
    url: data.url ? String(data.url) : undefined,
    order: Number(data.order ?? 99),
    html: marked.parse(content, { async: false }),
  };
}

export function getProjects(): Project[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(read)
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}
