# Custom Shaders Patch

> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>

Custom Shaders Patch (CSP) is an extension for Assetto Corsa that adds advanced visual effects, new physics features, and numerous optimizations. It enables features such as dynamic lighting, a full day–night cycle, improved weather systems, and enhanced graphics.

## Prerequisites

- Assetto Corsa v1.16.3/4 (64-bit only), installed via Steam.
- A program capable of extracting `.zip` archives.
- [Content Manager](installing-cm) installed and configured.

:::warning Missing Dependencies?
If you're unsure whether your system is ready, check the [Requirements](/guides/requirements) guide first.
:::

## Download

Custom Shaders Patch is distributed as a `.zip` archive from the official website.

<DownloadCard
  title="Custom Shaders Patch"
  caption="Stable builds are free. Preview builds may require Patreon access."
  buttonLink="https://acstuff.club/patch/"
  buttonText="Download Custom Shaders Patch"
/>

:::info Info
Downloads follow this format:

```bash
lights-patch-v0.X.XX.zip
# Where `X.XX` is the version number

lights-patch-v0.X.X-previewXXX-full.zip
# Preview versions look like the following and enable rain
```
:::

## Installation

There are two ways to install CSP:

### Content Manager

1. Download the CSP `.zip` archive.
2. Open Content Manager.
3. Drag and drop the `.zip` file into the CM window.
4. CM will prompt to install CSP, confirm.
5. Wait for the install to complete.

### Manual Installation <Badge type="tip" text="Recommended"/>

1. Download the CSP `.zip` archive.
2. Extract its contents to your [root folder](/guides/modding/root-folder#find-your-root-folder). Allow file overwrite if prompted.
3. Restart Content Manager to ensure changes are recognized.

:::info Best Practice
Always restart CM after installing CSP. Without a restart, CSP’s configuration panel may not load properly or may display outdated settings.
:::

## Configuration

After installing CSP:

1. Open Content Manager.
2. Go to `Settings > Custom Shaders Patch > General Patch Settings`.
3. Enable CSP by ticking the checkbox at the top.
4. Review the modules listed in the left sidebar (e.g., WeatherFX, LightingFX, ExtraFX). You can enable or disable features as needed.

:::info Compatibility
If using [Pure](installing-pure), ensure your CSP version meets Pure’s minimum version requirement. Using older CSP builds can break weather features.
:::

## Version Information

- **Recommended Builds:** Marked as *recommended* on the download page. These offer a balance of stability and features.
- **Preview Builds:** Early access via Patreon. Enables Rain functionality and is useful for testing new features or required by some latest mods.
- **Buggy/Untested:** Experimental builds with incomplete testing — only use if explicitly required.

:::warning Downgrading CSP
If a newer CSP version breaks something, you can revert by installing an older `.zip` in the same way as above. CM will overwrite the existing files.
:::
