import axios from "axios";

export default {
  getWishlist: function() {
    return axios.get("/api/wishlist");
  },
  // searchItems: function(input) {
  //   return axios.get("/api/google", { params: { input: "title:" + input } });
  // },

  saveWishlist: function(wishlistData) {
    return axios.post("/api/wishlist", wishlistData);
  },
  // deleteWishlist: function(id) {
  //   return axios.delete("/api/wishlist/" + id);
  // },

  authenticateUser: function(userData) {
    return axios.post('/login', userData);
  }
};
