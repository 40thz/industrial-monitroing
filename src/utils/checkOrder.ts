enum ORDERS {
  HEIGHT = 'Выше среднего',
  MEDIUM = 'Средний уровень',
  SUB_MEDIUM = 'Ниже среднего',
  SMALL = 'Низкий уровень',
}

export const checkOrder = (num: number): string => {
  if (num >= 68) {
    return ORDERS.HEIGHT;
  }

  if (num >= 34) {
    return ORDERS.MEDIUM;
  }

  return ORDERS.SUB_MEDIUM;
};
