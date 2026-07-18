export const config = {
  highlight: false,
  listName: "Set align",
  displayText: "{my}: Set align to [i]{0}[/i], [i]{1}[/i]",
  description: "Set align",
  params: [
    {
      id: "alignHorizontal",
      name: "Horizontal align",
      desc: "Horizontal align",
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
    {
      id: "alignVertical",
      name: "Vertical align",
      desc: "Vertical align",
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

export default function (alignHorizontal, alignVertical) {
  this.alignHorizontal = alignHorizontal;
  this.alignVertical = alignVertical;
}
