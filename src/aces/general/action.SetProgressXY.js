export const config = {
  highlight: true,
  listName: "Set progress",
  displayText: "{my}: Set scroll progress to ([i]{0}[/i], [i]{1}[/i])",
  description: "Set progress",
  params: [
    {
      id: "x",
      name: "X",
      desc: "X from 0 to 1",
      type: "number",
      initialValue: "0",
    },
    {
      id: "y",
      name: "Y",
      desc: "Y from 0 to 1",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default function (x, y) {
  this.scrollProgressX = x;
  this.scrollProgressY = y;
}
