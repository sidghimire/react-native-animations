import {PieChartData} from './PieChart';

export const generatePieChartData = () => {
  const itemsCount = Math.floor(Math.random() * 7) + 3;
  const value = [];
  for (let i = 0; i < itemsCount; i++) {
    value.push(Math.floor(Math.random() * 60) + 40);
  }

  const total = value.reduce((a, b) => a + b, 0);

  const data: PieChartData = [];
  for (let i = 0; i < itemsCount; i++) {
    const percent = value[i] / total;
    data.push({
      percent,
      color: getRandomColor(),
    });
  }

  console.log(data)
  return data;
};

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};