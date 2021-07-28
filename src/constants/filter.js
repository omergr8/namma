const dateFormatter = (date) => {
  const dt = new Date(date);
  const cDt = `${dt.getFullYear()}-${("0" + (dt.getMonth() + 1)).slice(-2)}-${(
    "0" + dt.getDate()
  ).slice(-2)}`;
  return cDt;
};
export const filterApi = (
  fromDate,
  toDate,
  withdrawlChecked,
  depositChecked,
  loremChecked
) => {
  const from = dateFormatter(fromDate);
  const to = dateFormatter(toDate);
  if (
    fromDate !== null &&
    toDate === null &&
    !withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    !withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?endDate=${to}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?withdrawl=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    !withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?deposit=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    !withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    !withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&withdrawl=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    !withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&deposit=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    !withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?endDate=${to}&withdrawl=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    !withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?endDate=${to}&deposit=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    !withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?endDate=${to}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?withdrawl=${true}&deposit=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?withdrawl=${true}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    !withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?deposit=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    withdrawlChecked &&
    !depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&withdrawl=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    !withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&deposit=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    !withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&withdrawl=${true}&deposit=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    !withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&deposit=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&withdrawl=${true}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?endDate=${to}&withdrawl=${true}&deposit=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    !withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?endDate=${to}&deposit=${true}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate !== null &&
    withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?endDate=${to}&withdrawl=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&withdrawl=${true}&deposit=${true}`;
  } else if (
    fromDate !== null &&
    toDate === null &&
    !withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&deposit=${true}&lorem=${true}`;
  } else if (
    fromDate === null &&
    toDate === null &&
    withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?withdrawl=${from}&deposit=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    withdrawlChecked &&
    depositChecked &&
    !loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&withdrawl=${true}&deposit=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    withdrawlChecked &&
    !depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&withdrawl=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    !withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&deposit=${true}&lorem=${true}`;
  } else if (
    fromDate !== null &&
    toDate !== null &&
    withdrawlChecked &&
    depositChecked &&
    loremChecked
  ) {
    return `?startDate=${from}&endDate=${to}&withdrawl=${true}&deposit=${true}&lorem=${true}`;
  }
};
