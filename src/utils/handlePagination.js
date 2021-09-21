export const handlePagination = (nroItems, elementsPerPage = 10) => {
  const totalpages = nroItems / elementsPerPage
  const isInt = Number.isInteger(totalpages)
  const formatInt = isInt ? totalpages : Math.floor(totalpages) + 1
  return nroItems > elementsPerPage ? formatInt : 1
}
