import NavBar from "./components/NavBar/NavBar.vue";
import Grid from "./components/Grid/Grid.vue";
import Item from "./components/Item/Item.vue";
import Button from "./components/Button/Button.vue";

export default {
    install: (app, options) => {
        app.component("NavBar", NavBar);
        app.component("Grid", Grid);
        app.component("Item", Item);
        app.component("Button", Button);
    },
}