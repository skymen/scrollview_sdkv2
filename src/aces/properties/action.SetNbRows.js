export const config = {
  highlight: false,
  listName: "Set nb rows",
  displayText: "{my}: Set nb rows to [i]{0}[/i]",
  description: "Set nb rows",
  params: [
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

export default function (nbRows) {
  this.nbRows = nbRows;
}
