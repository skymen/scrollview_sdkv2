export const config = {
  highlight: false,
  returnType: "number",
  description: "Nb columns",
  params: [],
};

export const expose = false;

export default function () {
  return this.nbColumns;
}
