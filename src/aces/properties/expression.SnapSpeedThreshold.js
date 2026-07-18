export const config = {
  highlight: false,
  returnType: "number",
  description: "Snap speed threshold",
  params: [],
};

export const expose = false;

export default function () {
  return this.snapSpeedThreshold;
}
