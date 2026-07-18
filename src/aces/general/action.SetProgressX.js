export const config = {
  highlight: false,
  listName: "Set progress X",
  displayText: "{my}: Set scroll progress X to [i]{0}[/i]",
  description: "Set progress X",
  params: [
    {
      id: "x",
      name: "X",
      desc: "X from 0 to 1",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default function (x) {
  this.scrollProgressX = x;
}
