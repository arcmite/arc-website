# Pure Config

> <Badge type="danger" text="Outdated"/> <Badge type="warning" text="Under Review"/>

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

| Pure Checklist                         | Misconfigured settings that may affect Pure being able to function correctly. It is recommended to fix the misconfigured settings inside Content Manager. |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recommended CSP Settings               | Settings that do not affect Pure being able to function but may produce undesirable/reduced quality.                                                      |
| Reset weatherFX system                 | Restart the weatherFX extension included in Custom Shaders Patch which may fix some visual issues.                                                        |
| Reset to Defaults                      | Reset all settings inside the Pure Config and PurePP apps to their default values.                                                                        |
| config.video_mode_separation           | Allows you to have different Pure Config settings depending on the Rendering Mode selected in Video Settings.                                             |
| config.track_specific_loading          | Allows you to have different Pure Config settings depending on the track you are currently playing on.                                                    |
| config.track_specific_video_separation | Allows you to have different Pure Config settings depending on the Rendering Mode and Track you are currently playing on.                                 |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## AI Tab

| AI_headlights.sun           | Enables AI headlights if the sun angle is below the set value.                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AI_headlights.ambient_light | Enables AI headlights if the ambient lighting is below the set value.                                                           |
| AI_headlights.CBE           | Enables AI headlights if the Estimated Cubemap Brightness (Essentially, reflections) is below this value.                       |
| AI_headlights.fog           | Enables AI headlights if the fog is denser than the set value.                                                                  |
| AI_headlights.rain          | Enables AI headlights if the rain intensity is higher than this value.                                                          |
| Activate Headlight Control  | You must Enable "Turn headlights on and off automatically." in Content Manager -> Settings -> Custom Shaders Patch -> WeatherFX |

## Light Tab

| light.daylight_multiplier               | Multiplier that effects daylight's overall brightness                     | 0 - 10     |
| --------------------------------------- | ------------------------------------------------------------------------- | ---------- |
| light.sun.hue                           | The dominant wavelength color of all lights                               | -180 - 180 |
| light.sun.saturation                    | How intense the colors on screen will appear                              | 0 - 10     |
| light.sun.level                         | How bright the sunlight is on all materials                               | 0 - 10     |
| light.sun.specular                      | How much smooth materials will reflect sunlight                           | 0 - 10     |
| light.ambient_model_V2                  | Whether pure will use singular ambient lighting or tiled ambient lighting | TOGGLE     |
| light.ambient.hue                       | The dominant wavelength of the ambient lighting                           | -180 - 180 |
| light.ambient.saturation                | How intense the colors of the ambient lighting wil lbe                    | 0 - 10     |
| light.ambient.level                     | How bright the ambient lighting is overall                                | 0 - 10     |
| light.advanced_ambient_light            | Appears to be quite similar to the above setting                          | 0 - 10     |
| light.advanced_ambient_lightV2_sun      |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_skydomes |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_sky      |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_clouds   |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_nlp      |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_fog      |                                                                           | 0 - 10     |
| light.advanced_ambient_lightV2_vao_exp  |                                                                           | 0 - 10     |
| light.distant_ambient.hue               |                                                                           | -180 - 180 |
| light.distant_ambient.saturation        |                                                                           | 0 - 10     |
| light.distant_ambient.level             |                                                                           | 0 - 10     |
| light.distant_ambient.distance          |                                                                           | 0 - 10     |
| light.directional_ambient.hue           |                                                                           | -180 - 180 |
| light.directional_ambient.saturation    |                                                                           | 0 - 10     |
| light.directional_ambient.level         |                                                                           | 0 - 10     |
| shadows.presence                        |                                                                           | 0 - 1      |
| csp_lights.bounce                       |                                                                           | 0 - 10     |
| csp_lights.emissive                     |                                                                           | 0 - 10     |
| csp_lights.displays                     |                                                                           | 0 - 10     |
| reflections.saturation                  |                                                                           | 0 - 10     |
| reflections.level                       |                                                                           | 0 - 10     |
| reflections.emissive_boost              |                                                                           | 0 - 30     |
| vao.amount                              |                                                                           | 0 - 2      |
| vao.track_exponent                      |                                                                           | 0 - 2      |
| vao.dynamic_exponent                    |                                                                           | 0 - 2      |
| ui.white_reference_point                |                                                                           | 0 - 10     |

## Night Tab

| nlp.level                |     | 0 - 10  |
| ------------------------ | --- | ------- |
| nlp.density              |     | 0 - 10  |
| nlp.lowest_ambient       |     | 0 - 10  |
| moon.light               |     | 0 - 10  |
| moon.appearance          |     | 0 - 10  |
| stars.appearance         |     | 0 - 100 |
| stars.dynamic_adaptation |     | TOGGLE  |

## Sky Tab

| light.sky.hue           |     | -180 - 180 |
| ----------------------- | --- | ---------- |
| light.sky.saturation    |     | 0 - 10     |
| light.sky.level         |     | 0 - 10     |
| sky.sun_disk.hue        |     | -180 - 180 |
| sky.sun_disk.saturation |     | 0 - 10     |
| sky.sun_disk.level      |     | 0 - 10     |
| sun.sun_moon_size       |     | 0 - 10     |

## Clouds Tab

| clouds_render.method             |     | 0 - 1    |
| -------------------------------- | --- | -------- |
| default_16k                      |     | Toggle   |
| clouds2D.crossfade_time          |     | 1 - 60   |
| clouds.2d.advanced_shadows       |     | Toggle   |
| clouds.2d.advanced_shadows_cover |     | Toggle   |
| clouds.2d.advanced_shadows_speed |     | 0.1 - 10 |
| clouds2D.unload                  |     | TOGGLE   |
| clouds2D.brightness              |     | 0 - 10   |
| clouds2D.contrast                |     | 0 - 10   |

## Weather Tab

| weather.use_weather_particles | If active, rain becomes snow with air temperatures below 3\*C. For "Snow" and "Sleet" weather, rain is always displayed as snow, if weather particles are active. | TOGGLE |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| weather.snow.size             |                                                                                                                                                                   | 0 - 10 |
| weather.ash.size              |                                                                                                                                                                   | 0 - 10 |

## Shaders Tab

## Camera Tab

| camera.occlusion_control.adv_ambi_light     |     | TOGGLE |
| ------------------------------------------- | --- | ------ |
| camera.occlusion_control.adv_fog_ambi_light |     | TOGGLE |
| camera.occlusion_control.exposure           |     | TOGGLE |
| camera.occlusion_control.overcast           |     | TOGGLE |
| camera.occlusion_control.vao                |     | TOGGLE |

## Sound Tab

| sound.wind_volume_interior      |     | 0 - 1        |
| ------------------------------- | --- | ------------ |
| sound.wind_volume_exterior      |     | 0 - 1        |
| sound.wind_volume_speed_damping |     | 0 - 1        |
| sound.rain_volume_interior      |     | 0 - 1        |
| sound.rain_volume_exterior      |     | 0 - 1        |
| sound.rain_volume_speed_damping |     | 0 - 1        |
| sound.damping_at_speed          |     | 0 - 500 km/h |
| sound.rain_volume_extra_skid    |     | 0 - 10       |
| sound.rain_volume_extra_wetness |     | 0 - 10       |
| sound.rain_volume_extra_puddles |     | 0 - 10       |
| sound.rain_volume_extra_gravel  |     | 0 - 10       |
| sound.thunder_volume_interior   |     | 0 - 1        |
| sound.thunder_volume_exterior   |     | 0 - 1        |

## State Tab

## Track Tab

| FOG_SHAPE                |     | -1 - 10      |
| ------------------------ | --- | ------------ |
| SMOG_MORNING             |     | 0 - 1        |
| SMOG_NOON                |     | 0 - 1        |
| SMOG_EVENING             |     | 0 - 1        |
| SUN_DAWN                 |     | -10 - 10     |
| SUN_DUSK                 |     | -10 - 10     |
| HUMIDITY_OFFSET          |     | 0 - 1        |
| HORIZON_OFFSET           |     | -10 - 10     |
| MINIMUM_GLOW_EMISSIVES   |     | 0 - 1        |
| TUNNEL_HELPER            |     | 0 - 1        |
| LANDSCAPE_USE            |     | TOGGLE       |
| LANDSCAPE_HUE            |     | -180 - 180   |
| LANDSCAPE_SATURATION     |     | 0 - 2        |
| LANDSCAPE_LEVEL          |     | 0 - 10       |
| LANDSCAPE_GAMMA          |     | 0 - 4        |
| LANDSCAPE_DIFFUSE        |     | 0 - 1        |
| LANDSCAPE_AMBIENT        |     | 0 - 1        |
| LANDSCAPE_HEIGHT         |     | -1000 - 1000 |
| LANDSCAPE_COVER_NEGATIVE |     | TOGGLE       |
| LANDSCAPE_SHIFT_X        |     | -5000 - 5000 |
| LANDSCAPE_SHIFT_Z        |     | -5000 - 5000 |
| LANDSCAPE_FILES          |     | LIST         |

## Opt + Debug Tab

| optimization.cpu_split |     | TOGGLE |
| ---------------------- | --- | ------ |
| debug.memory           |     | TOGGLE |
| debug.computation      |     | TOGGLE |
| debug.graphics         |     | TOGGLE |

## Info Tab
