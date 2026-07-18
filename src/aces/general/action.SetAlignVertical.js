export const config = {
  highlight: false,
  listName: "Set vertical align",
  displayText: "{my}: Set vertical align to [i]{0}[/i]",
  description: "Set vertical align",
  params: [
    {
      id: "align",
      name: "Align",
      desc: "Align",
      type: "combo",
      items: [
        {
          top: "top",
        },
        {
          center: "center",
        },
        {
          bottom: "bottom",
        },
      ],
      initialValue: "top",
    },
  ],
};

export const expose = true;

export default function (align) {
  this.alignVertical = align;
}
