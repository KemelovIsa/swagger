/* eslint-disable @typescript-eslint/no-unused-vars */
namespace HISTORY {
	type GetHistoryResponse = {
		success: boolean;
		results: Result[];
	};
	type Result = {
        id: Key | null | undefined;
        title: ReactNode;
		buyer: Buyer;
		product: Product;
	};
	type Product = {
		title: string;
		photo: string;
		price: number;
		totalPrice: number;
		quantity: number;
	};
	type Buyer = {
		name: string;
		login: string;
		photo: string;
		buyAt: string;
	};
	type GetHistoryRequest = void;
	type PatchHistoryResponse = {
		success: boolean;
		results: Result[];
	};
	type PatchHistoryRequest = {
		id: number;
		newData: {
			buyQuantity: number;
		};
	};
}
