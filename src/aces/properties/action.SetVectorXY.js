export const config = {
  highlight: false,
  listName: "Set vector",
  displayText: "{my}: Set vector to ([i]{0}[/i], [i]{1}[/i])",
  description: "Set vector",
  params: [
    {
      id: "x",
      name: "X",
      desc: "X",
      type: "number",
      initialValue: "0",
    },
    {
      id: "y",
      name: "Y",
      desc: "Y",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default function (x, y) {
  this.vectorX = x;
  this.vectorY = y;
}
