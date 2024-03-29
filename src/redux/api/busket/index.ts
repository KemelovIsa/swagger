import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBusket: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: () => ({
				url: '/products/basket',
				method: 'GET'
			}),
			providesTags: ['busket']
		}),

		busketPatch: build.mutation({
			query: (id) => ({
				url: `/products/basket/${id}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['busket']
		})
	})
});
export const { useGetBusketQuery, useBusketPatchMutation } = api;
