# KurrawongAI docs

This repository contains the source code for [KurrawongAI](https://kurrawong.ai)'s documentation website:

* <https://docs.kurrawong.ai>

## License & Rights

This repository's content is available for reuse according to the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

This content is copyright as follows:

&copy; KurrawongAI, 2026

## Contacts

For all matters, please contact:

**KurrawongAI**  
<info@kurrawong.ai>

## Local Development

This is a [Zensical](https://zensical.org) static site, with dependencies managed by [uv](https://docs.astral.sh/uv/).

### Install dependencies and preview

Install [uv](https://docs.astral.sh/uv/getting-started/installation/), then run from the repository root:

```bash
uv sync --locked
uv run zensical serve
```

uv manages the project's Python environment automatically. Python 3.12 or newer is required; deployment uses Python 3.14.

Open http://localhost:8000 to preview the site. Edit Markdown files in `docs/`; the preview updates when you save.

Site navigation, theme settings, and Markdown extensions are configured in `zensical.toml`.
Restart the preview server after changing configuration if the changes are not reflected.

To build the static site into `site/`:

```bash
uv run --locked zensical build
```

### Deployment

Deployment is automatically triggered on push to `main` using the [deploy.yml](.github/workflows/deploy.yml) workflow, or manually through GitHub Actions. The workflow installs dependencies with `uv sync --locked`, builds with `uv run --locked zensical build`, and publishes `site/` to the `gh-pages` branch using the automatic `GITHUB_TOKEN`. GitHub Pages serves that branch at the custom domain configured in `docs/CNAME`.
