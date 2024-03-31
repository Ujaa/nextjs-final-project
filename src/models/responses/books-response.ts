export default interface IBooksResponse {
  readonly status: string;
  readonly copyright: string;
  readonly num_results: number;
  readonly last_modified: string;
  readonly results: IBooks;
}

interface IBooks {
  readonly list_name: string;
  readonly list_name_encoded: string;
  readonly bestsellers_date: string;
  readonly published_date: string;
  readonly published_date_description: string;
  readonly next_published_date: string;
  readonly previous_published_date: string;
  readonly display_name: string;
  readonly normal_list_ends_at: number;
  readonly updated: string;
  readonly books: IBook[];
  readonly corrections: any[];
}

interface IBook {
  readonly rank: number;
  readonly rank_last_week: number;
  readonly weeks_on_list: number;
  readonly asterisk: number;
  readonly dagger: number;
  readonly primary_isbn10: string;
  readonly primary_isbn13: string;
  readonly publisher: string;
  readonly description: string;
  readonly price: string;
  readonly title: string;
  readonly author: string;
  readonly contributor: string;
  readonly contributor_note: string;
  readonly book_image: string;
  readonly book_image_width: number;
  readonly book_image_height: number;
  readonly amazon_product_url: string;
  readonly age_group: string;
  readonly book_review_link: string;
  readonly first_chapter_link: string;
  readonly sunday_review_link: string;
  readonly article_chapter_link: string;
  readonly isbns: IIsbn[];
  readonly buy_links: IBuylink[];
  readonly book_uri: string;
}

interface IIsbn {
  readonly isbn10: string;
  readonly isbn13: string;
}

export interface IBuylink {
  readonly name: string;
  readonly url: string;
}
