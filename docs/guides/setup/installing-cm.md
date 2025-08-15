# Content Manager

> <Badge type="tip" text="Updated"/>

Content Manager is an alternative launcher for Assetto Corsa that provides powerful features for content management, online play, and game configuration. It is considered essential for a modern Assetto Corsa installation.

## Prerequisites

- Assetto Corsa v1.16.3/4 (64-bit only), installed via Steam.
- A program capable of extracting `.zip` archives.

:::warning Missing Dependencies?
If you're unsure whether your system is ready, check the [Requirements](/guides/requirements) guide first.
:::

## Installation

The installation process involves downloading the executable, placing it in a safe location, and running the initial configuration.

### Download

First, download the application from the official website.

<DownloadCard
  title="Content Manager"
  caption="The essential launcher for Assetto Corsa."
  buttonLink="https://acstuff.ru/app/"
  buttonText="Download Content Manager" 
/>

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
3. Select `Manage > Browse local files`.
4. The path of the File Explorer window that opens is your root folder.
:::

### Other Settings

- **Steam ID:** CM will attempt to auto-detect your Steam ID. Confirm if prompted.
- **Plugins:** CM may offer to install optional plugins like 7-Zip integration. These are not required for basic functionality but can be useful for mod management. They can be added or removed later via `Settings > Content Manager > Plugins`.

Click `OK` to save the settings. Content Manager will now start.

### Version Information

Content Manager has a free (Lite) and a paid (Full) version.

:::info Lite Version <Badge type="tip" text="Free"/>
Includes all core functionality for managing content, driving, and configuring game settings. It is sufficient for most users.
:::

:::details Full Version <Badge type="warning" text="Paid"/>
Unlocked by donating to the developer. It adds advanced features:
- Access to pre-release and experimental builds.
- Online server creation and management tools.
- Custom offline championships.
- Advanced modding tools, including a detailed custom showroom.
- Unlocks dynamic weather features in Custom Shaders Patch.

To upgrade, go to `Settings > Content Manager > General` and click `Change` to enter the key you received via email after donating.
:::