/* export function filterData(data, par) {
  const filteredData = data?.filter((data) => data?.setting === par);
  return filteredData[0].value;
}

export function filterSocial(data, par) {
  const filteredData = data?.filter((data) => data?.platform === par);

  return filteredData[0].link;
}

export function filterContacts(data, par) {
  const filteredData = data?.filter((data) => data?.contact === par);

  return filteredData[0].address;
}
 */

export function filterData(data, par) {
  const filteredData = data?.filter((data) => data?.setting === par);
  return filteredData?.[0]?.value ?? "";
}

export function filterSocial(data, par) {
  const filteredData = data?.filter((data) => data?.platform === par);
  return filteredData?.[0]?.link ?? "";
}

export function filterContacts(data, par) {
  const filteredData = data?.filter((data) => data?.contact === par);
  return filteredData?.[0]?.address ?? "";
}
