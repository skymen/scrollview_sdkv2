export const config = {
  highlight: false,
  returnType: "number",
  description: "Scroll height",
  params: [],
};

export const expose = false;

export default function () {
  return this.scrollHeight;
}
