export const config = {
  highlight: false,
  returnType: "number",
  description: "Overscroll",
  params: [],
};

export const expose = false;

export default function () {
  return this.overscrollY;
}
