export const config = {
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
};

export const expose = false;

export default function (objectClass) {
  if (!objectClass) {
    this.scrollTarget = null;
    return;
  }
  const picked = objectClass.getPickedInstances();
  this.scrollTarget = picked.length ? picked[0] : null;
}
