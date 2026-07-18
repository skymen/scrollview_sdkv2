export const config = {
  highlight: false,
  returnType: "number",
  description: "Scroll Y",
  params: [],
};

export const expose = false;

export default function () {
  return this.scrollY;
}
