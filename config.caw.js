import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.BEHAVIOR;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "skymen_scrollview";
export const name = "Scroll View";
export const version = _version;
export const minConstructVersion = undefined;
export const author = "skymen";
export const website =
  "https://www.construct.net/en/make-games/addons/1187/scroll-view";
export const documentation =
  "https://www.construct.net/en/make-games/addons/1187/scroll-view";
export const description =
  "Handles scrolling a given instance over the area of the object";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = false;
export const files = {
  extensionScript: {
    enabled: false,
    watch: false,
    targets: ["x86", "x64"],
    name: "MyExtension",
  },
  fileDependencies: [],
  remoteFileDependencies: [],
  cordovaPluginReferences: [],
  cordovaResourceFiles: [],
};

export const aceCategories = {
  general: "General",
  properties: "Properties",
};

export const info = {
  Set: {
    CanBeBundled: true,
    IsDeprecated: false,
    IsOnlyOneAllowed: true,
  },
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "max-speed",
    options: { initialValue: 1000, minValue: 0 },
    name: "Max speed",
    desc: "Max speed",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "deceleration",
    options: { initialValue: 1500, minValue: 0 },
    name: "Deceleration",
    desc: "Deceleration",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "overscroll-pushback",
    options: { initialValue: 5000, minValue: 0 },
    name: "Overscroll push back",
    desc: "Overscroll push back",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "overscroll-deceleration-ratio",
    options: { initialValue: 10, minValue: 0 },
    name: "Overscroll deceleration ratio",
    desc: "Overscroll deceleration ratio",
  },
  {
    type: PROPERTY_TYPE.COMBO,
    id: "scroll-direction",
    options: {
      initialValue: "vertical",
      items: [
        { vertical: "vertical" },
        { horizontal: "horizontal" },
        { both: "both" },
      ],
    },
    name: "Scroll direction",
    desc: "Scroll direction",
  },
  {
    type: PROPERTY_TYPE.COMBO,
    id: "align-horizontal",
    options: {
      initialValue: "left",
      items: [{ left: "left" }, { center: "center" }, { right: "right" }],
    },
    name: "Horizontal align",
    desc: "Horizontal align",
  },
  {
    type: PROPERTY_TYPE.COMBO,
    id: "align-vertical",
    options: {
      initialValue: "top",
      items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
    },
    name: "Vertical align",
    desc: "Vertical align",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "margin-left",
    options: { initialValue: 0, minValue: 0 },
    name: "Margin left",
    desc: "Margin left",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "margin-top",
    options: { initialValue: 0, minValue: 0 },
    name: "Margin top",
    desc: "Margin top",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "margin-right",
    options: { initialValue: 0, minValue: 0 },
    name: "Margin right",
    desc: "Margin right",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "margin-bottom",
    options: { initialValue: 0, minValue: 0 },
    name: "Margin bottom",
    desc: "Margin bottom",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "overscroll",
    options: { initialValue: 20, minValue: 0 },
    name: "Max Overscroll",
    desc: "How much overscroll is allowed",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "show-overscroll",
    options: { initialValue: true },
    name: "Show overscroll",
    desc: "Show overscroll",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "pick-first-child-as-instance",
    options: { initialValue: true },
    name: "Pick first child as instance",
    desc: "Pick first child as instance",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "enable-snapping",
    options: { initialValue: false },
    name: "Enable snapping",
    desc: "Enable snapping",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "snap-speed-threshold",
    options: { initialValue: 100, minValue: 0 },
    name: "Snap speed threshold",
    desc: "Snap speed threshold",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "snap-distance-threshold",
    options: { initialValue: 100, minValue: 0 },
    name: "Snap distance threshold",
    desc: "Snap distance threshold",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "snap-speed",
    options: { initialValue: 1000, minValue: 0 },
    name: "Snap speed",
    desc: "Snap speed",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "nb-columns",
    options: { initialValue: 1 },
    name: "Nb columns",
    desc: "Nb columns",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "nb-rows",
    options: { initialValue: 1 },
    name: "Nb rows",
    desc: "Nb rows",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "enable",
    options: { initialValue: true },
    name: "Enabled",
    desc: "Enabled",
  },
];
