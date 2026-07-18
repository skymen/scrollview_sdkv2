export const config = {
  highlight: false,
  returnType: "number",
  description: "Snap speed",
  params: [],
};

export const expose = false;

export default function () {
  return this.snapSpeed;
}
