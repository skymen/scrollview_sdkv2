<img src="./src/icon.svg" width="100" /><br>
# Scroll View
<i>Handles scrolling a given instance over the area of the object</i> <br>
### Version 2.0.0.0

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](git@github.com:skymen/scrollview_sdkv2/releases/download/skymen_scrollview-2.0.0.0.c3addon/skymen_scrollview-2.0.0.0.c3addon)
<br>
<sub> [See all releases](git@github.com:skymen/scrollview_sdkv2/releases) </sub> <br>

#### What's New in 2.0.0.0
- **Added:** SDK v2 port, built with CAW. Projects made with the SDK v1 version load without changes.
- **Fixed:** Set scroll direction, Set horizontal align, Set vertical align and Set align now work. They were broken in v1. The Enabled property and Set enabled now actually pause the behavior. Scroll direction is now kept in savegames. Removed a wrong max value of 1 on the Overscroll push back and Overscroll deceleration ratio properties.

<sub>[View full changelog](#changelog)</sub>

---
<b><u>Author:</u></b> skymen <br>
<b>[Construct Addon Page](https://www.construct.net/en/make-games/addons/1187/scroll-view)</b>  <br>
<b>[Addon Website](https://www.construct.net/en/make-games/addons/1187/scroll-view)</b>  <br>
<b>[Documentation](https://www.construct.net/en/make-games/addons/1187/scroll-view)</b>  <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Max speed | Max speed | float |
| Deceleration | Deceleration | float |
| Overscroll push back | Overscroll push back | float |
| Overscroll deceleration ratio | Overscroll deceleration ratio | float |
| Scroll direction | Scroll direction | combo |
| Horizontal align | Horizontal align | combo |
| Vertical align | Vertical align | combo |
| Margin left | Margin left | float |
| Margin top | Margin top | float |
| Margin right | Margin right | float |
| Margin bottom | Margin bottom | float |
| Max Overscroll | How much overscroll is allowed | float |
| Show overscroll | Show overscroll | check |
| Pick first child as instance | Pick first child as instance | check |
| Enable snapping | Enable snapping | check |
| Snap speed threshold | Snap speed threshold | float |
| Snap distance threshold | Snap distance threshold | float |
| Snap speed | Snap speed | float |
| Nb columns | Nb columns | float |
| Nb rows | Nb rows | float |
| Enabled | Enabled | check |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set align | Set align | Horizontal align             *(combo)* <br>Vertical align             *(combo)* <br> |
| Set horizontal align | Set horizontal align | Align             *(combo)* <br> |
| Set vertical align | Set vertical align | Align             *(combo)* <br> |
| Set enabled | Set enabled | Enabled             *(boolean)* <br> |
| Set instance | Set instance | Instance             *(object)* <br> |
| Set progress X | Set progress X | X             *(number)* <br> |
| Set progress | Set progress | X             *(number)* <br>Y             *(number)* <br> |
| Set progress Y | Set progress Y | Y             *(number)* <br> |
| Set scroll direction | Set scroll direction | Direction             *(combo)* <br> |
| Set scroll X | Set scroll X | X             *(number)* <br> |
| Set scroll | Set scroll | X             *(number)* <br>Y             *(number)* <br> |
| Set scroll Y | Set scroll Y | Y             *(number)* <br> |
| Set snapping enabled | Set snapping enabled | Enabled             *(boolean)* <br> |
| Set deceleration | Set deceleration | Deceleration             *(number)* <br> |
| Set grid | Set grid | Nb columns             *(number)* <br>Nb rows             *(number)* <br> |
| Set max speed | Set max speed | Max speed             *(number)* <br> |
| Set nb columns | Set nb columns | Nb columns             *(number)* <br> |
| Set nb rows | Set nb rows | Nb rows             *(number)* <br> |
| Set overscroll push back | Set overscroll push back | Push back             *(number)* <br> |
| Set snap distance threshold | Set snap distance threshold | Distance threshold             *(number)* <br> |
| Set snap speed | Set snap speed | Snap speed             *(number)* <br> |
| Set snap speed threshold | Set snap speed threshold | Speed threshold             *(number)* <br> |
| Set vector X | Set vector X | X             *(number)* <br> |
| Set vector | Set vector | X             *(number)* <br>Y             *(number)* <br> |
| Set vector Y | Set vector Y | Y             *(number)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| Is enabled | Is enabled |  |
| Is snapping enabled | Is snapping enabled |  |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| Deceleration | Deceleration | number |  | 
| MaxSpeed | Max speed | number |  | 
| ScrollHeight | Scroll height | number |  | 
| ScrollProgressX | Scroll progress X | number |  | 
| ScrollProgressY | Scroll progress Y | number |  | 
| ScrollWidth | Scroll width | number |  | 
| ScrollX | Scroll X | number |  | 
| ScrollY | Scroll Y | number |  | 
| Speed | Speed | number |  | 
| MarginBottom | Margin bottom | number |  | 
| MarginLeft | Margin left | number |  | 
| MarginRight | Margin right | number |  | 
| MarginTop | Margin top | number |  | 
| MaxOverScroll | Max overscroll | number |  | 
| NbColumns | Nb columns | number |  | 
| NbRows | Nb rows | number |  | 
| OverScrollPushBack | OverScrollPushBack | number |  | 
| OverscrollX | Overscroll | number |  | 
| OverscrollY | Overscroll | number |  | 
| SnapDistanceThreshold | Snap distance threshold | number |  | 
| SnapSpeed | Snap speed | number |  | 
| SnapSpeedThreshold | Snap speed threshold | number |  | 
| VectorX | Vector X | number |  | 
| VectorY | Vector Y | number |  | 


---
## Changelog

**2.0.0.0**
- **Added:** SDK v2 port, built with CAW. Projects made with the SDK v1 version load without changes.
- **Fixed:** Set scroll direction, Set horizontal align, Set vertical align and Set align now work. They were broken in v1. The Enabled property and Set enabled now actually pause the behavior. Scroll direction is now kept in savegames. Removed a wrong max value of 1 on the Overscroll push back and Overscroll deceleration ratio properties.
