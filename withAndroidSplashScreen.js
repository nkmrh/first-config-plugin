"use strict";
exports.__esModule = true;
var config_plugins_1 = require("@expo/config-plugins");
var withAndroidSplashScreen = function (expoConfig) {
    return (0, config_plugins_1.withStringsXml)(expoConfig, function (modConfig) {
        modConfig.modResults = config_plugins_1.AndroidConfig.Strings.setStringItem([
            {
                _: 'true',
                $: {
                    name: 'expo_splash_screen_status_bar_translucent',
                    translatable: 'false'
                }
            }
        ], modConfig.modResults);
        return modConfig;
    });
};
exports["default"] = withAndroidSplashScreen;
