# Installing mods

> <Badge type="tip" text="Updated"/>

This will show how to install mods manually as using Content Manager will either break the mod or cause issues. If you installed a mod using Content Manager and it is having issues, follow this and it will overwrite the previous bad installation.

## Find your Root Folder

First go to your Root Folder, which you can find by [following our guide on how to find your Root Folder](../modding/root-folder.md)

## Identifying your installation process
Some mods will require different installation processes depending on how they are packed. For example, if the mod is contained in `content/tracks/shuto_revival_project_beta` then all the user would have to do is drag it into their root folder. However, if it is just `shuto_revival_project_beta` then they would need to open `Content` → `Tracks` and move the folder into there.

The folders most relevant to installing mods are: `apps`, `content` `system` and `extension`

## Apps
Within Apps, there are 2 folders; `lua` and `python`. Inside the modded app folder, it should contain a `.lua` or a `.py` so you will need to move it into the relevant folder.

## Content
Within Content, there are a large range of folders but the most common ones are `tracks` and `cars`. It should be self-explanatory on which one goes where.

## Extension
Within extension, there are a large range of folders but the most common one is `config-ext` which contains all the Pure configurations and Filter script settings.

## System
Within extension, there are a large range of folders but the most common one is `cfg` which contains all the actual Post-Processing Filter files and scripts
