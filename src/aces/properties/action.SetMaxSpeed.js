export const config = {
  highlight: false,
  listName: "Set max speed",
  displayText: "{my}: Set max speed to [i]{0}[/i]",
  description: "Set max speed",
  params: [
    {
      id: "maxSpeed",
      name: "Max speed",
      desc: "Max speed",
      type: "number",
      initialValue: "100",
    },
  ],
};

export const expose = true;

export default function (maxSpeed) {
  this.maxSpeed = maxSpeed;
}
