export default interface IBestSellerResponse {
  readonly status: string;
  readonly copyright: string;
  readonly num_results: number;
  readonly results: IBestSeller[];
}

interface IBestSeller {
  readonly list_name: string;
  readonly display_name: string;
  readonly list_name_encoded: string;
  readonly oldest_published_date: string;
  readonly newest_published_date: string;
  readonly updated: string;
}
