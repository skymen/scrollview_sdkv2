export const config = {
  highlight: false,
  listName: "Set snap speed threshold",
  displayText: "{my}: Set snap speed threshold to [i]{0}[/i]",
  description: "Set snap speed threshold",
  params: [
    {
      id: "speedThreshold",
      name: "Speed threshold",
      desc: "Speed threshold",
      type: "number",
      initialValue: "100",
    },
  ],
};

export const expose = true;

export default function (speedThreshold) {
  this.snapSpeedThreshold = speedThreshold;
}
