export const config = {
  highlight: false,
  listName: "Set progress Y",
  displayText: "{my}: Set scroll progress Y to [i]{0}[/i]",
  description: "Set progress Y",
  params: [
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

export default function (y) {
  this.scrollProgressY = y;
}
