export const config = {
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
};

export const expose = false;

export default function (enabled) {
  this.enabled = enabled;
}
