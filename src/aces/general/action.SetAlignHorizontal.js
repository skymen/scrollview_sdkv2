export const config = {
  highlight: false,
  listName: "Set horizontal align",
  displayText: "{my}: Set horizontal align to [i]{0}[/i]",
  description: "Set horizontal align",
  params: [
    {
      id: "align",
      name: "Align",
      desc: "Align",
      type: "combo",
      items: [
        {
          left: "left",
        },
        {
          center: "center",
        },
        {
          right: "right",
        },
      ],
      initialValue: "left",
    },
  ],
};

export const expose = true;

export default function (align) {
  this.alignHorizontal = align;
}
