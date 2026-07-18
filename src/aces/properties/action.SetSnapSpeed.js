export const config = {
  highlight: false,
  listName: "Set snap speed",
  displayText: "{my}: Set snap speed to [i]{0}[/i]",
  description: "Set snap speed",
  params: [
    {
      id: "snapSpeed",
      name: "Snap speed",
      desc: "Snap speed",
      type: "number",
      initialValue: "1000",
    },
  ],
};

export const expose = true;

export default function (snapSpeed) {
  this.snapSpeed = snapSpeed;
}
