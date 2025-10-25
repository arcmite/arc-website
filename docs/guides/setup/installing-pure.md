# Pure

> <Badge type="tip" text="Updated"/>

Pure is a weather and graphics add-on for **Assetto Corsa** and **Custom Shaders Patch (CSP)**, created by [Peter Boese](/creators/peter-boese). It provides enhanced lighting, weather realism, shadows, reflections, and extensive Post-Processing Filter (PPFilter) support.

Pure is considered essential for achieving the most realistic visuals in CSP-based setups.

## Prerequisites

- Assetto Corsa v1.16.3/4 (64-bit only), installed via Steam.
- A program capable of extracting `.zip` archives.
- Latest [Content Manager](installing-cm) installed and configured.
- Latest [CSP version](installing-csp) installed and working.
- An [active Patreon subscription to Peter Boese](https://www.patreon.com/c/peterboese/posts) (required for access to the latest builds).

:::warning Missing Dependencies?
If you’re not sure your system is ready, check the [Requirements](/guides/requirements) guide first.
:::

## Download

Pure is distributed exclusively via Peter Boese’s Patreon. Once subscribed, you can download the latest `.zip` archive from the posts.

<DownloadCard
  title="Pure Graphics Mod"
  caption="Requires an active Patreon subscription to Peter Boese."
  buttonLink="https://www.patreon.com/c/peterboese/posts"
  buttonText="Go to Patreon"
/>

:::info Info
Downloads follow this format:

```bash
Pure_X.XX Highres.zip
# Where X.XX is the version number
```
:::

## Installation

Pure must be installed manually, **do not install via Content Manager**.

1. Locate the downloaded `.zip` file in your `Downloads` folder.
2. Extract its contents directly to your [root folder](/guides/modding/root-folder#find-your-root-folder).
3. Allow file overwrites if prompted.

:::info Best Practice
Always restart Content Manager after installing Pure to avoid missing menu entries or weather configuration issues.
:::

## Enabling Pure

After installing Pure:

1. Open Content Manager.
2. Go to `Settings > Custom Shaders Patch`.
3. In the left-hand list, under `Extensions`, click on `WeatherFX`.
4. Under `Weather Style`, select `Pure Gamma` or `Pure LCS`.

<!-- consider adding info box for the difference between pure gamma and lcs. either by linking to the wiki or writing it here -->

:::warning Singleplayer Note
When launching a singleplayer session, make sure to set the `Weather Controller` to `Pure` in the quick race menu.
:::

## Version Information

- Always use the **latest** versions of both Pure and CSP.
- Some Pure releases require a minimum CSP version, so make sure to check the Patreon release notes before updating.
- Mixing outdated Pure with new CSP (or vice versa) can cause missing features or visual glitches.
