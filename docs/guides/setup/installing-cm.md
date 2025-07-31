# Content Manager

> This guide covers the installation and initial setup of Content Manager (CM).

Content Manager is an alternative launcher for Assetto Corsa that provides powerful features for content management, online play, and game configuration. It is considered essential for a modern Assetto Corsa installation.

## Prerequisites

- Assetto Corsa installed via Steam.
- A program capable of extracting `.zip` archives.

:::warning Incomplete?
Refer to the [Requirements](../requirements) guide if you have not met these prerequisites.
:::

## Installation

Installation involves downloading the application archive and extracting the executable.

### Download

Download the latest version from the official website. It will be a `.zip` archive.

- **Official Link:** [acstuff.ru/app/](https://acstuff.ru/app/)

### Extract

1. Open the downloaded `.zip` archive.
2. Locate the `ContentManager.exe` file.
3. Extract `ContentManager.exe` to a permanent location, such as your Desktop or a dedicated folder.

:::warning Best Practice
Do not place `ContentManager.exe` inside the Assetto Corsa root folder. Keeping it separate prevents accidental deletion or issues when verifying game files.
:::

### Run

Launch Content Manager by double-clicking `ContentManager.exe`. The initial setup process will begin automatically.

## Configuration

On first launch, CM requires some basic configuration.

### Root Folder

You will be prompted to specify the Assetto Corsa installation directory.

- The default Steam path is typically:

```powershell
C:\Program Files (x86)\Steam\steamapps\common\assettocorsa
```

:::info Find your root folder
If, for any reason, you cannot find your root folder, you can use the following method:
1. In the Steam app, open your Steam Library.
2. Right-click on `Assetto Corsa`.
3. Select `Manage` -> `Browse local files`.
4. The path of the File Explorer window that opens is your root folder.
:::

### Other Settings

- **Steam ID:** CM will attempt to auto-detect your Steam ID. Confirm if prompted.
- **Plugins:** CM may offer to install optional plugins like 7-Zip integration. These are not required for basic functionality but can be useful for mod management. They can be added or removed later via `Settings > Content Manager > Plugins`.

Click `OK` to save the settings. Content Manager will now start.

### Version Information

Content Manager has a free (Lite) and a paid (Full) version.

:::info Lite Version (Free)
Includes all core functionality for managing content, driving, and configuring game settings. It is sufficient for most users.
:::

:::details Full Version (Paid)
Unlocked by donating to the developer. It adds advanced features:
- Access to pre-release and experimental builds.
- Online server creation and management tools.
- Custom offline championships.
- Advanced modding tools, including a detailed custom showroom.
- Unlocks dynamic weather features in Custom Shaders Patch.

To upgrade, go to `Settings > Content Manager > General` and click `Change` to enter the key you received via email after donating.
:::

## Troubleshooting

For common issues encountered during setup.

:::details Assetto Corsa root folder not found
Ensure the selected path is the main `assettocorsa` folder, which contains `acs.exe`. Use the "Browse local files" method in Steam to verify the correct location.
:::

:::details Antivirus flags `ContentManager.exe`
Antivirus software may flag the executable due to its function as a launcher. If downloaded from the official `acstuff.ru` link, this is a false positive. Add an exception for `ContentManager.exe` in your antivirus settings.
:::

:::details CM fails to launch or shows a .NET Framework error
Content Manager requires the Microsoft .NET Framework to run. If it fails to start, download and install the latest version of .NET Framework (typically 4.5 or higher) from the official Microsoft website.
:::

:::details CM is slow or freezes on first launch
If you have a large number of mods, CM will index them on first start. This process can be resource-intensive but is a one-time operation for your existing content.
:::