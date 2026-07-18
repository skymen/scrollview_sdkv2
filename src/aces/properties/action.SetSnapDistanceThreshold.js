export const config = {
  highlight: false,
  listName: "Set snap distance threshold",
  displayText: "{my}: Set snap distance threshold to [i]{0}[/i]",
  description: "Set snap distance threshold",
  params: [
    {
      id: "distanceThreshold",
      name: "Distance threshold",
      desc: "Distance threshold",
      type: "number",
      initialValue: "100",
    },
  ],
};

export const expose = true;

export default function (distanceThreshold) {
  this.snapDistanceThreshold = distanceThreshold;
}
