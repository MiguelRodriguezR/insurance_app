export function getDifYear(year) {
  return new Date().getFullYear() - year;
}

export function getPriceBrand(brand) {
  let inc;

  switch (brand) {
    case "european":
      inc = 1.3;
      break;
    case "american":
      inc = 1.4;
      break;
    case "asian":
      inc = 1.5;
      break;
    default:
      break;
  }

  return inc;
}

export function getPricePlan(plan) {
    return plan === 'basic' ? 1.2 : 1.5;
}

export function upperCaseFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}