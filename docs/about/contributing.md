# How to Contribute

Welcome! Thank you for your interest in contributing to ARC. As we aim to become the definitive Assetto Corsa reference guide, we recognize that this can only be achieved through community collaboration. Whether it's fixing a typo, writing a guide, or suggesting improvements, every contribution matters.

## Types of Contributions

You can help improve ARC in the following ways:

- **Write or Edit Guides:** Create new guides or refine existing ones for clarity, accuracy, and completeness. Add images or videos where helpful.
- **Expand the Wiki:** Define key terms, explain modding concepts, and document file types, tools, or workflows.
- **Creator & Tool Pages:** Write or update entries for well-known creators, modding teams, or essential utilities.
- **Fix and Improve:** Correct typos, broken links, and outdated info. Improve formatting or make content easier to follow.
- **Suggest Ideas:** Propose new topics, guides, or site features. Give feedback on layout or usability.

:::info Are you a creator, photographer, or modder?
We welcome contributions beyond documentation. If you’d like your creator profile featured, or want to share high-quality in-game screenshots for the [Showcase](../showcase/), let us know!
:::

<!-- This roadmap link will need updating once the actual roadmap is out -->
:::tip Not sure where to start?
Check the [Roadmap](https://github.com/creacher4/assetto-corsa-arc), or look through our [open issues](https://github.com/creacher4/assetto-corsa-arc/issues) on GitHub.
:::

## Contribution Methods

Choose the method that suits you best:

### Edit on GitHub

For small changes like typos or minor wording updates, you don't need any special tools.

1. On any page, scroll to the bottom and click `Edit this page on GitHub`.
2. Make your changes in GitHub's online editor.
3. Describe your changes briefly, then click `Propose changes` to open a pull request for review.

### Complete Workflow <Badge type="tip" text="Recommended" />

For adding new pages, making significant revisions, or working with images, this workflow lets you preview your changes live on your own machine.

:::danger Prerequisites
This method requires a few standard development tools. Before you start, please ensure you have:

- A [**GitHub Account**](https://github.com)
- [**Git**](https://git-scm.com/downloads) (the version control system)
- [**Node.js**](https://nodejs.org/en/) (v18+ LTS recommended)
- A code editor like [**VS Code**](https://code.visualstudio.com/) (recommended)

Alternatively, you can use [**StackBlitz**](#online-ide-stackblitz) for an online setup without installing anything locally.
:::

##### Fork & Clone
- [Fork the repository](https://github.com/creacher4/assetto-corsa-arc) to your GitHub account.
- Clone your fork to your local machine using a terminal:

:::info Info
Before cloning, make sure you're inside the directory where you want the project folder to be created. You can open this location through VSCode or navigate to it using Git Bash or any terminal.

Also, make sure you're cloning *your own fork*, not the original ARC repository.
:::

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git clone https://github.com/YOUR_USERNAME/assetto-corsa-arc.git
cd assetto-corsa-arc
```

##### Install Dependencies

Inside the project folder, run this command once to install VitePress and other tools.

```bash
# In the same terminal used to clone the repo
npm install
```

##### Create a Branch

Keep your changes organized by creating a new branch for each feature or fix.

```bash
# Examples: feature/new-csp-guide, fix/typo-in-install-doc
git checkout -b your-descriptive-branch-name
```

##### Make & Preview Changes

- Start the local development server:

```bash
npm run docs:dev
```

- Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser.
- Edit or add files in your code editor. The site will update live as you save your changes.
- Remember to follow our [Style Guide](style-guide) and link new pages in `docs/.vitepress/config.ts` if they should appear in the sidebar.

##### Commit Your Work

Use clear, concise commit messages.

```bash
# Either
git add .
git add path/to/file.md
# Then
git commit -m "Your descriptive commit message"
```

:::tip Conventional Commits
We encourage the use of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat: Add Sol installation guide`, `fix: Correct link in Pure docs`). It helps keep our history clean.
:::

##### Push to Your Fork

```bash
git push origin your-descriptive-branch-name
```

##### Submit a Pull Request

- Go to your fork on GitHub. A prompt to `Compare & pull request` should appear.
- Provide a clear title and description for your PR. If it addresses an issue, link it (e.g., `Closes #123`).
- Click `Create pull request`.

Our team will review your PR. Note that we may suggest changes or ask for revisions if we find something unclear or missing.

## StackBlitz

You can use StackBlitz to edit and preview changes online without a local setup:

1. Go to the [ARC repository](https://github.com/creacher4/assetto-corsa-arc).
2. Change `github.com` in the URL to `stackblitz.com/github` (e.g., `stackblitz.com/github/creacher4/assetto-corsa-arc`).
3. StackBlitz will automatically initialize the project environment. You may need to run `npm run docs:dev` in its built-in terminal to start the live preview.

:::warning StackBlitz & `lastUpdated`
If you see an error like `spawn git ENOENT` on StackBlitz, it's likely due to the `lastUpdated` feature. Temporarily disable it in `docs/.vitepress/config.ts` by setting `themeConfig.lastUpdated` to `false`. There are two ways to do this: either by omitting the `lastUpdated` property completely (since it's disabled by default), or by using the following code snippets:

```ts
// Active
lastUpdated: {
    text: "Last Updated",
},

// Inactive
lastUpdated: false,
```
:::

## Communication

- **GitHub Issues:** For specific bugs, features, and content discussions.
- **Discord:** For general chat, quick questions, and collaboration. Join us: [https://discord.gg/Szd4nu4wEp](https://discord.gg/Szd4nu4wEp).