import axios from "axios";

export default {
  getWishlist: function() {
    return axios.get("/api/wishlist");
  },
  searchItems: function(input) {
    return axios.get("/api/google", { params: { input: "title:" + input } });
  },
  // Gets all saved gifts
  getSavedGifts: function() {
    return axios.get("/api/gifts");
  },
  deleteGift: function(id) {
    return axios.delete("/api/gifts/" + id);
  },
  saveGift: function(bookData) {
    return axios.post("/api/gifts", bookData);
  },
  authenticateUser: function(userData) {
    return axios.post('/login', userData);
  }
};
