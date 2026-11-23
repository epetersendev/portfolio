# Eric Petersen — Portfolio

A small Next.js site that showcases selected projects. It builds to static HTML, so it can be
hosted for free on Azure Static Web Apps, GitHub Pages, or Vercel.

## Content model

Each project is one Markdown file in `content/projects/`. The frontmatter is the structured part,
and the body is the write-up:

| Field      | Purpose                                         |
|------------|-------------------------------------------------|
| `title`    | Project headline                                |
| `client`   | Organization name (or an anonymized description)|
| `summary`  | One or two sentences for the project card       |
| `role`     | What I did                                      |
| `platform` | List of platforms and tools, shown as tags      |
| `year`     | Optional                                        |
| `url`      | Optional link to the live site                  |
| `order`    | Sort order on the home page                     |

To add a project, copy an existing file, change the frontmatter, and write the body. Images go in
`public/` and are referenced as `/image-name.png`.

## Commands

```bash
npm install
npm run dev     # local preview at http://localhost:3000
npm run build   # static site in /out
```

## Design choices

- **Markdown over a hosted CMS.** I'm the only editor, so content in the repo keeps hosting free
  and every change goes through Git history.
- **Static export.** No server to run or patch; the whole site is HTML, CSS, and a little JS.
- **Typed content loader** (`lib/projects.ts`) so a missing or malformed field shows up at build
  time, not in production.

## Deploy (Azure Static Web Apps, Free tier)

Live at https://ericpetersen.dev (resource group `portfolio-rg`, app `eric-petersen-portfolio`).

Every push to `main` builds the site and deploys it through GitHub Actions
(`.github/workflows/build.yml`). Pull requests run the build only. The deployment token is stored
as the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.
