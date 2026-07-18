export const config = {
  highlight: true,
  listName: "Set scroll",
  displayText: "{my}: Set scroll to ([i]{0}[/i], [i]{1}[/i])",
  description: "Set scroll",
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
  this.scrollX = x;
  this.scrollY = y;
}
