# VR guide for Assetto Corsa and CSP

> [!NOTE]
> For further help or if you want to report a game issue, join the [`Custom Shaders Patch Discord`](https://discord.gg/zN4XtmZ4Jf) and use the [`virtual-reality-talk`](https://discord.com/channels/453595061788344330/615211984639754260) channel.

> The purpose of this guide is to help with basic VR setup and adjusting your settings for the best experience.  
> It also covers usage of OpenComposite and the OpenXR Toolkit.  
> This guide is written with Content Manager and Custom Shaders Patch in mind and is not intended to work with vanilla Assetto Corsa.

> [!TIP]
> Most people should only have to read up to video settings, beyond that is more in depth coverage of various settings which may not be needed.

<!--> <!-->
<!--> <!-->
<!--> <!-->

## 1. Prerequisites

:::info

- Assetto Corsa v1.16.3/4 (64-bit only), installed via Steam.
- Latest version of Content Manager
- Latest version of Custom Shaders Patch unless said otherwise.
- Latest version of Pure (Delivers the best image in VR)
  :::
  <!--> <!-->
  <!--> <!-->
  <!--> <!-->

## 2. Basic VR setup

:::::info
:::tip
Click on your brand of headset to expand the instructions, you only need to use one of the provided methods.
:::

::::details Oculus / Meta

:::details **Oculus (Easy setup)**
This is the easiest and for most users the best method

1. First make sure that you have successfully set up Quest link or Air link and that the headset is connected to your PC - [Tutorial how to do so](https://www.meta.com/help/quest/articles/headsets-and-accessories/oculus-link/connect-with-air-link/)  
   1.1. If youre using an Oculus Rift (S) then you simply need to have the headset connected and showing in the oculus app.
2. In the Oculus App, <ins>Settings > General</ins> enable "Unknown sources" and next to the "OpenXR Runtime" press "Set Oculus as active" (If its greyed out then you don't need to press it)
3. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and set "Rendering Mode" to "Oculus Rift".

**You do not need SteamVR for this**
:::

:::details **OpenComposite (Best performance)**
Should deliver a similar experience to native Oculus but will let you use the OpenXR Toolkit  
Can deliver better performance  
Intended more for advanced users

1. First make sure that you have successfully set up Quest link or Air link and that the headset is connected to your PC - [Tutorial how to do so](https://www.meta.com/help/quest/articles/headsets-and-accessories/oculus-link/connect-with-air-link/)  
   1.1. If youre using an Oculus Rift (S) then you simply need to have the headset connected and showing in the oculus app.
2. In the Oculus App, <ins>Settings > General</ins> enable "Unknown sources" and next to the "OpenXR Runtime" press "Set Oculus as active" (If its greyed out then you don't need to press it)
3. Set up OpenComposite, [instructions here](/opencomposite-openxr-toolkit?id=to-install-opencomposite)
4. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and set "Rendering Mode" to "OpenVR"

Using this method you can also look into the [OpenXR Toolkit](/opencomposite-openxr-toolkit?id=_72-openxr-toolkit)
:::

:::details **Virtual Desktop**
Virtual Desktop can potentially deliver a better experience but it is also paid.

1. Purchase Virtual Desktop on the Oculus / Meta store (do not buy it on steam itself)
2. Follow the instructions provided in Virtual Desktop to connect your headset to your PC (Quest / Air Link is not required).
3. Open the Virtual Desktop Streamer application, and under settings, select VirtualDesktopXR (VDXR) as the OpenXR runtime.
4. Set up OpenComposite, [instructions here](/opencomposite-openxr-toolkit?id=to-install-opencomposite)
5. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and set "Rendering Mode" to "OpenVR"
   :::

:::details **SteamVR**
Generally not recommended to use

1. First make sure that you have successfully set up Quest link or Air link and that the headset is connected to your PC - [Tutorial how to do so](https://www.meta.com/help/quest/articles/headsets-and-accessories/oculus-link/connect-with-air-link/)  
   1.1. If youre using an Oculus Rift (S) then you simply need to have the headset connected and showing in the oculus app.
2. Install and set up SteamVR from Steam
3. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and set "Rendering Mode" to "OpenVR"
   :::

:::details Oculus / Meta additional notes and troubleshooting {open}

- If you're using the USB cable and quest link (wired) set the encode bitrate to 500mbps or higher in the Oculus Debug Tool. More info about the [Oculus Debug Tool here](https://smartglasseshub.com/oculus-debug-tool/).
- Game lagging when using the headset wirelessly: Your router might not be able to handle the high amount of bandwidth required for a smooth experience, this will generally show as high network latency. Try to lower the bitrate in the [Oculus Debug Tool](https://smartglasseshub.com/oculus-debug-tool/) or set it to 0 for auto bitrate.
- When using USB-C make sure your headset runs at USB 3 and not USB 2 speeds (Should be around 1.5Gbps or higher), if it keeps connecting via USB 2 even with a new cable and using a USB 3 port, reset your headset to factory defaults which will fix the issue.
  :::
  ::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

::::details SteamVR headsets (Vive, Index, Bigscreen beyond)
:::details **Native SteamVR** {open}

1. Make sure your headset is connected to your PC
2. Install and set up SteamVR from Steam
3. Some headsets might require an additional driver or utility to function correctly, follow the provided instructions for your headset.
4. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and change "Rendering Mode" to "OpenVR"
   :::
   ::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

::::details Windows Mixed Reality headsets
:::details **Using Oasis SteamVR driver (Recommended)** {open}

- 1. Make sure your headset is connected to your PC
- 2. [Install Oasis Driver for Windows Mixed Reality](https://store.steampowered.com/app/3824490/Oasis_Driver_for_Windows_Mixed_Reality/)
- 3. [Follow Oasis instructions](https://github.com/mbucchia/Oasis-Driver-for-Windows-Mixed-Reality/wiki#hello-and-welcome-to-the-oasis-driver-for-windows-mixed-reality-documentation)
- 4.  In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and change "Rendering Mode" to "OpenVR"

:::details **Using OpenComposite**
:::warning Use this ONLY if the Oasis SteamVR driver doesn't work for you

5.  Make sure your headset is connected to your PC
6.  Install and set up Windows Mixed Reality from the Microsoft Store
7.  Install and set up OpenXR Tools for Windows Mixed Reality from the Microsoft Store
8.  If you see a button that says "Set as active runtime" - press it.
9.  [Set up OpenComposite](/opencomposite-openxr-toolkit?id=to-install-opencomposite)
10. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and change "Rendering Mode" to "OpenVR"
    Using this method you can also look into the [OpenXR Toolkit](/opencomposite-openxr-toolkit?id=_72-openxr-toolkit)

::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

::::details Pimax Headsets
:::details **Using OpenComposite (Recommended)**

1. Make sure your headset is connected to your PC
2. [Install and set up Pimax Play](https://pimax.com/pages/downloads-manuals)
3. [Set the OpenXR Runtime to Pimax OpenXR in Pimax Play](https://pimax.com/blogs/blogs/how-to-use-pimax-openxr)
4. [Set up OpenComposite](/opencomposite-openxr-toolkit?id=to-install-opencomposite)
5. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and change "Rendering Mode" to "OpenVR"

Using this method you can also look into the [OpenXR Toolkit](/opencomposite-openxr-toolkit?id=_72-openxr-toolkit)
:::

:::details **Using SteamVR**

1. Make sure your headset is connected to your PC
2. [Install and set up Pimax Play](https://pimax.com/pages/downloads-manuals)
3. Install and set up SteamVR from Steam
4. In Content Manager go to <ins>Settings > Assetto Corsa > Video</ins> and change "Rendering Mode" to "OpenVR"
   :::
   ::::
   :::::
   <!--> <!-->
   <!--> <!-->
   <!--> <!-->

## 3. Resolution and Reprojection

:::::info
::::details Resolution

Unlike monitors, VR headsets dont have a "native" resolution because of [barrel distortion](https://github.com/user-attachments/assets/cc384ebe-96b5-4272-a26b-cf7a3eb14afe) which reduces detail in the center part of the image, to counteract that we need to supersample - use a higher resolution.  
It is important to set the resolution as high as possible while also trying to avoid sacrificing performance.  
Start with 100% or 1.0x resolution (can also be called render scale) and adjust as needed based on Quality and Performance.  
On some headsets (like Pimax) 100% can already be very high resolution, you might have to lower it to get good performance.

:::info **Oculus / Meta**
You can adjust it in the Oculus app (Settings > Graphics Preference > Render Resolution) Or in the [Oculus Debug Tool](https://smartglasseshub.com/oculus-debug-tool/) with the Pixels Per Display Pixel Override setting.
:::

:::info **Steam VR**
You can adjust it in SteamVR settings > Video > Render resolution (Set to custom).
:::

:::info **Windows Mixed Reality**
You can adjust it in OpenXR Tools for Windows Mixed Reality (Custom Render Scale).
:::

:::info **Pimax**
You can adjust it in the Pimax Play software (Render Quality).
:::

:::warning
The Resolution in Content Manager <ins>Settings > Assetto Corsa > Video</ins> does NOT affect VR resolution.
:::
::::
::::details Reprojection

Reprojection reduces system load by halving the amount of rendered frames and extrapolating the rest to maintain a smooth experience, very similarly to frame generation.  
For example - Using a 90Hz headset, your PC would need to render only 45 fps, the rest being generated by reprojection.  
However, it may cause artifacts, input delay, or stuttering (if it's switching between reprojection on or off).

:::info **Oculus / Meta**
You can set it in the [Oculus Debug Tool](https://smartglasseshub.com/oculus-debug-tool/) with the PC Asynchronous Spacewarp setting. (Debug tool can sometimes not honor the setting and ignore it). <br> <br>
Alternative method: Download [this archive](https://github.com/Raptyyy/rapty_ac_vr_guide/raw/refs/heads/main/resources/oculus%20asw%20enable%20disable%20registry.zip)  
 Run "oculus disable asw.reg" to disable ASW, or "oculus enable asw.reg" to enable it.
:::

:::info **Steam VR**
You can set it in SteamVR settings (Video > Motion Smoothing).
:::

:::info **Windows Mixed Reality**
Uou can set it in OpenXR Tools for Windows Mixed Reality (Motion Reprojection Rate).
:::

:::info **Pimax**
You can set it in the Pimax Play software (Smart Smoothing).
:::

:::info
Any headset using OpenComposite and the OpenXR Toolkit can also adjust Resolution and Reprojection through the OpenXR Toolkit.
:::
::::
:::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

## 4 Video and CSP Presets

:::::info
:::warning
Save your current settings as presets in Content Manager for Video and Custom Shaders Patch!
:::

::::details Video Presets

If you don't want to read through the sections below, try each each of the presets and see what works best. These are some video presets made by [Raptyyy](https://github.com/Raptyyy)and should be adjusted to your needs.
Make sure to double check the <ins>Rendering Mode</ins> so that its set correctly for your headset !

- High Performance: [Link here](https://acstuff.club/s/lW4B) (Disable post processing if you need even more performance)
- Balanced: [Link here](https://acstuff.club/s/oFw)
- High Quality: [Link here](https://acstuff.club/s/hPvJ) (For best graphics find a good pp filter)

:::tip
You don't need to use frame limiters in VR since the framerate will be capped to the headsets refresh rate anyway. Using fps limiters can potentially cause performance issues.
:::
::::

::::details CSP Presets

These presets are simply to be used as a base for your own preference. Test the presets out and adjust as needed.

- High Performance - [Link here](https://acstuff.club/s/Ozx3) (This preset has a lot of modules disabled for a little extra performance)
- Balanced - [Link here](https://acstuff.club/s/PaP3)
- High Quality - [Link here](https://acstuff.club/s/J0Je)

:::warning
Foveated rendering / Nvidia VRS is NOT enabled in any of these, read the chapter about [Foveated Rendering here](foveated-rendering)
:::
::::
:::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

## What is Foveated Rendering

:::::info
:::warning
Note that since Assetto Corsa is a DirectX 11 game, Foveated Rendering works ONLY on Nvidia 16xx, 20xx, 30xx and 40xx series GPUs or newer.
:::
Foveated rendering helps to achieve greater performance in VR by rendering the outer parts of the image at a lower resolution as shown in the example below. This makes sense on most headsets as only the center part of the lense is in focus and can display the image clearly.  
Foveated rendering is the biggest performance increase (GPU load wise) that you can get in VR so it is highly recommended to take advantage of it.  
Some headsets with eye tracking can support Dynamic Foveated Rendering (more info about this in the future)

![Foveated Rendering](/images/guides/vr-guide/foveated-rendering.jpg)

:::tip
Foveated rendering might be easily noticeable on headsets that use pancake lenses with large sweetspots such as the Quest 3 or Pico 4, on such headsets it is recommended to use a very large center ring.
:::

:::info **Ways to enable / use Foveated rendering (Use only one of these methods):**

- Enable `Nvidia VRS` in Custom Shaders Patch, [explained further here](/csp-settings?id=nvidia-vrs) (Recommended for most users)
- Enable `Foveated Rendering` in the `OpenXR Toolkit` if you're using OpenComposite, [explained further here](/opencomposite-openxr-toolkit?id=recommended-settings-for-the-toolkit) (Gives more adjustability compared to Nvidia VRS, intended for Advanced users)
- For Pimax users you can enable `Foveated Rendering` in `Pimax Play` (More convenient but less options compared to the OpenXR Toolkit)
  :::
  :::::
  <!--> <!-->
  <!--> <!-->
  <!--> <!-->

## Video / CSP Settings

:::::info
::::details Video Settings
This covers all the settings in Content Manager > Settings > Video
:::info
Note that in Content Manager > Video most settings have an **`!`** icon next to them that will show what each setting does and the performance impact.
:::

:::details Resolution and FPS
**Rendering Mode** should already be set depending on your headset as shown above.
**Fullscreen** will simply display the game in Fullscreen instead of a window, recommended to have it `enabled` as it slightly helps with performance but its not a must.
**Resolution** doesnt really matter for VR use, it will only set the game window size, does not affect VR image quality.
**Virtual synchronization** is not needed, keep it `disabled`
**Limit framerate** is not needed in VR as the headset will limit fps as needed by itself, keep it `disabled`.
:::

:::details Quality
**MSAA** (Multisample anti-aliasing) is an Anti-Aliasing technique which helps with jagged edges, pixelation or shimmering especially into the distance. Highly recommended to keep it enabled in VR, either `2x` or `4x`. `8x` will have a major impact on performance and is generally not worth using.
**Anisotropic Filtering** helps with texture clarity into the distance, it has a no performance impact so it's recommended to just keep it at `16x`.
**World details** will affect object count on tracks (if they support it), set it as needed. Can also be adjust in-game using the "View & Video Settings" app.
**Shadows resolution** affects how sharp the shadows will look. Higher resolution will make shadows look better but decrease performance. I would recommended using `1024x1024` and increase if performance isnt an issue.
**Smoke generation** simply controls the smoke quantity, adjust as needed, but I would recommend using CSP smoke instead (Custom Shaders Patch > Particles FX > New smoke and dust)
:::

:::details Reflections
**Reflection Resolution** simply adjusts how sharp / clear the reflections will look, `512x512` is a good base value to start with, can increase if needed.
**Rendering frequency** adjusts how frequently the reflections will update. Set it to `two faces per frame`, any higher is not really needed as they get reprojected anyway. Don't use Static either as it will cause issues with Pure.
**Rendering distance** Adjusts the reflection rendering distance, does not have a noticeable performance impact so you can set it to `at least 1000m` or higher if needed.
:::

:::details Post-Processsing
**Enable post-processing effects** this enables post processing in general, very useful to have to improve the graphics and look of the game, however has a big performance impact. Most PCs should have it `enabled` but low-end PCs should probably `disable` it on more demanding servers.
**Overall Quality** sets the post processing resolution, `High` is a good middle ground performance wise but can also just set it to `Maximum`.
**Glare Quality** sets the quality of glare effects, `High` is a good middle ground performance wise but can also just set it to `Maximum`.
**Depth of field** adjusts the depth of field quality, only works in replays so can keep it `Off` if you don't care about it.
**Motion blur** not recommended to use with VR, set it to `Off`
**Saturation** is basically the intensity of the colors, keep it at `100%` and adjusts colors in Pure instead if needed.
**Heat shimmering** adds a heat shimmering effect, `set as needed`
**Sunrays** enables sun rays / god rays / sun shafts, `set as needed`
**FXAA** is an anti aliasing technique, keep it `enabled` as it is required for some CSP functionality but will not affect image quality in VR.
:::

:::details Mirrors
**Mirror resolution** how sharp / clear the mirrors will look, higher resolutions will reduce performance, `256x1024` is a good base value
**High quality** enables additional effects in the mirrors and increases the rendering distance (from 400 to 800 meters), will reduce performance, recommended to `enable`.
:::

:::details Oculus (only affects Oculus / Meta headsets)
**Pixels per display** is same as resolution multiplier in the oculus app or oculus pixels per display pixel override in oculus debug app, `set as needed`
**Mirror texture** enables the game window to show your VR view, recommended to have it `enabled`
:::

:::details System
**I would recommend not messing with these settings as they don't really have any meaningful impact and can cause issues.**
:::
::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

::::details CSP Settings
This covers all relevant settings in Content Manager > Settings > Custom Shaders Patch
:::info
Not every setting in CSP will be covered(that would be a lot), but only the ones that matter for VR performance.
:::

:::details General Patch Settings
**Audio > Decompress Samples** recommended to have it `enabled`. Reduces CPU overhead for higher memory (RAM) usage.
**New KN5 loader** recommended to have it `enabled`, reduces RAM and VRAM usage.
:::

:::details CPU optimizations:

- **Flatten nodes** keep it `enabled`
- **Chunks optimization** helps with CPU load. Set it to `Advanced` unless you have issues (like the screen going black), then keep it at `Basic`.
- **Limit audio for other cars** set it to `Always` if you have a slower PC.
- **Apply Hyperthreading fix** highly recommended to have it `enabled`, benefits any CPU that uses Hyperthreading or SMT. Might not work well on 4 or 2 core CPUs. (Requires CSP version 0.2.7 / 0.2.8 preview or newer)
  :::

:::details GPU optimizations:

- **Optimize meshes some more** helps with GPU load, have it `enabled`
- "**Deduplicate meshes**" helps with VRAM, have it `enabled`
- "**Upgrade AC textures**" can improve loading times and reduce VRAM usage, recommended to have it `enabled`. Will make the game folder size bigger (shouldnt be more than 5GB for most users).
- "**Deduplicate textures**" can potentially lower how much VRAM the game uses but can also cause graphical issues or game crashes, use with caution. For most users I recommend keeping this `disabled`
  :::

:::details Extra FX
Extra FX doesnt work in VR so this will have no effect, keep it `disabled` if you don't ever use Extra FX.
:::

:::details GUI
**New driver tags** recommended to have it `enabled` so you can see driver names in VR. Its not a performance tweak but a very useful thing to have.  
**Font Scale** Set this to `125%` or higher if you struggle reading the names.
:::

:::details Graphics Adjustments
**AMD FidelityFX SuperResolution** also known as "FSR" is an upscaler that can help with performance by rendering the game at a lower resolution and then upscaling the image. Should only be needed for lower end PCs. Can also be used through the OpenXR Toolkit.
<br>
<br>
**LOD settings:**

- **Force low-res drivers for other cars in first person view** have it `enabled` for performance
- **Multiplier for car LODs** this sets how far away the car LOD (level of detail) will change, lower multiplier will help with performance but can make cars look worse up close, for performance set it to `75%`.
- **Multiplier for track LODs** same thing as car LODs but for the track, I would recommend not going below `80%` as it can cause issues.
- **Multiplier for trees LODs** same thing as car LODs but for 3D trees, you can set it to `0% for best performance` if you don't care about 3D trees (makes them 2D instead), otherwise keep it around `100%`.
- **Add extra collider-based LODs for distant cars** will make low quality LODs for cars that don't have them, can help a lot in dense lobbies like VDC, recommended to have it `enabled`. Set the "Limit LODless cars" to a low value between 5 to 10 for best performance. <br>

**Post processing antialiasing** set to `disabled` as post process AA doesnt work in VR (Will update this if it changes)
**Accessible color buffer > Full resolution for better quality** set to `disabled` for a tiny boost in performance
**Draw grooves over track, but before dynamic entities** Can help with performance but can also cause issues on some tracks (Like mirror / see through roads), use with caution.
:::

:::details Lighting FX
**Cars casting lights** set this to a lower amount like `5` for better performance in dense lobbies, lights are expensive performance wise.
**Disable mirroring in first person view** helps with performance a bit, have it `enabled`
**Enable lighting in reflections** `disabled` for a performance boost
:::

:::details Neck FX
Not related to performance but there are good NeckFX scripts for VR to enhance immersion or comfort, here are two most popular ones:

- [AC Head Physics](https://www.overtake.gg/downloads/ac-head-physics.68266) fancier script, has more movement
- [NeckFX LUA script](https://www.overtake.gg/downloads/neckfx-lua-script-vr-stabilize.65087) more basic, static script.
  :::

:::details Smart Mirror
**Custom render distance** `enabled` and set the distance to 400 meters if you use High Quality mirrors in video settings, helps with performance.
**Real mirrors** highly recommended in VR, makes the mirrors change perspective based on your head movement also lets you adjust mirror positioning through the "Car Mirrors" app in-game (Install it from the "App Shelf" app in-game first)

- **Active** `enabled`
- **Alter FOV** This will change the Field of View of the mirror depending how close you are to it. Set based on your preference, I have it `disabled`
- **Refresh rate per frame** set to `Update single reflection per frame` for best performance, can look a little laggy on lower refresh rate headsets, use higher if needed.
  :::

:::details Weather FX
**Weather style** this should be set to either `Pure Gamma` or `Pure LCS`. `Pure Gamma` is the recommended option as of now and has better performance, `Pure LCS` is able to produce a better looking image but could cause some issues too.
**Replace YEBIS with lightweight alternative** is a more basic post-processing implementation which uses less CPU and GPU resources, for performance I would recommend to `enable` it. Does not work with some pp filters like C13, can also cause excessive glare.
**Automatically guess white reference point** This can make the UI very bright when using Pure, `disable` it.
:::

:::details Mode Tweaks VR:
**Make sure the extension is enabled (Active)**
**Single Pass Stereo** Highly recommended to have it `enabled`, especially on slower CPUs. It renders both eye images at the same time into one packed Render Texture, meaning that the whole Scene is only rendered once, and CPU processing time is significantly reduced. Can make some Pure shaders not work.
**Single YEBIS pass** Have it `enabled` for best performance if needed. Instead of running post-processing individually for each eye, runs it once for both eyes. Can potentially affect glare effects in an undesirable way.
:::

:::details Nvidia VRS
Also known as [Foveated Rendering](https://arcmite.github.io/arc-website/guides/other/vr-guide.html#what-is-foveated-rendering), only works for Nvidia GPUs.  
If you want to use Nvidia VRS (Requires Single Pass Stereo to be enabled):

- **Nvidia VRS** `enabled`
- **VRS preset** `Custom`
- **VRS rate** `High performance`, can set to Highest performance if you need every bit of performance but it will be more visible.
- **VRS detailed area** `Balanced`, set it to `Wide` if you use a Quest 3 or Pico 4 as they will show foveated rendering more clearly.
  You can also test using the VRS presets if those work better for you.
  `**You can use the VR Tweaks app that lets you adjust all these settings (and more) in-game which you can find here:`[`VR Tweaks`](https://www.overtake.gg/downloads/vr-tweaks.76283/)

**Corners masking optimization**
Recommended to keep this one `enabled`. Also known as Hidden Area Mesh, it allows your GPU to not waste time rendering parts of the image that you wouldnt be able to see because of how the lenses work. Disable this if the black shape in the VR mirror (game window) is undesired.

**Custom VR HUD rendering**
This is not a performance related setting but its recommended to keep this `enabled` as it makes the HUD work better in VR. To adjust the HUD settings I'd recommend to use the VR tweaks app mentioned above.
:::
::::
:::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

## OpenComposite and OpenXR Toolkit

:::::info
::::details OpenComposite

- Translates OpenVR games to OpenXR which means SteamVR isnt needed to run the game (Except for SteamVR headsets), it is highly recommended for users wanting more performance.
- On some headsets like Rift, Quest, Pimax or WMR - SteamVR simply acts as a middle layer which increases resource usage while bringing no real benefit to your VR experience.
- OpenComposite can also be used with Virtual Desktop when using it with VDXR, [more info here](https://github.com/mbucchia/VirtualDesktop-OpenXR/wiki)

:::danger
Using OpenComposite with native SteamVR headsets (Vive, Index, Beyond) wont allow you to bypass SteamVR as it is required for the headset to function. However it would give you access to the OpenXR Toolkit if needed.

Pico standalone headsets dont have their own OpenXR runtime, so to bypass SteamVR you would need to use Virtual Desktop with VDXR and OpenComposite.
:::

:::details To install OpenComposite:

1. Download the OpenComposite dll from one of the links  
   A. From [this repository](https://github.com/Raptyyy/rapty_ac_vr_guide/raw/refs/heads/main/resources/openvr_api.dll)  
   B. From the [OpenComposite mirror](https://znix.xyz/OpenComposite/download.php?arch=x64&branch=openxr)
2. Make sure the file is called "openvr_api.dll" (rename it if needed)
3. Place the file to <ins>"steamapps\common\assettocorsa\system\x64"</ins>, overwrite files if prompted to.
4. In <ins>Content Manager > Settings > Video</ins> set "Rendering Mode" to "OpenVR"
5. You also need to make sure your headset is using its native OpenXR Runtime (or VDXR for Virtual Desktop) and not the SteamVR one
   :::

:::warning
If you encounter any issues using OpenComposite, I have the [original dll file uploaded here](https://github.com/Raptyyy/rapty_ac_vr_guide/raw/refs/heads/main/resources/openvr_api.dll.og), rename it to "openvr_api.dll", put it in the same location as the opencomposite dll and overwrite, this will remove opencomposite.
:::
::::
::::details OpenXR Toolkit

- OpenComposite also lets you use the OpenXR Toolkit which brings additional features like upscaling, foveated rendering, world scale or field of view adjustability and more. [Read more about it here](https://mbucchia.github.io/OpenXR-Toolkit/features.html) <br>
- [**Download the OpenXR Toolkit here**](https://mbucchia.github.io/OpenXR-Toolkit/#downloads) <br>
- By default you use Ctrl + F1 to F4 to navigate the on screen menu, this can be changed in the OpenXR Toolkit Companion App. [Explained further here](https://mbucchia.github.io/OpenXR-Toolkit/#basic-usage)

:::details Recommended settings for the Toolkit:

- Upscaling set to `FSR` if you need more performance, the lower the scale the more performance you will gain while sacrificing image quality. Set to `CAS` to improve image quality by sharpening the image, use 70% to 100% strength.
- Foveated rendering set to `Preset - Quality - Balanced`, this will be a good starting point, adjust as needed. `Custom` will allow you to tweak things further.
- Tweaking the `World Scale` in the Appearance tab could fix any issues regarding objects looking too big or too small.
- For users wearing glasses you might be able to lower the `Field of View (FOV)` which can increase the image quality without any performance loss.
  :::
  ::::
  :::::
  <!--> <!-->
  <!--> <!-->
  <!--> <!-->

## Additional Notes

:::::info
:::info For Virtual Desktop & Pimax Users
There is another guide written by CSOCSO which has some more in depth details for Virtual Desktop and Pimax users. You can [find it here](https://docs.google.com/document/d/1q-taJt5q9oKWPuCB63rbAC6ZzlZMxqjworgpc10ETDE/edit?tab=t.0).
:::

:::details Performance
When it comes to VR performance, the most important thing is having a consistent framerate. You want to utilize your GPU as much as possible by increasing the headsets resolution or graphical settings, but also leaving enough headroom to avoid any fluctuation in framerate. You can use things like Render Stats app in-game, SteamVR performance graph, OpenXR Toolkit advanced overlay or programs like GPU-Z to monitor GPU and CPU usage and adjust settings as needed.

On some systems using HAGS (Hardware accelerated GPU Scheduling) can potentially cause performance issues (Especially on windows 10 or if you are using OBS), you can change it in Windows Settings > System > Display > Graphics settings or just search for "GPU" in the start search, requires a system restart to apply.
:::

:::details Headset adjustments
If your headset has built in `IPD (inter-pupillary distance)` adjustment it is important to set it correctly to have the best image quality and correct world scale, there are various ways to figure out what your IPD is, read more [here](https://www.vive.com/us/support/vive-xr/category_howto/how-can-i-find-my-ipd.html). Most people should be in the 60mm to 70mm range.

If you are far or near sighted and wear glasses or contact lenses, the same thing will apply to you in VR so you will also need to wear glasses or contact lenses while you're using VR.

Field of view is an important aspect in VR as it can greatly impact the immersiveness of your experience. Basically the closer your eyes are to the lenses the higher your Field of View will be (up to the limitations of the actual headset). Users wearing glasses will usually have to sacrifice some Field of View for comfort.
:::

::::details Nvidia Control Panel tweaks
:::details Anisotropic Filtering

Setting Anisotropic Filtering in the Nvidia Control Panel can potentially improve texture quality. Set it as shown in the image below.  
<img src="https://github.com/user-attachments/assets/58802765-659f-497d-81f7-e9fd0489795f" width="600">  
:::

:::details MFAA (Multi-Frame Anti-Aliasing)
[MFAA](https://www.nvidia.com/en-us/geforce/news/multi-frame-sampled-anti-aliasing-delivers-better-performance-and-superior-image-quality/) is an anti-aliasing technique which by alternating AA sample patterns both temporally and spatially can improve the quality of MSAA.  
4xMFAA (2xMSAA + MFAA) has the performance cost of 2xMSAA, with anti-aliasing properties equivalent to 4xMSAA.  
Requires MSAA to bet set to atleast 2x in <ins>Content Manager > Settings > MSAA</ins>  
<img src="https://github.com/user-attachments/assets/ea28aeec-ca77-4f4c-b614-32174566e79c" width="600">
:::
::::

:::details Miscellaneous tweaks

Using overlays (like Discord, Steam, Nvidia overlays) can potentially affect VR performance in a negative way, it is recommended to disable them when using VR. <br>
Having hardware acceleration enabled in various programs (like Steam, Discord, Spotify) can potentially affect VR performance in a negative way and also use additional VRAM, it can be worthwhile to disable hardware acceleration for such programs.
:::
:::::

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Advanced Tweaks

:::::danger
These tweaks are meant to be used only if you understand what they do and how to revert them if needed, _not_ recommended for most people.

::::details CPU Affinity

#### Using only one CCD (Chiplet) on a multi CCD AMD CPU (12 or 16 core).

1. Install and open [Process Lasso](https://bitsum.com/)
2. Run Assetto Corsa (Ideally in windowed mode)
3. in Process Lasso find acs.exe, right click, select CPU Affinity > Always > Select CPU Affinity
4. Select only the first half of the available CPU cores (CCD0)
5. Press Ok
6. Set Process Lasso to run the Governor at startup, click Options > General > Startup options at the top.

This can also be done using [Process Governor](https://github.com/SystemXFiles/process-governor) if you wish not to use Process Lasso.

:::info
If you wish to undo this, in step 3 simply select None for the CPU affinity and then disable Process Lasso at startup.
:::

Example of the performance difference using various affinities (mainly note the 0.2% and 1% lows)  
![CPU Affinity](/images/guides/vr-guide/cpu-affinity.png)  
::::

::::details Nvidia ReBar
[You can read about Nvidia ReBar here](https://www.rockpapershotgun.com/what-is-resizable-bar-and-should-you-use-it)  
Make sure Resizable Bar is enabled and supported on your system, its explained in the link above.

1. Download Nvidia Profiler Inspector [here](https://github.com/Orbmu2k/nvidiaProfileInspector/releases)
2. Click on the Profiles selection bar and type in Assetto Corsa, then select it
3. Under 5 - Common find rBAR, set Feature to "Enabled" and Size Limit to 0x0000000012C00000 (Paste it in)
4. Press Apply changes in the top right

:::info
If you wish to undo this, set rBAR - Feature to "Disabled" and press Apply changes
:::

Comparison of performance difference when using ReBar, baseline is ReBar disabled (default), 0x0000000012C00000 is 300mb  
![Nvidia ReBar](/images/guides/vr-guide/nvidia-rebar.png)  
::::
:::::
