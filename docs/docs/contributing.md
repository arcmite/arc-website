# How to Contribute

Welcome! We're thrilled you're interested in contributing to ARC. We aim to be the definitive Assetto Corsa reference guide, and your help will make that possible. Whether it's fixing a typo, writing a guide, or sharing ideas, every contribution matters.

## Types of Contributions

You can help improve ARC in the following ways:

-   **Write or Edit Guides:** Create new guides or refine existing ones for clarity, accuracy, and completeness. Add images or videos where helpful.
-   **Expand the Wiki:** Define key terms, explain modding concepts, and document file types, tools, or workflows.
-   **Creator & Tool Pages:** Write or update entries for well-known creators, modding teams, or essential utilities.
-   **Submit Showcase Content:** Share high-quality in-game screenshots for the [Showcase](../showcase/) page, along with relevant details (PPFilter, Car, Track, Author).
-   **Fix and Improve:** Correct typos, broken links, and outdated info. Improve formatting or make content easier to follow.
-   **Suggest Ideas:** Propose new topics, guides, or site features. Give feedback on layout or usability.

:::tip Not sure where to start?
Check the [Project Roadmap](./roadmap.md), or look through our [open issues](https://github.com/creacher4/assetto-corsa-arc/issues) on GitHub.
:::

## Contribution Methods

Choose the method that suits you best:

### Edit on GitHub

For small changes like typos or minor wording updates, you don't need any special tools.

1.  On any page, scroll to the bottom and click `Edit this page on GitHub`.
2.  Make your changes in GitHub's online editor.
3.  Describe your changes briefly, then click `Propose changes` to open a pull request for review.

### Complete Workflow

For adding new pages, making significant revisions, or working with images, this workflow lets you preview your changes live on your own machine.

:::danger Prerequisites
This method requires a few standard development tools. Before you start, please ensure you have:

-   A [**GitHub Account**](https://github.com)
-   [**Git**](https://git-scm.com/downloads) (the version control system)
-   [**Node.js**](https://nodejs.org/en/) (v18+ LTS recommended)
-   A code editor like [**VS Code**](https://code.visualstudio.com/) (recommended)

**Alternative:** You can use [**StackBlitz**](#online-ide-stackblitz) for an online setup without installing anything locally.
:::

1.  **Fork & Clone:**
    -   [Fork the repository](https://github.com/creacher4/assetto-corsa-arc) to your GitHub account.
    -   Clone your fork to your local machine using a terminal:
        :::info Tip
        Before cloning, make sure you're inside the directory where you want the project folder to be created. You can open this location through VSCode or navigate to it using Git Bash or any terminal.
        :::
        ```bash
        # Replace YOUR_USERNAME with your actual GitHub username
        git clone https://github.com/YOUR_USERNAME/assetto-corsa-arc.git
        cd assetto-corsa-arc
        ```

2.  **Install Dependencies:**
    Inside the project folder, run this command once to install VitePress and other tools.
    ```bash
    # In the same terminal used to clone the repo
    npm install
    ```

3.  **Create a Branch:**
    Keep your changes organized by creating a new branch for each feature or fix.
    ```bash
    # Examples: feature/new-csp-guide, fix/typo-in-install-doc
    git checkout -b your-descriptive-branch-name
    ```

4.  **Make & Preview Changes:**
    -   Start the local development server:
        ```bash
        npm run docs:dev
        ```
    -   Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser.
    -   Edit or add files in your code editor. The site will update live as you save your changes.
    -   Remember to follow our [Style Guide](./style-guide.md) and link new pages in `docs/.vitepress/config.ts` if they need to appear in the sidebar.

5.  **Commit Your Work:**
    Use clear, concise commit messages.
    ```bash
    git add .
    git commit -m "Your descriptive commit message"
    ```
    :::tip Conventional Commits
    We encourage the use of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat: Add Sol installation guide`, `fix: Correct link in Pure docs`). It helps keep our history clean.
    :::

6.  **Push to Your Fork:**
    ```bash
    git push origin your-descriptive-branch-name
    ```

7.  **Submit a Pull Request:**
    -   Go to your fork on GitHub. A prompt to `Compare & pull request` should appear.
    -   Provide a clear title and description for your PR. If it addresses an issue, link it (e.g., `Closes #123`).
    -   Click `Create pull request`.

Our team will review your PR. We may suggest changes or ask for revisions.

## StackBlitz

You can use StackBlitz to edit and preview changes online without a local setup:

1.  Go to the [ARC repository](https://github.com/creacher4/assetto-corsa-arc).
2.  Change `github.com` in the URL to `stackblitz.com/github` (e.g., `stackblitz.com/github/creacher4/assetto-corsa-arc`).
3.  StackBlitz will set up the project. You may need to run `npm run docs:dev` in its built-in terminal to start the live preview.

:::warning StackBlitz & `lastUpdated`
If you see an error like `spawn git ENOENT` on StackBlitz, it's likely due to the `lastUpdated` feature. Temporarily disable it in `docs/.vitepress/config.ts` by setting `themeConfig.lastUpdated` to `false`. There are two ways to do this: either by omitting the `lastUpdated` property completely (since it's disabled by default), or by using the following code snippets:

```ts
// active
lastUpdated: {
    text: "Last Updated",
},

// inactive
lastUpdated: false,
```
:::

## Communication

-   **GitHub Issues:** For specific bugs, features, and content discussions.
-   **Discord:** For general chat, quick questions, and collaboration. Join us: [https://discord.gg/Szd4nu4wEp](https://discord.gg/Szd4nu4wEp).