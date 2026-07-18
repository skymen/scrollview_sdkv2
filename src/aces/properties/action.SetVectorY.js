export const config = {
  highlight: false,
  listName: "Set vector Y",
  displayText: "{my}: Set vector Y to [i]{0}[/i]",
  description: "Set vector Y",
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
  this.vectorY = y;
}
