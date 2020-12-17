import React, { Component } from 'react';
import PixabayApiService from './services/pixabayApiService';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import './App.css';

const INITIAL_STATE = {
  status: 'idle',
  images: [],
  searchValue: '',
  page: 1,
  error: false,
};

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
};

class App extends Component {
  constructor() {
    super();
    this.pixabayApiService = new PixabayApiService();
    this.state = { ...INITIAL_STATE };
  }

  handleSearchFormSubmit = str => {
    this.setState(
      { searchValue: str, status: STATUS.loading, page: 1, images: [] },
      this.fetchImages,
    );
  };

  resetPage() {
    this.setState({ page: 1 });
  }

  fetchImages() {
    const { searchValue, page } = this.state;

    this.pixabayApiService
      .getPhotos(searchValue, page)
      .then(data => {
        const images = data.hits.map(hit => {
          const { id, webformatURL, largeImageURL } = hit;
          return { id, webformatURL, largeImageURL };
        });

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            status: STATUS.loaded,
            page: prevState.page + 1,
          };
        });
      })
      .catch(error => this.setState({ error: true, status: STATUS.failed }));
  }

  handleLoadMoreClick = () => {
    this.setState({ status: STATUS.loading }, this.fetchImages);
  };

  render() {
    const { images, status } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery images={images} />
        {images.length !== 0 && (
          <Button onButtonClick={this.handleLoadMoreClick} />
        )}
        {status === STATUS.loading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
export default App;
