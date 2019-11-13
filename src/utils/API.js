import axios from "axios";

export default {
  getGifts: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved gifts
  getSavedGifts: function() {
    return axios.get("/api/giftss");
  },
  deleteGift: function(id) {
    return axios.delete("/api/gifts/" + id);
  },
  saveGift: function(bookData) {
    return axios.post("/api/gifts", bookData);
  }
};
