export const config = {
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
};

export const expose = false;

export default function (enabled) {
  this.enableSnap = enabled;
}
