import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getHistory: build.query<
			HISTORY.GetHistoryResponse,
			HISTORY.GetHistoryRequest
		>({
			query: () => ({
				url: '/purchases/history',
				method: 'GET'
			}),
			providesTags: ['buy']
		}),
		patchProduct: build.mutation<
			HISTORY.PatchHistoryResponse,
			HISTORY.PatchHistoryRequest
		>({
			query: ({ newData, id }) => ({
				url: `/purchases/product/${id}`,
				method: 'PATCH',
				body: newData
			}),
			invalidatesTags: ['buy']
		})
	})
});

export const { usePatchProductMutation, useGetHistoryQuery } = api;
