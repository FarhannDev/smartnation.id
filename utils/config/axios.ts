import axios from 'axios';

export default axios.create({
  baseURL: 'https://smartnation.id/wp-json/wp/v2',
});
