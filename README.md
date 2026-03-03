# rajkeshwar.github.io

Personal portfolio website for Rajkeshwar Prasad — Lead Fullstack Engineer.

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

🌐 **Live site:** [rajkeshwar.github.io](https://rajkeshwar.github.io)

## Tech Stack

- **Jekyll** — static site generator
- **SCSS** — compiled by Jekyll's built-in Sass processor
- **Vanilla JS** — no framework dependencies
- **GitHub Pages** — free hosting with automatic builds

## Project Structure

```
rajkeshwar.github.io/
├── _data/               # YAML data files (easy to update)
│   ├── experience.yml
│   ├── skills.yml
│   ├── projects.yml
│   └── certifications.yml
├── _includes/           # Reusable HTML partials
│   ├── head.html
│   ├── sidebar.html
│   ├── footer.html
│   ├── scripts.html
│   └── sections/
│       ├── about.html
│       ├── experience.html
│       ├── skills.html
│       ├── projects.html
│       ├── certifications.html
│       └── contact.html
├── _layouts/
│   └── default.html
├── _scss/
│   └── main.scss
├── css/
│   └── main.scss        # SCSS entry point (Jekyll processes this)
├── js/
│   └── main.js
├── img/
│   └── profile.png
├── _config.yml
├── index.html
├── 404.html
├── resume.pdf           # Add your PDF resume here
└── robots.txt
```

## Local Development

### Prerequisites

- Ruby 2.7+
- Bundler

### Setup

```bash
# Install dependencies
gem install jekyll bundler
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Visit http://localhost:4000
```

## Updating Content

All content lives in `_data/` YAML files — no HTML editing needed for most updates:

| File | What to update |
|------|---------------|
| `_data/experience.yml` | Work history |
| `_data/skills.yml` | Tech skills |
| `_data/projects.yml` | Key projects |
| `_data/certifications.yml` | Certifications & badges |
| `_config.yml` | Name, email, social links |

## Deployment

Push to the `main` branch of your `rajkeshwar.github.io` repository. GitHub Pages builds and deploys automatically within ~2 minutes.

## License

Feel free to use this as inspiration for your own portfolio.
