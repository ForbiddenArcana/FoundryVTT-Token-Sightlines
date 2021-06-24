# FoundryVTT-Token-Sightlines
This module changes the light and sight emission direction to be from the right side of tokens instead of the bottom. Our group doesn't use any top-down tokens, instead almost exclusively using head or waist-up artwork of people that are either facing ahead or to the side. This has led to annoying behaviour where our tokens would have to be upside down to see towards the top of a map. With this module, when setting up a new token, we ensure it's facing ahead or to the right (tokens facing left will have light/sight emitting from the back of their head); that way a token never needs to be rotated more than 90 degrees when looking towards any corner of a map. The horizontal and vertical flip buttons were included to allow characters to quickly rotate+vertical flip, or horizontal flip, to look behind them without their token turning upside-down.

## Installation
You can install this module in a couple different ways outlined below.

### Direct URL Install
* Go to the Add-on Modules tab.
* Click Install Module.
* Copy https://raw.githubusercontent.com/ForbiddenArcana/FoundryVTT-Token-Sightlines/main/module.json into the Manifest URL and click install.

### Manual
* Clone and extract the repo into the `Data/modules/token-sightlines` folder.
* You can either clone the repo or download a zip archive from the tags.

## Acknowledgements
* Token mirror buttons are from [MAClavell's Token Mirror Button module](https://github.com/MAClavell/Token-Mirror-Button), which was slightly modified to also include a vertical flip button. Thanks for the quick and easy method for this!
* The vast majority of the code contained in the overrideTokenSources.js file is from the Token updateSource function in the core foundry.js file. A few lines were edited to rotate the direction of light/sight emission.