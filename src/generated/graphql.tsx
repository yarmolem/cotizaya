import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Asesor = {
  __typename?: 'Asesor';
  Tienda?: Maybe<Tienda>;
  asesorId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AsesorInput = {
  asesorId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  tiendaId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type CambiarContrasenaInput = {
  passwordAntiguo?: Maybe<Scalars['String']>;
  passwordNuevo?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Categorias = {
  __typename?: 'Categorias';
  categoriaId?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Imagenes>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type CategoriasInput = {
  categoriaId?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
};

export type CrearCategoriaTiendaInput = {
  categoriaId?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tiendaId?: Maybe<Scalars['Int']>;
};

export type Formulario = {
  __typename?: 'Formulario';
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  formularioId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
};

export type FormularioInput = {
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  formularioId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
};

export type GetAllFormulario = {
  __typename?: 'GetAllFormulario';
  data?: Maybe<Array<Formulario>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllTiendas = {
  __typename?: 'GetAllTiendas';
  data?: Maybe<Array<Tienda>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  data?: Maybe<Array<User>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearAsesor?: Maybe<Asesor>;
  CrearCategoria?: Maybe<Categorias>;
  CrearCategoriaTienda?: Maybe<Tienda>;
  CrearFormulario?: Maybe<Formulario>;
  CrearSede?: Maybe<Sede>;
  CrearSliders?: Maybe<Slider>;
  CrearTienda?: Maybe<Tienda>;
  CrearUsuario?: Maybe<User>;
  CreateImage?: Maybe<Imagenes>;
  DeleteAsesor?: Maybe<Scalars['String']>;
  DeleteCategoria?: Maybe<Scalars['String']>;
  DeleteCategoriaTienda?: Maybe<Scalars['String']>;
  DeleteFormulario?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  DeleteSede?: Maybe<Scalars['String']>;
  DeleteSliders?: Maybe<Scalars['String']>;
  DeleteTienda?: Maybe<Scalars['String']>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  UpdateAsesor?: Maybe<Asesor>;
  UpdateCategoria?: Maybe<Categorias>;
  UpdateImage?: Maybe<Imagenes>;
  UpdateSede?: Maybe<Sede>;
  UpdateSliders?: Maybe<Slider>;
  UpdateTienda?: Maybe<Tienda>;
  UpdateUsuario?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearAsesorArgs = {
  input: AsesorInput;
};


export type MutationCrearCategoriaArgs = {
  input: CategoriasInput;
};


export type MutationCrearCategoriaTiendaArgs = {
  input: CrearCategoriaTiendaInput;
};


export type MutationCrearFormularioArgs = {
  input: FormularioInput;
};


export type MutationCrearSedeArgs = {
  input: SedeInput;
};


export type MutationCrearSlidersArgs = {
  input: SliderInput;
};


export type MutationCrearTiendaArgs = {
  input: TiendaInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: Maybe<ImagenesInput>;
};


export type MutationDeleteAsesorArgs = {
  input: AsesorInput;
};


export type MutationDeleteCategoriaArgs = {
  input: CategoriasInput;
};


export type MutationDeleteCategoriaTiendaArgs = {
  input: CrearCategoriaTiendaInput;
};


export type MutationDeleteFormularioArgs = {
  input: FormularioInput;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationDeleteSedeArgs = {
  input: SedeInput;
};


export type MutationDeleteSlidersArgs = {
  input?: Maybe<SliderInput>;
};


export type MutationDeleteTiendaArgs = {
  input: TiendaInput;
};


export type MutationDeleteUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateAsesorArgs = {
  input: AsesorInput;
};


export type MutationUpdateCategoriaArgs = {
  input: CategoriasInput;
};


export type MutationUpdateImageArgs = {
  input?: Maybe<ImagenesInput>;
};


export type MutationUpdateSedeArgs = {
  input: SedeInput;
};


export type MutationUpdateSlidersArgs = {
  input?: Maybe<SliderInput>;
};


export type MutationUpdateTiendaArgs = {
  input: TiendaInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllAsesores?: Maybe<Array<Asesor>>;
  GetAllCategorias?: Maybe<Array<Categorias>>;
  GetAllFormulario?: Maybe<GetAllFormulario>;
  GetAllSedes?: Maybe<Array<Sede>>;
  GetAllTiendas?: Maybe<GetAllTiendas>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetBusquedaAvanzada?: Maybe<GetAllTiendas>;
  GetIdSliders?: Maybe<Slider>;
  GetIdTiendas?: Maybe<Tienda>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetSliders?: Maybe<Array<Slider>>;
  GetSlugCategorias?: Maybe<Categorias>;
};


export type QueryGetAllAsesoresArgs = {
  tiendaId?: Maybe<Scalars['Int']>;
};


export type QueryGetAllFormularioArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllSedesArgs = {
  tiendaId?: Maybe<Scalars['Int']>;
};


export type QueryGetAllTiendasArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  tipoUsuario?: Maybe<Scalars['String']>;
};


export type QueryGetBusquedaAvanzadaArgs = {
  c17210od?: Maybe<Scalars['Int']>;
  categoriaId?: Maybe<Scalars['Int']>;
  cummins?: Maybe<Scalars['Int']>;
  mercedes?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  of1721?: Maybe<Scalars['Int']>;
  of1722?: Maybe<Scalars['Int']>;
  om366?: Maybe<Scalars['Int']>;
  om906?: Maybe<Scalars['Int']>;
  om924?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  volkswagen?: Maybe<Scalars['Int']>;
};


export type QueryGetIdSlidersArgs = {
  sliderId?: Maybe<Scalars['Int']>;
};


export type QueryGetIdTiendasArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCategoriasArgs = {
  slug?: Maybe<Scalars['String']>;
};

export type Sede = {
  __typename?: 'Sede';
  Tienda?: Maybe<Tienda>;
  direccion?: Maybe<Scalars['String']>;
  lugar?: Maybe<Scalars['String']>;
  sedeId?: Maybe<Scalars['Int']>;
};

export type SedeInput = {
  direccion?: Maybe<Scalars['String']>;
  lugar?: Maybe<Scalars['String']>;
  sedeId?: Maybe<Scalars['Int']>;
  tiendaId?: Maybe<Scalars['Int']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Tienda = {
  __typename?: 'Tienda';
  Asesor?: Maybe<Array<Maybe<Asesor>>>;
  Categorias?: Maybe<Array<Maybe<Categorias>>>;
  Sede?: Maybe<Array<Maybe<Sede>>>;
  banco?: Maybe<Scalars['String']>;
  c17210od?: Maybe<Scalars['Int']>;
  correo?: Maybe<Scalars['String']>;
  cummins?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Imagenes>;
  mercedes?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  of1721?: Maybe<Scalars['Int']>;
  of1722?: Maybe<Scalars['Int']>;
  om366?: Maybe<Scalars['Int']>;
  om906?: Maybe<Scalars['Int']>;
  om924?: Maybe<Scalars['Int']>;
  razonSocial?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tiendaId?: Maybe<Scalars['Int']>;
  volkswagen?: Maybe<Scalars['Int']>;
};

export type TiendaInput = {
  banco?: Maybe<Scalars['String']>;
  c17210od?: Maybe<Scalars['Int']>;
  correo?: Maybe<Scalars['String']>;
  cummins?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Scalars['Int']>;
  mercedes?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  of1721?: Maybe<Scalars['Int']>;
  of1722?: Maybe<Scalars['Int']>;
  om366?: Maybe<Scalars['Int']>;
  om906?: Maybe<Scalars['Int']>;
  om924?: Maybe<Scalars['Int']>;
  razonSocial?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tiendaId?: Maybe<Scalars['Int']>;
  volkswagen?: Maybe<Scalars['Int']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  nombre?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['ID']>;
};

export type LoginInput = {
  correo?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Slider = {
  __typename?: 'slider';
  imagenPrincipal?: Maybe<Imagenes>;
  sliderId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
};

export type SliderInput = {
  imagenPrincipal?: Maybe<Scalars['Int']>;
  sliderId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
};

export type CrearFormularioMutationVariables = Exact<{
  input: FormularioInput;
}>;


export type CrearFormularioMutation = { __typename?: 'Mutation', CrearFormulario?: Maybe<{ __typename?: 'Formulario', formularioId?: Maybe<number>, nombre?: Maybe<string>, ruc?: Maybe<string>, email?: Maybe<string>, celular?: Maybe<string> }> };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'User', userId?: Maybe<string>, nombre?: Maybe<string>, correo?: Maybe<string>, celular?: Maybe<string>, apiToken?: Maybe<string>, tipoUsuario?: Maybe<number>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, url?: Maybe<string>, descripcion?: Maybe<string> }> }> };

export type RegistroMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegistroMutation = { __typename?: 'Mutation', Registro?: Maybe<{ __typename?: 'User', userId?: Maybe<string>, nombre?: Maybe<string>, correo?: Maybe<string>, celular?: Maybe<string>, apiToken?: Maybe<string>, tipoUsuario?: Maybe<number>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }> }> };

export type GetAllCategoriasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriasQuery = { __typename?: 'Query', GetAllCategorias?: Maybe<Array<{ __typename?: 'Categorias', categoriaId?: Maybe<number>, titulo?: Maybe<string>, slug?: Maybe<string>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }> }>> };

export type GetBusquedaAvanzadaQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  volkswagen?: Maybe<Scalars['Int']>;
  mercedes?: Maybe<Scalars['Int']>;
  c17210od?: Maybe<Scalars['Int']>;
  of1722?: Maybe<Scalars['Int']>;
  of1721?: Maybe<Scalars['Int']>;
  cummins?: Maybe<Scalars['Int']>;
  om366?: Maybe<Scalars['Int']>;
  om906?: Maybe<Scalars['Int']>;
  om924?: Maybe<Scalars['Int']>;
  categoriaId?: Maybe<Scalars['Int']>;
}>;


export type GetBusquedaAvanzadaQuery = { __typename?: 'Query', GetBusquedaAvanzada?: Maybe<{ __typename?: 'GetAllTiendas', nroTotalItems?: Maybe<number>, data?: Maybe<Array<{ __typename?: 'Tienda', tiendaId?: Maybe<number>, nombre?: Maybe<string>, slug?: Maybe<string>, banco?: Maybe<string>, correo?: Maybe<string>, ruc?: Maybe<string>, razonSocial?: Maybe<string>, volkswagen?: Maybe<number>, mercedes?: Maybe<number>, c17210od?: Maybe<number>, of1722?: Maybe<number>, of1721?: Maybe<number>, cummins?: Maybe<number>, om366?: Maybe<number>, om906?: Maybe<number>, om924?: Maybe<number>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }>, Categorias?: Maybe<Array<Maybe<{ __typename?: 'Categorias', categoriaId?: Maybe<number>, titulo?: Maybe<string>, slug?: Maybe<string>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }> }>>> }>> }>, GetAllCategorias?: Maybe<Array<{ __typename?: 'Categorias', categoriaId?: Maybe<number>, titulo?: Maybe<string>, slug?: Maybe<string>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }> }>> };

export type GetIdTiendasQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetIdTiendasQuery = { __typename?: 'Query', GetIdTiendas?: Maybe<{ __typename?: 'Tienda', tiendaId?: Maybe<number>, nombre?: Maybe<string>, slug?: Maybe<string>, banco?: Maybe<string>, correo?: Maybe<string>, ruc?: Maybe<string>, razonSocial?: Maybe<string>, volkswagen?: Maybe<number>, mercedes?: Maybe<number>, c17210od?: Maybe<number>, of1722?: Maybe<number>, cummins?: Maybe<number>, om366?: Maybe<number>, om906?: Maybe<number>, om924?: Maybe<number>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }>, Asesor?: Maybe<Array<Maybe<{ __typename?: 'Asesor', asesorId?: Maybe<number>, nombre?: Maybe<string>, url?: Maybe<string> }>>>, Sede?: Maybe<Array<Maybe<{ __typename?: 'Sede', sedeId?: Maybe<number>, direccion?: Maybe<string>, lugar?: Maybe<string> }>>>, Categorias?: Maybe<Array<Maybe<{ __typename?: 'Categorias', categoriaId?: Maybe<number>, titulo?: Maybe<string>, slug?: Maybe<string>, imagenPrincipal?: Maybe<{ __typename?: 'Imagenes', id?: Maybe<string>, descripcion?: Maybe<string>, url?: Maybe<string> }> }>>> }> };


export const CrearFormularioDocument = gql`
    mutation CrearFormulario($input: FormularioInput!) {
  CrearFormulario(input: $input) {
    formularioId
    nombre
    ruc
    email
    celular
  }
}
    `;
export type CrearFormularioMutationFn = Apollo.MutationFunction<CrearFormularioMutation, CrearFormularioMutationVariables>;

/**
 * __useCrearFormularioMutation__
 *
 * To run a mutation, you first call `useCrearFormularioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearFormularioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearFormularioMutation, { data, loading, error }] = useCrearFormularioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearFormularioMutation(baseOptions?: Apollo.MutationHookOptions<CrearFormularioMutation, CrearFormularioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearFormularioMutation, CrearFormularioMutationVariables>(CrearFormularioDocument, options);
      }
export type CrearFormularioMutationHookResult = ReturnType<typeof useCrearFormularioMutation>;
export type CrearFormularioMutationResult = Apollo.MutationResult<CrearFormularioMutation>;
export type CrearFormularioMutationOptions = Apollo.BaseMutationOptions<CrearFormularioMutation, CrearFormularioMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: loginInput!) {
  login(input: $input) {
    userId
    nombre
    correo
    celular
    apiToken
    tipoUsuario
    imagenPrincipal {
      id
      url
      descripcion
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegistroDocument = gql`
    mutation Registro($input: UserInput!) {
  Registro: CrearUsuario(input: $input) {
    userId
    nombre
    correo
    celular
    apiToken
    tipoUsuario
    imagenPrincipal {
      id
      descripcion
      url
    }
  }
}
    `;
export type RegistroMutationFn = Apollo.MutationFunction<RegistroMutation, RegistroMutationVariables>;

/**
 * __useRegistroMutation__
 *
 * To run a mutation, you first call `useRegistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registroMutation, { data, loading, error }] = useRegistroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegistroMutation(baseOptions?: Apollo.MutationHookOptions<RegistroMutation, RegistroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistroMutation, RegistroMutationVariables>(RegistroDocument, options);
      }
export type RegistroMutationHookResult = ReturnType<typeof useRegistroMutation>;
export type RegistroMutationResult = Apollo.MutationResult<RegistroMutation>;
export type RegistroMutationOptions = Apollo.BaseMutationOptions<RegistroMutation, RegistroMutationVariables>;
export const GetAllCategoriasDocument = gql`
    query GetAllCategorias {
  GetAllCategorias {
    categoriaId
    titulo
    slug
    imagenPrincipal {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetAllCategoriasQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriasQuery, GetAllCategoriasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriasQuery, GetAllCategoriasQueryVariables>(GetAllCategoriasDocument, options);
      }
export function useGetAllCategoriasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriasQuery, GetAllCategoriasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriasQuery, GetAllCategoriasQueryVariables>(GetAllCategoriasDocument, options);
        }
export type GetAllCategoriasQueryHookResult = ReturnType<typeof useGetAllCategoriasQuery>;
export type GetAllCategoriasLazyQueryHookResult = ReturnType<typeof useGetAllCategoriasLazyQuery>;
export type GetAllCategoriasQueryResult = Apollo.QueryResult<GetAllCategoriasQuery, GetAllCategoriasQueryVariables>;
export const GetBusquedaAvanzadaDocument = gql`
    query GetBusquedaAvanzada($page: Int, $numberPaginate: Int, $volkswagen: Int, $mercedes: Int, $c17210od: Int, $of1722: Int, $of1721: Int, $cummins: Int, $om366: Int, $om906: Int, $om924: Int, $categoriaId: Int) {
  GetBusquedaAvanzada(
    page: $page
    numberPaginate: $numberPaginate
    volkswagen: $volkswagen
    mercedes: $mercedes
    c17210od: $c17210od
    of1722: $of1722
    of1721: $of1721
    cummins: $cummins
    om366: $om366
    om906: $om906
    om924: $om924
    categoriaId: $categoriaId
  ) {
    nroTotalItems
    data {
      tiendaId
      nombre
      slug
      imagenPrincipal {
        id
        descripcion
        url
      }
      banco
      correo
      ruc
      razonSocial
      volkswagen
      mercedes
      c17210od
      of1722
      of1721
      cummins
      om366
      om906
      om924
      Categorias {
        categoriaId
        titulo
        slug
        imagenPrincipal {
          id
          descripcion
          url
        }
      }
    }
  }
  GetAllCategorias {
    categoriaId
    titulo
    slug
    imagenPrincipal {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetBusquedaAvanzadaQuery__
 *
 * To run a query within a React component, call `useGetBusquedaAvanzadaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusquedaAvanzadaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusquedaAvanzadaQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *      volkswagen: // value for 'volkswagen'
 *      mercedes: // value for 'mercedes'
 *      c17210od: // value for 'c17210od'
 *      of1722: // value for 'of1722'
 *      of1721: // value for 'of1721'
 *      cummins: // value for 'cummins'
 *      om366: // value for 'om366'
 *      om906: // value for 'om906'
 *      om924: // value for 'om924'
 *      categoriaId: // value for 'categoriaId'
 *   },
 * });
 */
export function useGetBusquedaAvanzadaQuery(baseOptions?: Apollo.QueryHookOptions<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>(GetBusquedaAvanzadaDocument, options);
      }
export function useGetBusquedaAvanzadaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>(GetBusquedaAvanzadaDocument, options);
        }
export type GetBusquedaAvanzadaQueryHookResult = ReturnType<typeof useGetBusquedaAvanzadaQuery>;
export type GetBusquedaAvanzadaLazyQueryHookResult = ReturnType<typeof useGetBusquedaAvanzadaLazyQuery>;
export type GetBusquedaAvanzadaQueryResult = Apollo.QueryResult<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>;
export const GetIdTiendasDocument = gql`
    query GetIdTiendas($slug: String) {
  GetIdTiendas(slug: $slug) {
    tiendaId
    nombre
    slug
    imagenPrincipal {
      id
      descripcion
      url
    }
    banco
    correo
    ruc
    razonSocial
    volkswagen
    mercedes
    c17210od
    of1722
    cummins
    om366
    om906
    om924
    Asesor {
      asesorId
      nombre
      url
    }
    Sede {
      sedeId
      direccion
      lugar
    }
    Categorias {
      categoriaId
      titulo
      slug
      imagenPrincipal {
        id
        descripcion
        url
      }
    }
  }
}
    `;

/**
 * __useGetIdTiendasQuery__
 *
 * To run a query within a React component, call `useGetIdTiendasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdTiendasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdTiendasQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetIdTiendasQuery(baseOptions?: Apollo.QueryHookOptions<GetIdTiendasQuery, GetIdTiendasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIdTiendasQuery, GetIdTiendasQueryVariables>(GetIdTiendasDocument, options);
      }
export function useGetIdTiendasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIdTiendasQuery, GetIdTiendasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIdTiendasQuery, GetIdTiendasQueryVariables>(GetIdTiendasDocument, options);
        }
export type GetIdTiendasQueryHookResult = ReturnType<typeof useGetIdTiendasQuery>;
export type GetIdTiendasLazyQueryHookResult = ReturnType<typeof useGetIdTiendasLazyQuery>;
export type GetIdTiendasQueryResult = Apollo.QueryResult<GetIdTiendasQuery, GetIdTiendasQueryVariables>;