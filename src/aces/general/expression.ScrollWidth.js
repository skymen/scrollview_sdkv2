export const config = {
  highlight: false,
  returnType: "number",
  description: "Scroll width",
  params: [],
};

export const expose = false;

export default function () {
  return this.scrollWidth;
}
