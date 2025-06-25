# How to Contribute

Welcome! We're thrilled you're interested in contributing to ARC. We aim to be the definitive Assetto Corsa reference guide, and your help will make that possible. Whether it's fixing a typo, writing a guide, or sharing ideas, every contribution matters.

## Ways to Contribute

You can help improve ARC in the following ways:

-   **Write or Edit Guides:** Create new guides or refine existing ones for clarity, accuracy, and completeness. Add images or videos where helpful.
-   **Expand the Wiki:** Define key terms, explain modding concepts, and document file types, tools, or workflows.
-   **Creator & Tool Pages:** Write or update entries for well-known creators, modding teams, or essential utilities.
-   **Submit Showcase Content:** Share high-quality in-game screenshots for the [Showcase](../showcase/) page, along with relevant details (PPFilter, Car, Track, Author).
-   **Fix and Improve:** Correct typos, broken links, and outdated info. Improve formatting or make content easier to follow.
-   **Suggest Ideas:** Propose new topics, guides, or site features. Give feedback on layout or usability.

:::tip Not sure where to start?
Check the [Project Roadmap](./roadmap.md) or look through our [open issues](https://github.com/creacher4/assetto-corsa-arc/issues).
:::

## How to Contribute

Choose the method that suits you best:

### 1. Edit Directly on GitHub

For small changes like typos or minor wording updates:

1.  On any ARC page, scroll to the bottom and click "Edit this page on GitHub."
2.  Make your changes in GitHub's online editor.
3.  Describe your changes briefly, then click “Propose changes” to open a Pull Request (PR) for review.

:::info GitHub's Editor
Note that GitHub's editor only shows a basic Markdown preview, not the full VitePress site rendering. For a live preview, see "Previewing Your Changes" below.
:::

### 2. Fork + Pull Request

For new pages, significant revisions, or new features, a Pull Request (PR) is the way to go:

1.  **Fork & Clone:**
    -   [Fork the repository](https://github.com/creacher4/assetto-corsa-arc) to your GitHub account.
    -   Clone your fork to your local machine:
        ```bash
        git clone https://github.com/YOUR_USERNAME/assetto-corsa-arc.git
        cd assetto-corsa-arc
        ```

2.  **Create a Branch:**
    Keep your changes organized by creating a new branch:
    ```bash
    # Examples: feature/new-csp-guide, fix/typo-in-install-doc
    git checkout -b your-descriptive-branch-name
    ```

3.  **Make Changes:**
    Edit or add files. Refer to our [Style Guide](./style-guide.md) and ensure new pages are linked in `docs/.vitepress/config.ts` if needed for the sidebar.

4.  **Commit Your Work:**
    Use clear, concise commit messages.
    ```bash
    git add .
    git commit -m "Your descriptive commit message"
    ```
    :::tip Conventional Commits
    We encourage [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: Add Sol installation guide`, `fix: Correct link in Pure docs`). It helps keep our history clean.
    :::

5.  **Push to Your Fork:**
    ```bash
    git push origin your-descriptive-branch-name
    ```

6.  **Submit a Pull Request:**
    -   Go to your fork on GitHub.
    -   Click "Compare & pull request" for your new branch (or go to the "Pull requests" tab and click "New pull request").
    -   Provide a clear title and description for your PR. If it addresses an issue, link it (e.g., "Closes #123").
    -   Click "Create pull request."

Our team will review your PR. We may suggest changes or ask for revisions.

:::details No Git? No Problem

-   **GitHub Issues:** [Open an issue](https://github.com/creacher4/assetto-corsa-arc/issues) to report errors, suggest content, or ask questions.
-   **Discord:** Join our [Discord server](https://discord.gg/Szd4nu4wEp) to chat, share ideas, or get help.
:::

## Style Guide

Please follow our [Style Guide](./style-guide.md) for consistency in formatting, tone, and content structure.

## Previewing Your Changes

See your edits live before submitting:

### Local Development

1.  **Prerequisites:**
    -   [Node.js](https://nodejs.org/) (v18.x or newer recommended)
    -   `npm` (comes with Node.js) or `pnpm`
2.  **Setup:**
    -   Clone the repository (if you haven't already).
    -   Install dependencies:
        ```bash
        npm install  # or pnpm install
        ```
3.  **Run Dev Server:**
    ```bash
    npm run docs:dev # or pnpm docs:dev
    ```
    Open `http://localhost:5173` (or the port shown in your terminal) in your browser.

### Using StackBlitz (Online IDE)

You can also use StackBlitz to edit and preview changes online without a local setup:

1.  Go to the [ARC repository](https://github.com/creacher4/assetto-corsa-arc).
2.  Change `github.com` in the URL to `stackblitz.com/github` (e.g., `stackblitz.com/github/creacher4/assetto-corsa-arc`).
3.  StackBlitz will set up the project. You may need to run `npm run docs:dev` in its built-in terminal to start the live preview.

:::warning StackBlitz & `lastUpdated`
If you see an error like `spawn git ENOENT` on StackBlitz, it's likely due to the `lastUpdated` feature. Temporarily disable it in `docs/.vitepress/config.ts` by setting `themeConfig.lastUpdated` to `false`.
:::

## Requesting Contributor Access

Contributors who demonstrate consistent quality and collaboration may be invited to join the project directly. Begin with Pull Requests, and if you're interested after a few contributions, reach out via Discord or in a PR discussion.

## Communication

-   **GitHub Issues:** For specific bugs, features, and content discussions.
-   **Discord:** For general chat, quick questions, and collaboration. Join us: [https://discord.gg/Szd4nu4wEp](https://discord.gg/Szd4nu4wEp).

---

Thank you for helping ARC grow! We're looking forward to seeing the contributions you put forward.