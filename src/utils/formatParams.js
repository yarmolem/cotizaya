export const formatParams = (params) => ({
  page: 1,
  numberPaginate: 10,
  volkswagen: params.marca === 'Volkswagen' ? 1 : null,
  mercedes: params.marca === 'Mercedes Benz' ? 1 : null,
  c17210od: params.modelo === '17-210 OD' ? 1 : null,
  of1722: params.modelo === 'OF 1722' ? 1 : null,
  of1721: params.modelo === 'OF 1721' ? 1 : null,
  cummins: params.motor === 'Cummins Serie B-GAS' ? 1 : null,
  om366: params.motor === 'OM 366 LA' ? 1 : null,
  om906: params.motor === 'OM 906' ? 1 : null,
  om924: params.motor === 'OM 924 LA' ? 1 : null,
  categoriaId: params.id ?? null
})
