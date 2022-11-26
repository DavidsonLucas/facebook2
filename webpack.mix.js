let mix = require("laravel-mix");


mix.js("src/app.js", "dist")
        .sass("src/nav.scss", "dist");

mix.disableNotifications();