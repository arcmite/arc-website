import DefaultTheme from "vitepress/theme";
import "./style.css";

//register globals here
import CreatorProfile from "./components/CreatorProfile.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CreatorProfile', CreatorProfile)
  }
};