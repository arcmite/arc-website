import DefaultTheme from "vitepress/theme";
import "./tokens.css"
import "./style.css";

//register globals here
import CreatorProfile from "./components/CreatorProfile.vue";
import DownloadCard from './components/DownloadCard.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // run vitepress config first
    DefaultTheme.enhanceApp?.(ctx)

    // then rest
    ctx.app.component('CreatorProfile', CreatorProfile)
    ctx.app.component('DownloadCard', DownloadCard)
  }
};