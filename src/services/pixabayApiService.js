class PixabayApiService {
  constructor() {
    this.KEY = '19068894-e9cb15528dc45abc7c2ac08cf';
    this.perPage = 12;
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  getFullUrl = (searchStr, pageNumber) =>
    `${this.BASE_URL}?q=${searchStr}&page=${pageNumber}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`;

  getPhotos = (searchStr, page) => {
    return fetch(this.getFullUrl(searchStr, page)).then(resp => {
      if (resp.ok) return resp.json();
      return Promise.reject(new Error(resp.Error));
    });
  };
}

export default PixabayApiService;
