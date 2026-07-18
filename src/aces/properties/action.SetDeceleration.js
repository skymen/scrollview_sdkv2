export const config = {
  highlight: false,
  listName: "Set deceleration",
  displayText: "{my}: Set deceleration to [i]{0}[/i]",
  description: "Set deceleration",
  params: [
    {
      id: "deceleration",
      name: "Deceleration",
      desc: "Deceleration",
      type: "number",
      initialValue: "5000",
    },
  ],
};

export const expose = true;

export default function (deceleration) {
  this.deceleration = Math.max(deceleration, 0);
}
