let decodeString = "c9d2";
let codeLength = 4;

const xorI18n = pageI18n({
  lengthMismatch: {
    ru: "Длина вводимого значения должна быть {0} символа.",
    en: "Input HEX value must be exactly {0} characters long."
  },
  hexOnly: {
    ru: "Допустимы только HEX символы (0-9, A-F).",
    en: "Only HEX characters (0-9, A-F) are allowed."
  }
});

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code');

  if (codeParam) {
    document.getElementById("origCode").value = codeParam;
    calculateXor();
  }
}

function calculateXor() {
  let input = document.getElementById("origCode").value.trim();
  let result = '';

  if (input.length !== codeLength) {
    alert(xorI18n.t("lengthMismatch", codeLength));
    return;
  }

  if (!/^[0-9a-fA-F]+$/.test(input)) {
    alert(xorI18n.t("hexOnly"));
    return;
  }

  for (let index = 0; index < codeLength; index++) {
    const a = parseInt(input.charAt(index), 16);
    const b = parseInt(decodeString.charAt(index), 16);
    const temp = (a ^ b).toString(16).toUpperCase();
    result += temp;
  }

  document.getElementById("calcCode").value = result;
}

function clearAll() {
  document.getElementById("origCode").value = "";
  document.getElementById("calcCode").value = "";
}
