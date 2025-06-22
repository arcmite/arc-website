# Installing Content Manager

Content Manager (CM) is an alternative launcher for _Assetto Corsa_, packed with features that go beyond the original. Developed by [Ilja Jusupov](../../../creators/ilja-jusupov), it is considered essential for anyone looking to mod the game, manage content, or join online servers.

This guide walks you through downloading, installing, and configuring Content Manager.

## Prerequisites

- _Assetto Corsa_ installed via Steam
- A program to extract `.zip` or `.7z` files

:::warning Incomplete?
See [Requirements](../requirements) if you haven’t completed these steps yet.
:::

## Download

Content Manager is available from its official website:

- **Official Download:** [acstuff.ru/app/](https://acstuff.ru/app/)

::: details Version Information
Content Manager has two versions: Lite and Full.

When you first download Content Manager, you get the Lite version, which is free and fully usable. It includes everything most users need: mod management, driving, and basic setup.

The Full version, unlocked by donating to the developer, adds extra features like:

- Advanced server setup tools
- Custom career and special event support
- More detailed content and modding controls
- Access to experimental features

Unless you're hosting servers or doing in-depth content work, the Lite version is more than enough.
:::

Download the latest release archive (typically a `.zip`).

## Installation

Content Manager doesn't have a traditional installer. You simply extract the main program file and run it.

**Extraction and Placement**

1.  Open the downloaded archive, `content-manager.zip`.
2.  You will find a file named `ContentManager.exe` inside, along with a `Manifest.json`.
3.  For ease of access, you can drag `ContentManager.exe` directly onto your Desktop. Alternatively, you can create a dedicated folder and place it there.

    <!-- Placeholder for a screenshot of dragging Content Manager.exe to Desktop or a folder -->
    <!-- <img src="/images/guides/cm-extract-desktop.png" alt="Dragging Content Manager.exe"> -->

**Running**

Double-click `ContentManager.exe` from where you placed it (e.g., your Desktop) to launch it for the first time.

## Initial Configuration

On first launch, Content Manager prompts for basic configuration:

**Assetto Corsa Root Folder**

CM needs to know where your Assetto Corsa game is installed.

- The typical path is: `C:\Program Files (x86)\Steam\steamapps\common\assettocorsa`
- If you installed AC in a different Steam Library or custom location, browse to that folder.

::: details Find your root folder

1. Open Steam and go to your Library.
2. Right-click on "Assetto Corsa."
3. Go to `Manage -> Browse local files`.
4. The File Explorer window that opens shows your Assetto Corsa root folder. Copy this path.
   :::

<!-- Placeholder for a screenshot of CM asking for AC root path -->
<!-- <img src="/images/guides/cm-ac-root-prompt.png" alt="Content Manager asking for Assetto Corsa root path"> -->

**Your Steam ID**

CM will usually attempt to detect your Steam ID automatically. If prompted, or if you need it for other purposes:

::: details Find your Steam ID

1. Open your Steam client.
2. Click your profile name in the top right, then select "View my profile."
3. Right-click anywhere on your profile page and select "Copy Page URL."
4. Paste this URL into a Steam ID finder website (e.g., `steamid.io` or `steamidfinder.com`). It will display your SteamID64 and other formats.
   :::

**Plugins**

CM may offer to install some additional plugins, such as "7-Zip" integration for handling archives or others for specific functionalities.

- These plugins are **optional**. You do not need to install all, or any, of them for CM to function correctly with Assetto Corsa.
- Install any you think might be useful (like 7-Zip integration if you frequently download mods in `.7z` format). You can manage these later in CM's settings.

<!-- Placeholder for a screenshot of CM initial settings screen, possibly highlighting the optional plugins -->
<!-- <img src="/images/guides/cm-initial-settings-plugins.png" alt="Content Manager initial settings screen with plugin options"> -->

**Finalizing Setup**

Click "OK" or "Apply" to save these initial settings. Content Manager will then launch.

::: details Unlocking the full version
If you've donated and received a key, go to `Settings → Content Manager → General`, and under the `App` section, click "Change" to enter your activation key.
:::

## Troubleshooting

- **"Assetto Corsa root folder not found" or "Invalid Path":**
  - Carefully verify the path you provided. Ensure it's the main `assettocorsa` folder (the one containing `acs.exe`), not a subfolder.
  - Use the "Browse local files" method in Steam (detailed above) to confirm the correct path.
- **Antivirus Flags `ContentManager.exe`:**
  - This can occasionally happen with new software versions, especially tools that interact deeply with other applications. If you downloaded CM from the official `acstuff.ru` site, it's almost always a false positive.
  - Consider adding an exception for `ContentManager.exe` or its containing folder in your antivirus software.
- **CM is Slow or Unresponsive on First Start:**
  - If you have a very large amount of existing _Assetto Corsa_ content (many cars and tracks), CM might take some time to scan and catalog everything during its initial startup or after new content is added. This is usually a one-time process for new content.
  - Ensure your PC meets at least the minimum requirements for _Assetto Corsa_. See [Requirements](../requirements) for details.
