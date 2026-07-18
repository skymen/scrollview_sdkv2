export const config = {
  highlight: false,
  returnType: "number",
  description: "Deceleration",
  params: [],
};

export const expose = false;

export default function () {
  return this.deceleration;
}
