import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: () => ({
				url: '/products/get',
				method: 'GET'
			}),
			providesTags: ['product']
		}),

		postProduct: build.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: (newData) => ({
				url: '/products/create',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['product']
		})
	})
});
export const { useGetProductsQuery, usePostProductMutation } = api;
