export const config = {
  highlight: false,
  listName: "Set vector X",
  displayText: "{my}: Set vector X to [i]{0}[/i]",
  description: "Set vector X",
  params: [
    {
      id: "x",
      name: "X",
      desc: "X",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default function (x) {
  this.vectorX = x;
}
