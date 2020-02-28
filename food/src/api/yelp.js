/* eslint-disable max-len */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DpidIPzPsc0QjW1172NN2WBe-ekFcG5X4QNGoSmqygOtPOVerNQtdMAE2iec7xr24pS4Zw9QKBjn4C0W69XRNeftWzxSZaLU18yvesQBesvlmHoBzc9Fi58NXgJWXnYx'
  }
});
