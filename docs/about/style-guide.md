# Style Guide

> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>

This guide defines the writing, formatting, and structural conventions used throughout the ARC documentation. Follow this guide when contributing new pages, updating existing ones, or reviewing PRs.

## Style for Guides section

- Always start off with #(Page Name)

```
# Guide Example
```

- Include badges to signfy the progress of the page

```
> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>
```

- For different sections use two ##'s

```
## Installation
```

- For subsections, use three ##'s

```
### Download
```

- For extra info, tips, warnings, danger and more details, use :::

```
:::Warning Dangerous Habits while Browsing
Do not click random links on the internet
:::
```

- For downloads that need to be integrated into the website, use the DownloadCard vue.

```
<DownloadCard
  title="Content Manager"
  caption="The essential launcher for Assetto Corsa."
  buttonLink="https://acstuff.ru/app/"
  buttonText="Download Content Manager"
/>
```

- For installation paths and download names, use code blocks

```powershell
C:\Program Files (x86)\Steam\steamapps\common\assettocorsa
```

- If linking a specific setting, use code

```
`Settings > Content Manager > General`
```

- An image can be added using the following code (ensure it leads to the correct image path)

```
![Steam menu showing how to browse local files](/images/guides/root-folder/steam.png)
```

- Tables can be added either manually or using [markdown table generator (heavily recommended)](https://www.tablesgenerator.com/markdown_tables#)

```
| Header 1 |    Header 2   |
| -------- |    --------   |
|  Item 1  | Description 2 |
```

## Style for Creators section

- Use the code featured in the example creator ["Foo-Bar"](/creators/foo-bar) and modify it as necessary
- Ensure you add the creator's image in "Public/Images/Creators"

## Style for Wiki section

- Always start off with #(Page Name)

```
# Guide Example
```

- Include badges to signfy the progress of the page

```
> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>
```

- For different sections use two ##'s

```
## Installation
```

- Link to other pages if mentioned/necessary

```
[Style Guide](About/Style-Guide)
```

## Style for Showcase section

- Firstly, add your desired image to "public/images/showcase"
- Secondly, go to "Showcase/data.ts" and add your entry following the code format below:

```
  {
    src: "/images/showcase/bannochbrae.png",
    alt: "A scenic shot of Bannochbrae",
    author: "sql",
    details: { ppfilter: "C13", car: "N/A", track: "Bannochbrae" },
  },
```
