export const config = {
  highlight: false,
  listName: "Set scroll X",
  displayText: "{my}: Set scroll X to [i]{0}[/i]",
  description: "Set scroll X",
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
  this.scrollX = x;
}
