import { action, condition, expression } from "../template/aceDefine.js";

const general = "general";
const properties = "properties";

const num = (id, name, desc, value) => ({
  id,
  name,
  desc,
  type: "number",
  initialValue: String(value),
});

action(
  general,
  "SetScrollXY",
  {
    highlight: true,
    listName: "Set scroll",
    displayText: "{my}: Set scroll to ([i]{0}[/i], [i]{1}[/i])",
    description: "Set scroll",
    params: [num("x", "X", "X", 0), num("y", "Y", "Y", 0)],
  },
  function (x, y) {
    this.scrollX = x;
    this.scrollY = y;
  }
);

action(
  general,
  "SetScrollX",
  {
    highlight: false,
    listName: "Set scroll X",
    displayText: "{my}: Set scroll X to [i]{0}[/i]",
    description: "Set scroll X",
    params: [num("x", "X", "X", 0)],
  },
  function (x) {
    this.scrollX = x;
  }
);

action(
  general,
  "SetScrollY",
  {
    highlight: false,
    listName: "Set scroll Y",
    displayText: "{my}: Set scroll Y to [i]{0}[/i]",
    description: "Set scroll Y",
    params: [num("y", "Y", "Y", 0)],
  },
  function (y) {
    this.scrollY = y;
  }
);

action(
  general,
  "SetProgressXY",
  {
    highlight: true,
    listName: "Set progress",
    displayText: "{my}: Set scroll progress to ([i]{0}[/i], [i]{1}[/i])",
    description: "Set progress",
    params: [
      num("x", "X", "X from 0 to 1", 0),
      num("y", "Y", "Y from 0 to 1", 0),
    ],
  },
  function (x, y) {
    this.scrollProgressX = x;
    this.scrollProgressY = y;
  }
);

action(
  general,
  "SetProgressX",
  {
    highlight: false,
    listName: "Set progress X",
    displayText: "{my}: Set scroll progress X to [i]{0}[/i]",
    description: "Set progress X",
    params: [num("x", "X", "X from 0 to 1", 0)],
  },
  function (x) {
    this.scrollProgressX = x;
  }
);

action(
  general,
  "SetProgressY",
  {
    highlight: false,
    listName: "Set progress Y",
    displayText: "{my}: Set scroll progress Y to [i]{0}[/i]",
    description: "Set progress Y",
    params: [num("y", "Y", "Y from 0 to 1", 0)],
  },
  function (y) {
    this.scrollProgressY = y;
  }
);

action(
  general,
  "SetInstance",
  {
    highlight: false,
    listName: "Set instance",
    displayText: "{my}: Set instance to [i]{0}[/i]",
    description: "Set instance",
    params: [
      {
        id: "instance",
        name: "Instance",
        desc: "Instance",
        type: "object",
        allowedPluginIds: ["<world>"],
      },
    ],
  },
  function (objectClass) {
    if (!objectClass) {
      this.scrollTarget = null;
      return;
    }
    const picked = objectClass.getPickedInstances();
    this.scrollTarget = picked.length ? picked[0] : null;
  },
  false
);

action(
  general,
  "SetEnabled",
  {
    highlight: true,
    listName: "Set enabled",
    displayText: "{my}: Set enabled to [i]{0}[/i]",
    description: "Set enabled",
    params: [
      {
        id: "enabled",
        name: "Enabled",
        desc: "Enabled",
        type: "boolean",
        initialValue: "true",
      },
    ],
  },
  function (enabled) {
    this.enabled = enabled;
  },
  false
);

action(
  general,
  "SetSnappingEnabled",
  {
    highlight: false,
    listName: "Set snapping enabled",
    displayText: "{my}: Set snapping enabled to [i]{0}[/i]",
    description: "Set snapping enabled",
    params: [
      {
        id: "enabled",
        name: "Enabled",
        desc: "Enabled",
        type: "boolean",
        initialValue: "true",
      },
    ],
  },
  function (enabled) {
    this.enableSnap = enabled;
  },
  false
);

action(
  general,
  "SetScrollDirection",
  {
    highlight: false,
    listName: "Set scroll direction",
    displayText: "{my}: Set scroll direction to [i]{0}[/i]",
    description: "Set scroll direction",
    params: [
      {
        id: "direction",
        name: "Direction",
        desc: "Direction",
        type: "combo",
        items: [
          { vertical: "vertical" },
          { horizontal: "horizontal" },
          { both: "both" },
        ],
        initialValue: "vertical",
      },
    ],
  },
  function (direction) {
    this.scrollDirection = direction;
  }
);

action(
  general,
  "SetAlignHorizontal",
  {
    highlight: false,
    listName: "Set horizontal align",
    displayText: "{my}: Set horizontal align to [i]{0}[/i]",
    description: "Set horizontal align",
    params: [
      {
        id: "align",
        name: "Align",
        desc: "Align",
        type: "combo",
        items: [{ left: "left" }, { center: "center" }, { right: "right" }],
        initialValue: "left",
      },
    ],
  },
  function (align) {
    this.alignHorizontal = align;
  }
);

action(
  general,
  "SetAlignVertical",
  {
    highlight: false,
    listName: "Set vertical align",
    displayText: "{my}: Set vertical align to [i]{0}[/i]",
    description: "Set vertical align",
    params: [
      {
        id: "align",
        name: "Align",
        desc: "Align",
        type: "combo",
        items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
        initialValue: "top",
      },
    ],
  },
  function (align) {
    this.alignVertical = align;
  }
);

action(
  general,
  "SetAlign",
  {
    highlight: false,
    listName: "Set align",
    displayText: "{my}: Set align to [i]{0}[/i], [i]{1}[/i]",
    description: "Set align",
    params: [
      {
        id: "alignHorizontal",
        name: "Horizontal align",
        desc: "Horizontal align",
        type: "combo",
        items: [{ left: "left" }, { center: "center" }, { right: "right" }],
        initialValue: "left",
      },
      {
        id: "alignVertical",
        name: "Vertical align",
        desc: "Vertical align",
        type: "combo",
        items: [{ top: "top" }, { center: "center" }, { bottom: "bottom" }],
        initialValue: "top",
      },
    ],
  },
  function (alignHorizontal, alignVertical) {
    this.alignHorizontal = alignHorizontal;
    this.alignVertical = alignVertical;
  }
);

action(
  properties,
  "SetVectorX",
  {
    highlight: false,
    listName: "Set vector X",
    displayText: "{my}: Set vector X to [i]{0}[/i]",
    description: "Set vector X",
    params: [num("x", "X", "X", 0)],
  },
  function (x) {
    this.vectorX = x;
  }
);

action(
  properties,
  "SetVectorY",
  {
    highlight: false,
    listName: "Set vector Y",
    displayText: "{my}: Set vector Y to [i]{0}[/i]",
    description: "Set vector Y",
    params: [num("y", "Y", "Y", 0)],
  },
  function (y) {
    this.vectorY = y;
  }
);

action(
  properties,
  "SetVectorXY",
  {
    highlight: false,
    listName: "Set vector",
    displayText: "{my}: Set vector to ([i]{0}[/i], [i]{1}[/i])",
    description: "Set vector",
    params: [num("x", "X", "X", 0), num("y", "Y", "Y", 0)],
  },
  function (x, y) {
    this.vectorX = x;
    this.vectorY = y;
  }
);

action(
  properties,
  "SetMaxSpeed",
  {
    highlight: false,
    listName: "Set max speed",
    displayText: "{my}: Set max speed to [i]{0}[/i]",
    description: "Set max speed",
    params: [num("maxSpeed", "Max speed", "Max speed", 100)],
  },
  function (maxSpeed) {
    this.maxSpeed = maxSpeed;
  }
);

action(
  properties,
  "SetDeceleration",
  {
    highlight: false,
    listName: "Set deceleration",
    displayText: "{my}: Set deceleration to [i]{0}[/i]",
    description: "Set deceleration",
    params: [num("deceleration", "Deceleration", "Deceleration", 5000)],
  },
  function (deceleration) {
    this.deceleration = Math.max(deceleration, 0);
  }
);

action(
  properties,
  "SetOverScrollPushBack",
  {
    highlight: false,
    listName: "Set overscroll push back",
    displayText: "{my}: Set overscroll push back to [i]{0}[/i]",
    description: "Set overscroll push back",
    params: [num("pushBack", "Push back", "Push back", 500)],
  },
  function (pushBack) {
    this.overscrollPushback = Math.max(0, pushBack);
  }
);

action(
  properties,
  "SetSnapSpeedThreshold",
  {
    highlight: false,
    listName: "Set snap speed threshold",
    displayText: "{my}: Set snap speed threshold to [i]{0}[/i]",
    description: "Set snap speed threshold",
    params: [num("speedThreshold", "Speed threshold", "Speed threshold", 100)],
  },
  function (speedThreshold) {
    this.snapSpeedThreshold = speedThreshold;
  }
);

action(
  properties,
  "SetSnapDistanceThreshold",
  {
    highlight: false,
    listName: "Set snap distance threshold",
    displayText: "{my}: Set snap distance threshold to [i]{0}[/i]",
    description: "Set snap distance threshold",
    params: [
      num("distanceThreshold", "Distance threshold", "Distance threshold", 100),
    ],
  },
  function (distanceThreshold) {
    this.snapDistanceThreshold = distanceThreshold;
  }
);

action(
  properties,
  "SetSnapSpeed",
  {
    highlight: false,
    listName: "Set snap speed",
    displayText: "{my}: Set snap speed to [i]{0}[/i]",
    description: "Set snap speed",
    params: [num("snapSpeed", "Snap speed", "Snap speed", 1000)],
  },
  function (snapSpeed) {
    this.snapSpeed = snapSpeed;
  }
);

action(
  properties,
  "SetNbColumns",
  {
    highlight: false,
    listName: "Set nb columns",
    displayText: "{my}: Set nb columns to [i]{0}[/i]",
    description: "Set nb columns",
    params: [num("nbColumns", "Nb columns", "Nb columns", 1)],
  },
  function (nbColumns) {
    this.nbColumns = nbColumns;
  }
);

action(
  properties,
  "SetNbRows",
  {
    highlight: false,
    listName: "Set nb rows",
    displayText: "{my}: Set nb rows to [i]{0}[/i]",
    description: "Set nb rows",
    params: [num("nbRows", "Nb rows", "Nb rows", 1)],
  },
  function (nbRows) {
    this.nbRows = nbRows;
  }
);

action(
  properties,
  "SetGrid",
  {
    highlight: false,
    listName: "Set grid",
    displayText: "{my}: Set grid to ([i]{0}[/i], [i]{1}[/i])",
    description: "Set grid",
    params: [
      num("nbColumns", "Nb columns", "Nb columns", 1),
      num("nbRows", "Nb rows", "Nb rows", 1),
    ],
  },
  function (nbColumns, nbRows) {
    this.nbColumns = nbColumns;
    this.nbRows = nbRows;
  }
);

condition(
  general,
  "IsEnabled",
  {
    highlight: false,
    listName: "Is enabled",
    displayText: "{my}: Is enabled",
    description: "Is enabled",
    params: [],
  },
  function () {
    return this.enabled;
  },
  false
);

condition(
  general,
  "IsSnappingEnabled",
  {
    highlight: false,
    listName: "Is snapping enabled",
    displayText: "{my}: Is snapping enabled",
    description: "Is snapping enabled",
    params: [],
  },
  function () {
    return this.enableSnap;
  },
  false
);

const numberExpressions = [
  [general, "ScrollX", "Scroll X", "this.scrollX"],
  [general, "ScrollY", "Scroll Y", "this.scrollY"],
  [general, "ScrollProgressX", "Scroll progress X", "this.scrollProgressX"],
  [general, "ScrollProgressY", "Scroll progress Y", "this.scrollProgressY"],
  [general, "ScrollWidth", "Scroll width", "this.scrollWidth"],
  [general, "ScrollHeight", "Scroll height", "this.scrollHeight"],
  [general, "MaxSpeed", "Max speed", "this.maxSpeed"],
  [general, "Deceleration", "Deceleration", "this.deceleration"],
  [general, "Speed", "Speed", "this.speed"],
  [properties, "VectorX", "Vector X", "this.vectorX"],
  [properties, "VectorY", "Vector Y", "this.vectorY"],
  [properties, "MarginLeft", "Margin left", "this.marginLeft"],
  [properties, "MarginTop", "Margin top", "this.marginTop"],
  [properties, "MarginRight", "Margin right", "this.marginRight"],
  [properties, "MarginBottom", "Margin bottom", "this.marginBottom"],
  [properties, "OverscrollX", "Overscroll", "this.overscrollX"],
  [properties, "OverscrollY", "Overscroll", "this.overscrollY"],
  [properties, "MaxOverScroll", "Max overscroll", "this.maxOverScroll"],
  [
    properties,
    "OverScrollPushBack",
    "OverScrollPushBack",
    "this.overscrollPushback",
  ],
  [
    properties,
    "SnapSpeedThreshold",
    "Snap speed threshold",
    "this.snapSpeedThreshold",
  ],
  [
    properties,
    "SnapDistanceThreshold",
    "Snap distance threshold",
    "this.snapDistanceThreshold",
  ],
  [properties, "SnapSpeed", "Snap speed", "this.snapSpeed"],
  [properties, "NbColumns", "Nb columns", "this.nbColumns"],
  [properties, "NbRows", "Nb rows", "this.nbRows"],
];

for (const [category, name, description, prop] of numberExpressions) {
  expression(
    category,
    name,
    {
      highlight: false,
      returnType: "number",
      description,
      params: [],
    },
    new Function(`return ${prop};`),
    false
  );
}
