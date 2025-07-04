# Installing Content Manager

Content Manager (CM) is an alternative launcher for _Assetto Corsa_ (AC), packed with features that go beyond the original. Developed by [Ilja Jusupov](../../../creators/ilja-jusupov), it is considered essential for anyone looking to mod the game, manage content, or join online servers.

This guide walks you through downloading, installing, and configuring Content Manager.

## Prerequisites

- _Assetto Corsa_ installed via Steam
- A program to extract `.zip` or `.7z` files

:::warning Incomplete?
See [Requirements](../requirements) if you haven’t completed these steps yet.
:::

## Download

Content Manager is available from its official website. [Download](https://acstuff.ru/app/) the latest release archive (typically a `.zip`).

### Version Information

<!-- This entire section needs fact checking because I've actually almost 0 idea what the full version actually brings other than server management -->

Content Manager comes in two versions:

:::info Lite
Free and fully functional for most users. Includes everything you need for mod management, gameplay, and basic setup.
:::

:::details Full
A key unlocked by donating to the developer. Adds advanced tools for:
  - Server management
  - Custom careers and events
  - Detailed content/modding controls
  - Access to experimental builds
:::

:::tip Do I need the Full version?
If you are new to Assetto Corsa or a casual player, the lite version is all you need. Consider donating for a key if you plan to manage online servers or engage in further mod development.
:::

## Installation

Content Manager doesn't have a traditional installer. You simply extract the main program file and run it.

### Extraction

1.  Open the downloaded archive, `content-manager.zip`.
2.  You will find a file named `ContentManager.exe` inside, along with a `Manifest.json`.
3.  For ease of access, drag `ContentManager.exe` directly onto your desktop. Alternatively, create a dedicated folder and place it in there.

    <!-- Placeholder for a screenshot of dragging Content Manager.exe to Desktop or a folder -->
    <!-- <img src="/images/guides/cm-extract-desktop.png" alt="Dragging Content Manager.exe"> -->

### Running

Double-click `ContentManager.exe` from where you placed it (e.g., your Desktop) to launch it for the first time.

## Initial Configuration

On first launch, Content Manager prompts for basic configuration:

### Root Folder

CM needs to know where your Assetto Corsa game is installed.

- The typical path is: `C:\Program Files (x86)\Steam\steamapps\common\assettocorsa`
- If you installed AC in a different Steam Library or custom location, browse to that folder.

:::details Find your root folder
1. Open Steam and go to your Library.
2. Right-click on `Assetto Corsa`.
3. Go to `Manage -> Browse local files`.
4. The File Explorer window that opens shows your AC root folder. Copy this path.
:::

<!-- Placeholder for a screenshot of CM asking for AC root path -->
<!-- <img src="/images/guides/cm-ac-root-prompt.png" alt="Content Manager asking for Assetto Corsa root path"> -->

### Your Steam ID

CM will usually attempt to detect your Steam ID automatically. If prompted, or if you need it for other purposes:

::: details Find your Steam ID
1. Open your Steam client.
2. Click your profile name in the top right, then select `View my profile`.
3. Right-click anywhere on your profile page and select `Copy Page URL`.
4. Paste this URL into a Steam ID finder website (e.g., `steamid.io` or `steamidfinder.com`). It will display your SteamID64 along with other formats.
:::

### Plugins

CM may offer to install some additional plugins, such as integration for handling archives, or others for specific functionalities.

- These plugins are _optional_. You do not need to install all, or any, of them for CM to function correctly with Assetto Corsa.
- Install any you think might be useful (like 7-Zip integration if you frequently download mods in the `.7z` format). You can manage these later in CM's settings.

<!-- Placeholder for a screenshot of CM initial settings screen, possibly highlighting the optional plugins -->
<!-- <img src="/images/guides/cm-initial-settings-plugins.png" alt="Content Manager initial settings screen with plugin options"> -->

### Finalizing Setup

Click `OK` or `Apply` to save these initial settings. Content Manager will then launch.

:::tip Unlocking the Full Version
If you have a key, you can activate it in Content Manager by navigating to `Settings > Content Manager > General` and under the `App` header, click `Change` and enter your key.
:::

## Troubleshooting

Below are common issues encountered during setup, along with their solutions.

:::details AC root folder not found
Double-check that you've selected the main `assettocorsa` folder, the one containing `acs.exe`. Use Steam’s `Browse local files` option to locate the correct path.
:::
:::details Antivirus Flags `ContentManager.exe`
Some antivirus programs may flag CM as suspicious due to its deep system integration. If downloaded from [acstuff.ru](https://acstuff.ru/app/), this is almost always a false positive. You can add an exception in your antivirus for the CM executable or its folder.
:::
:::details CM is slow or freezes on first launch
If you already have lots of mods installed (cars, tracks, etc.), CM will need time to index everything. This is normal and only occurs once per large content update. Ensure your system meets at least the minimum specs for AC. See [Requirements](../requirements) for details.
:::
