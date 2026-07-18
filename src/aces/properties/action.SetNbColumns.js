export const config = {
  highlight: false,
  listName: "Set nb columns",
  displayText: "{my}: Set nb columns to [i]{0}[/i]",
  description: "Set nb columns",
  params: [
    {
      id: "nbColumns",
      name: "Nb columns",
      desc: "Nb columns",
      type: "number",
      initialValue: "1",
    },
  ],
};

export const expose = true;

export default function (nbColumns) {
  this.nbColumns = nbColumns;
}
