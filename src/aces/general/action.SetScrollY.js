export const config = {
  highlight: false,
  listName: "Set scroll Y",
  displayText: "{my}: Set scroll Y to [i]{0}[/i]",
  description: "Set scroll Y",
  params: [
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

export default function (y) {
  this.scrollY = y;
}
