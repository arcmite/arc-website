# Pure Config

This page will list all the functions contained within Pure Config and an explanation on what they do.

## Main Tab


| Quality Presets (Groundfog) | Low | Medium | High | Very High |
| --------------------------- | --- | ------ | ---- | --------- |
| Groundfog                   | ❌  | ✅     | ✅   | ✅        |
| Quality                     | ❌  | ✅     | ✅   | ✅        |
| Render Distance             | ❌  | 🟠     | ✅   | ✅        |
| Car Turbulences             | ❌  | ❌     | ❌   | ✅        |

<!--> <!-->
<!--> <!-->
<!--> <!-->

| Pure Checklist           | Misconfigured settings that may affect Pure being able to function correctly. It is recommended to fix the misconfigured settings inside Content Manager. |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recommended CSP Settings | Settings that do not affect Pure being able to function but may produce undesirable/reduced quality.                                                      |
| Reset weatherFX system   | Restart the weatherFX extension included in Custom Shaders Patch which may fix some visual issues.                                                        |
| Reset to Defaults        | Reset all settings inside the Pure Config and PurePP apps to their default values.                                                                        |
| config.video_mode_separation           | Allows you to have different Pure Config settings depending on the Rendering Mode selected in Video Settings.             |
| config.track_specific_loading          | Allows you to have different Pure Config settings depending on the track you are currently playing on.                    |
| config.track_specific_video_separation | Allows you to have different Pure Config settings depending on the Rendering Mode and Track you are currently playing on. |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## AI Tab

| AI_headlights.sun           | Enables AI headlights if the sun angle is below the set value.                                                                  |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| AI_headlights.ambient_light | Enables AI headlights if the ambient lighting is below the set value.                                                           |
| AI_headlights.CBE           | Enables AI headlights if the Estimated Cubemap Brightness (Essentially, reflections) is below this value.                       |
| AI_headlights.fog           | Enables AI headlights if the fog is denser than the set value.                                                                  |
| AI_headlights.rain          | Enables AI headlights if the rain intensity is higher than this value.                                                          |
| Activate Headlight Control  | You must Enable "Turn headlights on and off automatically." in Content Manager -> Settings -> Custom Shaders Patch -> WeatherFX |
