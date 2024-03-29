import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFavorite: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: () => ({
				url: '/products/favorite',
				method: 'GET'
			}),
			providesTags: ['favorite']
		}),

		favoritePatch: build.mutation({
			query: (id) => ({
				url: `/products/favorite/${id}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['favorite']
		})
	})
});
export const { useGetFavoriteQuery, useFavoritePatchMutation } = api;
