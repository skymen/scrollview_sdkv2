export const config = {
  highlight: false,
  listName: "Set grid",
  displayText: "{my}: Set grid to ([i]{0}[/i], [i]{1}[/i])",
  description: "Set grid",
  params: [
    {
      id: "nbColumns",
      name: "Nb columns",
      desc: "Nb columns",
      type: "number",
      initialValue: "1",
    },
    {
      id: "nbRows",
      name: "Nb rows",
      desc: "Nb rows",
      type: "number",
      initialValue: "1",
    },
  ],
};

export const expose = true;

export default function (nbColumns, nbRows) {
  this.nbColumns = nbColumns;
  this.nbRows = nbRows;
}
