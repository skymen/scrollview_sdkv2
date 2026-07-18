export const config = {
  highlight: false,
  returnType: "number",
  description: "Nb rows",
  params: [],
};

export const expose = false;

export default function () {
  return this.nbRows;
}
