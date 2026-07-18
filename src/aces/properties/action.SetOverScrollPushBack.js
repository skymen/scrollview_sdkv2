export const config = {
  highlight: false,
  listName: "Set overscroll push back",
  displayText: "{my}: Set overscroll push back to [i]{0}[/i]",
  description: "Set overscroll push back",
  params: [
    {
      id: "pushBack",
      name: "Push back",
      desc: "Push back",
      type: "number",
      initialValue: "500",
    },
  ],
};

export const expose = true;

export default function (pushBack) {
  this.overscrollPushback = Math.max(0, pushBack);
}
