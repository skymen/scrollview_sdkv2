export const config = {
  highlight: false,
  listName: "Set scroll direction",
  displayText: "{my}: Set scroll direction to [i]{0}[/i]",
  description: "Set scroll direction",
  params: [
    {
      id: "direction",
      name: "Direction",
      desc: "Direction",
      type: "combo",
      items: [
        {
          vertical: "vertical",
        },
        {
          horizontal: "horizontal",
        },
        {
          both: "both",
        },
      ],
      initialValue: "vertical",
    },
  ],
};

export const expose = true;

export default function (direction) {
  this.scrollDirection = direction;
}
