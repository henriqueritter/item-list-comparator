const sourceList = document.getElementById('sourceList');
const targetList = document.getElementById('targetList');

sourceList.addEventListener('input', updateValue);
targetList.addEventListener('input', updateValue);

const inputValues = {};

function updateValue(e) {
  inputValues[e.target.id] = e.target.value.split(',');
  document.getElementById(
    `${e.target.id}Total`
  ).textContent = `Quantidade de Itens: ${inputValues[e.target.id].length}`;
}

function compare() {
  const itemMap = {};
  const missingItems = [];

  for (let item of inputValues.targetList) {
    itemMap[item.toString()] = true;
  }

  for (let item of inputValues.sourceList) {
    if (!itemMap[item.toString()]) {
      missingItems.push(item.toString());
    }
  }

  const resultElement = document.getElementById('result');
  resultElement.textContent = missingItems.join(',');
}
