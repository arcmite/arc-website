# Pure Config

> <Badge type="warning" text="Under Review"/>

This page will list all the functions contained within Pure Config and an explanation on what they do.

## Main Tab

### Quality Presets (Groundfog)

| Property                    | Low | Medium | High  | Very High  |
| --------------------------- | --- | ------ | ----- | ---------- |
| Groundfog                   | ❌  | ✅     | ✅   | ✅        |
| Quality                     | ❌  | ✅     | ✅   | ✅        |
| Render Distance             | ❌  | 🟠     | ✅   | ✅        |
| Car Turbulences             | ❌  | ❌     | ❌   | ✅        |

### Pure Checklist

Misconfigured settings that may affect Pure’s functionality.

| Setting                                | Description                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Recommended CSP Settings               | Settings that don’t break Pure but may reduce visual quality.                                                      |
| Reset weatherFX system                 | Restarts the WeatherFX extension in Custom Shaders Patch, which may fix visual issues.                             |
| Reset to Defaults                      | Resets all settings in the Pure Config and PurePP apps to their default values.                                    |
| config.video_mode_separation           | Allows different Pure Config settings depending on the Rendering Mode selected in Video Settings.                  |
| config.track_specific_loading          | Allows different Pure Config settings depending on the track currently being played.                               |
| config.track_specific_video_separation | Allows different Pure Config settings depending on both Rendering Mode and Track.                                  |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## AI Tab

| Setting                       | Description                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `AI_headlights.sun`           | Enables AI headlights if the sun angle is below the set value.                                                                  |
| `AI_headlights.ambient_light` | Enables AI headlights if the ambient lighting is below the set value.                                                           |
| `AI_headlights.CBE`           | Enables AI headlights if the Estimated Cubemap Brightness (Essentially, reflections) is below this value.                       |
| `AI_headlights.fog`           | Enables AI headlights if the fog is denser than the set value.                                                                  |
| `AI_headlights.rain`          | Enables AI headlights if the rain intensity is higher than this value.                                                          |
| `Activate Headlight Control`  | You must Enable "Turn headlights on and off automatically." in Content Manager -> Settings -> Custom Shaders Patch -> WeatherFX |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Light Tab

| Setting                                   | Description                                                                                 | Type/Range |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| `light.daylight_multiplier`               | Multiplier that effects daylight's overall brightness                                       | `0 - 10`   |
| `light.sun.hue`                           | The dominant wavelength color of all lights                                                 | `±180`     |
| `light.sun.saturation`                    | How intense the colors on screen will appear                                                | `0 - 10`   |
| `light.sun.level`                         | How bright the sunlight is on all materials                                                 | `0 - 10`   |
| `light.sun.specular`                      | How much smooth materials will reflect sunlight                                             | `0 - 10`   |
| `light.ambient_model_V2`                  | Whether pure will use singular ambient lighting or tiled ambient lighting                   | `bool`     |
| `light.ambient.hue`                       | The dominant wavelength of the ambient lighting                                             | `±180`     |
| `light.ambient.saturation`                | How intense the colors of the ambient lighting will lbe                                     | `0 - 10`   |
| `light.ambient.level`                     | How bright the ambient lighting is overall                                                  | `0 - 10`   |
| `light.advanced_ambient_light`            | Appears to be quite similar to the above setting                                            | `0 - 10`   |
| `light.advanced_ambient_lightV2_sun`      | How much the sun affects the brightness of ambient lighting                                 | `0 - 10`   |
| `light.advanced_ambient_lightV2_skydomes` | How much skydomes affect the brightness of ambient lighting                                 | `0 - 10`   |
| `light.advanced_ambient_lightV2_sky`      | How much the sky affects the brightness of ambient lighting                                 | `0 - 10`   |
| `light.advanced_ambient_lightV2_clouds`   | How much the clouds affect the brightness of ambient lighting                               | `0 - 10`   |
| `light.advanced_ambient_lightV2_nlp`      | How much the Night Light Pollution affects the brightness of ambient lighting               | `0 - 10`   |
| `light.advanced_ambient_lightV2_fog`      | How much the fog affects the brightness of ambient lighting                                 | `0 - 10`   |
| `light.advanced_ambient_lightV2_vao_exp`  | How much the VAO exposure affects the brightness of ambient lighting                        | `0 - 10`   |
| `light.distant_ambient.hue`               | The dominant wavelength of the ambient lighting                                             | `±180`     |
| `light.distant_ambient.saturation`        | How intense the colors of distant ambient lighting is                                       | `0 - 10`   |
| `light.distant_ambient.level`             | How bright distant ambient lighting is                                                      | `0 - 10`   |
| `light.distant_ambient.distance`          | How far away "distant" is assumed (Lower = closer)                                          | `0 - 10`   |
| `light.directional_ambient.hue`           | The dominant wavelength of directional ambient lighting (most noticeable in shadows)        | `±180`     |
| `light.directional_ambient.saturation`    | How intense the colors of directional ambient lighting will be (most noticeable in shadows) | `0 - 10`   |
| `light.directional_ambient.level`         | How bright the directional ambient lighting is overall (most noticeable in shadows)         | `0 - 10`   |
| `shadows.presence`                        | Whether shadows will be rendered everywhere or in actual shadow areas                       | `0 - 1`    |
| `csp_lights.bounce`                       | How far csp light rays will bounce until they fade out                                      | `0 - 10`   |
| `csp_lights.emissive`                     | How bright csp light emissive appear (i.e center of streetlights)                           | `0 - 10`   |
| `csp_lights.displays`                     | How bright csp displays are (i.e dashboard, tachometers)                                    | `0 - 10`   |
| `reflections.saturation`                  | How intense the colors of all reflections will be                                           | `0 - 10`   |
| `reflections.level`                       | How bright all reflections are overall                                                      | `0 - 10`   |
| `reflections.emissive_boost`              | How bright emmisive lights will appear in reflections (i.e streetlights)                    | `0 - 30`   |
| `vao.amount`                              | How many Vertex Array Objects will appear (more = darker shadows)                           | `0 - 2`    |
| `vao.track_exponent`                      | Multiplier on track Vert Array objects (more = darker shadows on track)                     | `0 - 2`    |
| `vao.dynamic_exponent`                    | Same setting but dynamic and seems to modify the distant and reflective shadows             | `0 - 2`    |
| `ui.white_reference_point`                | No observable changes                                                                       | `0 - 10`   |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Night Tab

| Setting                    | Description                                         | Type/Range |
| -------------------------- | --------------------------------------------------- | ---------- |
| `nlp.level`                | How bright the night light pollution is             | `0 - 10`   |
| `nlp.density`              | How dense the night light pollution is              | `0 - 10`   |
| `nlp.lowest_ambient`       | How low can the night light pollution ambient get   | `0 - 10`   |
| `moon.light`               | How bright the moon light is                        | `0 - 10`   |
| `moon.appearance`          | How bright the moon will appear                     | `0 - 10`   |
| `stars.appearance`         | How bright the stars will appear                    | `0 - 100`  |
| `stars.dynamic_adaptation` | Enable dynamic adaption on stars                    | `bool`     |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Sky Tab

| Setting                   | Description                             | Type/Range |
| ------------------------- | --------------------------------------- | ---------- |
| `light.sky.hue`           | The dominant wavelength of the sky      | `±180`     |
| `light.sky.saturation`    | How intense the color of sky is         | `0 - 10`   |
| `light.sky.level`         | How bright the sky is                   | `0 - 10`   |
| `sky.sun_disk.hue`        | The dominant wavelength of the sundisk  | `±180`     |
| `sky.sun_disk.saturation` | How intense the color of the sundisk is | `0 - 10`   |
| `sky.sun_disk.level`      | How bright the sundisk is               | `0 - 10`   |
| `sun.sun_moon_size`       | How large the sun/moon will appear      | `0 - 10`   |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Clouds Tab

| Setting                            | Description                                                   | Type/Range |
| ---------------------------------- | ------------------------------------------------------------- | ---------- |
| `clouds_render.method`             | 0 = 3D bilboard clouds 1 = 360° skydomes                      | `0 - 1`    |
| `default_16k`                      | Default set of skydomes provided by Pure                      | -          |
| `clouds2D.crossfade_time`          | How quickly the skydome will crossfade into the next one      | `1 - 60`   |
| `clouds.2d.advanced_shadows`       | Invisible 3D clouds but their shadows will render             | `bool`     |
| `clouds.2d.advanced_shadows_cover` | Considers the skydomes sun cover when making 3D clouds        | `bool`     |
| `clouds.2d.advanced_shadows_speed` | How fast the shadows of the invisible 3D clouds will move     | `0.1 - 10` |
| `clouds2D.unload`                  | Unload the skydomes when not in use (saves vram when enabled) | `bool`     |
| `clouds2D.brightness`              | How bright the skydomes will appear                           | `0 - 10`   |
| `clouds2D.contrast`                | The contrast levels of the skydome                            | `0 - 10`   |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Weather Tab

| Setting                         | Description  | Type/Range |
| ------------------------------- | ------------ | ---------- |
| `weather.use_weather_particles` | If active, rain becomes snow with air temperatures below 3°C. For "Snow" and "Sleet" weather, rain is always displayed as snow, if weather particles are active                             | `bool`     |
| `weather.snow.size`             | Size of snow | `0 - 10`   |
| `weather.ash.size`              | Size of ash  | `0 - 10`   |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Shaders Tab

**Groundfog**

| Setting                              | Description                                            | Type/Range  |
| ------------------------------------ | ------------------------------------------------------ | ----------- |
| `shaders.ground.active`              | Whether ground fog will render                         | `bool`      |
| `shaders.groundfog.Quality`          | The quality of said groundfog                          | `1 - 4`     |
| `shaders.groundfog.Expand_width`     | Expand how far wide the groundfog will spawn           | `bool`      |
| `shaders.groundfog.Interpolate_near` | Interpolate groundfog closer to the camera             | `bool`      |
| `shaders.groundfog.Render_distance`  | How close the groundfog will render                    | `0.25 - 10` |
| `shaders.groundfog.Size`             | How large the groundfog billboards are                 | `0.25 - 5`  |
| `shaders.groundfog.Scale`            | The scale of the groundfog                             | `0.1 - 5`   |
| `shaders.groundfog.Structure`        | The structure of the groundfog                         | `0.1 - 5`   |
| `shaders.groundfog.Gain`             | How much groundfog there is                            | `0 - 10`    |
| `shaders.groundfog.Nearby_fadeout`   | The fadeout of nearby groundfog                        | `0.1 - 2`   |
| `shaders.groundfog.Sun_influence`    | Sun influence on groundfog                             | `0 - 1`     |
| `shaders.groundfog.Car_turbulences`  | Whether the car aerodynamics will affect the groundfog | `bool`      |
| `groundfog.amount`                   | States the amount of groundfog                         | N/A         |
| `groundfog.subscribed`               | Whether groundfog is active/disabled                   | `bool`      |
| `groundfog.total_billboards`         | The total amount of groundfog billboards generated     | N/A         |
| `groundfog.visible_billboards`       | The amount of groundfog billboards that are visible    | N/A         |

**Landscape**

| Setting                            | Description                                                | Type/Range |
| ---------------------------------- | ---------------------------------------------------------- | ---------- |
| `shaders.landscape.active`         | Whether the landscape shader is active (outside the track) | `bool`     |
| `shaders.landscape.only_skyshader` | Do not disable as it causes weird flashing                 | `bool`     |
| `shaders.landscape.debug`          | Shows landscape tiles and flashes them red                 | `bool`     |

**Lightning**

| Setting                                    | Description                                         | Type/Range     |
| ------------------------------------------ | --------------------------------------------------- | -------------- |
| `shaders.lightning.active`                 | bools lightning on/off                              | `bool`         |
| `shaders.lightning.speed`                  | How fast the lightning strike is                    | `0 - 1`        |
| `shaders.lightning.discharge_exponent`     | How much the lightning pulses                       | `1 - 32`       |
| `shaders.lightning.discharge_ionisation`   | How far the lightning goes down                     | `0.1 - 4`      |
| `shaders.lightning.maximum_flash_light`    | How bright the flash can be                         | `0 - 10`       |
| `shaders.lightning.bounced_light`          | How much the light will bounce                      | `0 - 10`       |
| `shaders.lightning.saturation`             | How intense the color of the lightning is           | `0 - 10`       |
| `shaders.lightning.probability_multiplier` | How likely lightning strikes happen                 | `0.1 - 10`     |
| `shaders.lightning.debug`                  | Enables debug mode                                  | `bool`         |
| `shaders.lightning.phase`                  | The phase of the lightning strike                   | `0 - 1`        |
| `shaders.lightning.direction`              | Which direction the lightning is coming from        | `0 - 360`      |
| `shaders.lightning.distance`               | The distance from the player                        | `0 - 20.000`   |
| `shaders.lightning.height`                 | How high up the lightning is                        | `400 - 2.000`  |
| `shaders.lightning.size`                   | How big the lightning is                            | `100 - 10.000` |
| `shaders.lightning.rotation`               | The rotation of the lightning strike                | `0 - 360`      |
| `shaders.lightning.variant`                | The shape of the lightning strike                   | `0 - 1`        |
| `shaders.lightning.debug_flicker`          | Makes it flicker                                    | `bool`         |
| `shaders.lightning.debug_flicker_strength` | How strong the flickering effect is                 | `0 - 0.2`      |
| `shaders.lightning.debug_sequence`         | Causes the lightning to sequence through its phases | `bool`         |

**Rain Haze**

| Setting                   | Description                 | Type/Range   |
| ------------------------- | --------------------------- | ------------ |
| `shaders.rainhaze.active` | Toggle rainhaze on/off      | `bool`       |
| `shaders.rainhaze.gain`   | How intense the rainhaze is | `0 - 10`     |
| `rainhaze.amount`         | Total amount of rainhaze    | `0 - 10.000` |
| `rainhaze.subscribed`     | Whether Rain Haze is active | `bool`       |

**Sunblinding**

| Setting                                   | Description                                                                           | Type/Range      |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | --------------- |
| `shaders.sunblinding.active`              | Toggles the shader on/off                                                             | `bool`          |
| `shaders.sunblinding.allow_control`       | Allow control by PPfilter scripts                                                     | `bool`          |
| `shaders.sunblinding.sensitivity`         | Controls how strongly the glare or blinding effect reacts to the sun's brightness     | `0 - 2.000`     |
| `shaders.sunblinding.horizontal`          | Adjusts the horizontal spread or influence of the blinding effect                     | `0 - 1.000`     |
| `shaders.sunblinding.vertical`            | Controls the vertical spread of the effect                                            | `0 - 1.000`     |
| `shaders.sunblinding.low_angle_slope`     | Defines how the effect intensity changes when the sun is near the horizon             | `0 - 1.000`     |
| `shaders.sunblinding.time_up`             | The time in seconds the effect will fade in                                           | `0.01 - 10.000` |
| `shaders.sunblinding.time_down`           | The time in seconds the effect will fade out                                          | `0.01 - 10.000` |
| `shaders.sunblinding.cover`               | A simple screen overlay                                                               | `0 - 2.000`     |
| `shaders.sunblinding.blinding`            | A simple screen overlay                                                               | `0 - 2.000`     |
| `shaders.sunblinding.iris`                | Darkening the whole view                                                              | `0 - 2.000`     |
| `shaders.sunblinding.star_opacity`        | Controls how intense the star effect is                                               | `0 - 2.000`     |
| `shaders.sunblinding.star_size`           | How big the star effect is                                                            | `0 - 2.000`     |
| `shaders.sunblinding.star_blur`           | Adjusts how soft or sharp the star's rays are                                         | `0 - 2.000`     |
| `shaders.sunblinding.star_style`          | -                                                                                     | `0 - 2.000`     |
| `shaders.sunblinding.star_adapt_coverage` | -                                                                                     | `0 - 2.000`     |
| `shaders.sunblinding.star_cover_damping`  | Smooths the transition of the star effect when entering or leaving the camera's view. | `0 - 2.000`     |
| `shaders.sunblinding.color`               | The saturation of the added light                                                     | `0 - 2.000`     |
| `shaders.sunblinding.half_resolution`     | Renders the sunblinding shader at half resolution to improve performance              | `bool`          |
| `shaders.sunblinding.VR_tweak`            | -                                                                                     | `bool`          |
| `shaders.sunblinding.debug`               | Enables debug mode for the sunblinding shader                                         | `bool`          |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Camera Tab

| Setting                                       | Description | Type/Range |
| --------------------------------------------- | ----------- | ---------- |
| `camera.occlusion_control.adv_ambi_light`     | -           | `bool`     |
| `camera.occlusion_control.adv_fog_ambi_light` | -           | `bool`     |
| `camera.occlusion_control.exposure`           | -           | `bool`     |
| `camera.occlusion_control.overcast`           | -           | `bool`     |
| `camera.occlusion_control.vao`                | -           | `bool`     |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Sound Tab

| Setting                           | Description                       | Type/Range     |
| --------------------------------- | --------------------------------- | -------------- |
| `sound.wind_volume_interior`      | How loud the stated sound will be | `0 - 1`        |
| `sound.wind_volume_exterior`      | How loud the stated sound will be | `0 - 1`        |
| `sound.wind_volume_speed_damping` | How loud the stated sound will be | `0 - 1`        |
| `sound.rain_volume_interior`      | How loud the stated sound will be | `0 - 1`        |
| `sound.rain_volume_exterior`      | How loud the stated sound will be | `0 - 1`        |
| `sound.rain_volume_speed_damping` | How loud the stated sound will be | `0 - 1`        |
| `sound.damping_at_speed`          | How loud the stated sound will be | `0 - 500 km/h` |
| `sound.rain_volume_extra_skid`    | How loud the stated sound will be | `0 - 10`       |
| `sound.rain_volume_extra_wetness` | How loud the stated sound will be | `0 - 10`       |
| `sound.rain_volume_extra_puddles` | How loud the stated sound will be | `0 - 10`       |
| `sound.rain_volume_extra_gravel`  | How loud the stated sound will be | `0 - 10`       |
| `sound.thunder_volume_interior`   | How loud the stated sound will be | `0 - 1`        |
| `sound.thunder_volume_exterior`   | How loud the stated sound will be | `0 - 1`        |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## State Tab

Showcases the state of information relating to Pure.

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Track Tab

| Setting                    | Description                                                 | Type/Range |
| -------------------------- | ----------------------------------------------------------- | ---------- |
| `FOG_SHAPE`                | Useful for small tracks, changes the shape of fog billboard | `-1 - 10`  |
| `SMOG_MORNING`             | Average smog levels at morning                              | `0 - 1`    |
| `SMOG_NOON`                | Average smog levels at noon                                 | `0 - 1`    |
| `SMOG_EVENING`             | Average smog levels at evening                              | `0 - 1`    |
| `SUN_DAWN`                 | Prevents speculars from appearing below this angle          | `±10`      |
| `SUN_DUSK`                 | Prevents speculars form appearing above this angle          | `±10`      |
| `HUMIDITY_OFFSET`          | Offsets humidity by this amount                             | `0 - 1`    |
| `HORIZON_OFFSET`           | Adjusts the horizon line by this amount                     | `±10`      |
| `MINIMUM_GLOW_EMISSIVES`   | Sets the minimum value of glow emissives                    | `0 - 1`    |
| `TUNNEL_HELPER`            | Dims sun, ambient and fog light in tunnels                  | `0 - 1`    |
| `LANDSCAPE_USE`            | Activates fake landscape                                    | `bool`     |
| `LANDSCAPE_HUE`            | Dominant wavelength of landscape                            | `±180`     |
| `LANDSCAPE_SATURATION`     | Intensity of landscape colors                               | `0 - 2`    |
| `LANDSCAPE_LEVEL`          | How bright the landscape is                                 | `0 - 10`   |
| `LANDSCAPE_GAMMA`          | Gamma levels of landscape                                   | `0 - 4`    |
| `LANDSCAPE_DIFFUSE`        | Light diffusion amount on landscape                         | `0 - 1`    |
| `LANDSCAPE_AMBIENT`        | Ambient light level of landscape                            | `0 - 1`    |
| `LANDSCAPE_HEIGHT`         | Height of landscape                                         | `±1.000`   |
| `LANDSCAPE_COVER_NEGATIVE` | No visible difference                                       | `bool`     |
| `LANDSCAPE_SHIFT_X`        | Shifts landscape X coordinates by this amount               | `±5.000`   |
| `LANDSCAPE_SHIFT_Z`        | Shifts landscape Z coordinates by this amount               | `±5.000`   |
| `LANDSCAPE_FILES`          | What file the landscape will load/use                       | `table`    |

<!--> <!-->
<!--> <!-->
<!--> <!-->

## Opt + Debug Tab

| Setting                  | Description | Type/Range |
| ------------------------ | ----------- | ---------- |
| `optimization.cpu_split` | -           | `bool`     |
| `debug.memory`           | -           | `bool`     |
| `debug.computation`      | -           | `bool`     |
| `debug.graphics`         | -           | `bool`     |
