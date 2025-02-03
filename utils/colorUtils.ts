export const getTamaguiColorByIndex = (index: number) => {
  const colors = [
    '$orange4',
    '$yellow4',
    '$green4',
    '$blue4',
    '$purple4',
    '$pink4',
    '$red4',
  ];
  return colors[index % colors.length];
};

export const getColorByIndex = (index: number) => {
  const colors = [
    '#60A5FA',
    '#FCD34D',
    '#4ADE80',
    '#FB923C',
    '#C084FC',
    '#F472B6',
    '#F87171',
    '#22D3EE',
  ];
  return colors[index % colors.length];
};

export const getColorPairsByIndex = (index: number) => {
  const themes = [
    {
      primary: '#60A5FA',
      secondary: '#EFF6FF',
    },
    {
      primary: '#FCD34D',
      secondary: '#FEFCE8',
    },
    {
      primary: '#4ADE80',
      secondary: '#F0FDF4',
    },
    {
      primary: '#FB923C',
      secondary: '#FFF7ED',
    },
    {
      primary: '#C084FC',
      secondary: '#FAF5FF',
    },
  ];
  return themes[index % themes.length];
};
