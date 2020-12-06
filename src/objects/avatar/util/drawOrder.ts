export function getDrawOrder(value: keyof typeof drawOrder, direction: number) {
  const directions: any = drawOrder[value];
  return directions[direction.toString()];
}

const drawOrder = {
  std: {
    "0": [
      "li",
      "lh",
      "ls",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
    "1": [
      "li",
      "lh",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "ri",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
    "2": [
      "li",
      "lh",
      "ls",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
    ],
    "3": [
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "li",
      "lh",
      "ls",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
    ],
    "4": [
      "rh",
      "rs",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "lh",
      "ls",
      "li",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
    ],
    "5": [
      "rh",
      "rs",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "li",
      "lh",
      "ls",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
    "6": [
      "rh",
      "rs",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "li",
      "lh",
      "ls",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
    "7": [
      "li",
      "lh",
      "ls",
      "ri",
      "rh",
      "rs",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
  },
  "lh-up": {
    "4": [
      "rh",
      "rs",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ri",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "lh",
      "ls",
      "li",
    ],
    "5": [
      "rh",
      "rs",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "li",
      "lh",
      "ls",
    ],
    "6": [
      "rh",
      "rs",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "li",
      "lh",
      "ls",
    ],
  },
  "rh-up": {
    "0": [
      "li",
      "lh",
      "ls",
      "ri",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "rh",
      "rs",
    ],
    "1": [
      "li",
      "lh",
      "ls",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "rh",
      "rs",
    ],
    "2": [
      "li",
      "lh",
      "ls",
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "rh",
      "rs",
    ],
    "3": [
      "bd",
      "sh",
      "lg",
      "ch",
      "wa",
      "li",
      "lh",
      "ls",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "rh",
      "rs",
    ],
  },
  sit: {
    "2": [
      "li",
      "lh",
      "ls",
      "bd",
      "lg",
      "ch",
      "wa",
      "ca",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "sh",
    ],
    "3": [
      "bd",
      "lg",
      "ch",
      "wa",
      "ca",
      "li",
      "lh",
      "ls",
      "rh",
      "rs",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "sh",
    ],
    "4": [
      "rh",
      "rs",
      "bd",
      "lg",
      "ch",
      "wa",
      "ca",
      "lh",
      "ls",
      "li",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "sh",
    ],
  },
  "sit.lh-up": {
    "4": [
      "rh",
      "rs",
      "bd",
      "lg",
      "ch",
      "wa",
      "ri",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "lh",
      "ls",
      "li",
      "sh",
    ],
  },
  "sit.rh-up": {
    "2": [
      "li",
      "lh",
      "ls",
      "bd",
      "lg",
      "ch",
      "wa",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "rh",
      "rs",
      "sh",
    ],
    "3": [
      "bd",
      "lg",
      "ch",
      "wa",
      "li",
      "lh",
      "ls",
      "ca",
      "hd",
      "fc",
      "ey",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
      "ri",
      "rh",
      "rs",
      "sh",
    ],
  },
  lay: {
    "2": [
      "lh",
      "ls",
      "li",
      "bd",
      "lg",
      "sh",
      "ch",
      "hd",
      "fc",
      "ey",
      "wa",
      "ri",
      "rh",
      "rs",
      "ca",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
    "4": [
      "rh",
      "rs",
      "ri",
      "bd",
      "lg",
      "sh",
      "ch",
      "hd",
      "fc",
      "ey",
      "wa",
      "li",
      "lh",
      "ls",
      "ca",
      "hr",
      "hrb",
      "fa",
      "ea",
      "ha",
      "he",
    ],
  },
};