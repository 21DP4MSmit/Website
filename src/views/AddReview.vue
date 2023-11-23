<template>
    <div>
      <h2>Item Review</h2>
  
      <div>
        <input v-model="reviewTitle" placeholder="Review Item" name="reviewTitle" />

      </div>
      
      <div>
        <label for="reviewImage">Upload an image:</label>
        <input type="file" id="reviewImage" ref="reviewImage" @change="handleImageUpload">
     </div>

      <div>
        <textarea v-model="reviewText" placeholder="Write your review here..." name="reviewText"></textarea>
      </div>
  
      <div>
        <label>Rating: </label>
        <select v-model="rating" name="Rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
  
      <button @click="submitReview">Submit Review</button>
  
      <div v-if="reviews.length">
        <h3>Reviews:</h3>
        <ul>
    <li v-for="(review, index) in reviews" :key="index">
      <strong>{{ review.title }}:</strong> 
      {{ review.text }} - {{ review.rating }}/5
      <div v-if="review.image">
        <img :src="review.image" alt="Review Image" style="max-width: 200px; margin-top: 10px;">
      </div>
    </li>
  </ul>
      </div>
    </div>
  </template>
  
  <script>
export default {
  props: ['reviews'],
  data() {
    return {
      reviewTitle: "",
      reviewText: "",
      rating: "5",
      reviewImage: null
    };
  },
  methods: {

    handleImageUpload() {
      const fileInput = this.$refs.reviewImage;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          this.reviewImage = reader.result;
        };
      }
    },


    submitReview() {
    const review = {
      title: this.reviewTitle,
      text: this.reviewText,
      rating: this.rating,
      image: this.reviewImage
    };

    this.$emit('submit-review', review);

    // Reset form fields after submission
    this.reviewTitle = "";
    this.reviewText = "";
    this.rating = "5";
    this.reviewImage = null;
  }
    
  }
};

</script>

  

 <style scoped>
/* Styles for the ItemReview component */
div {
  padding: 30px;
  max-width: 700px;
  margin: 50px auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.8em;
}

input, textarea, select {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

li {
  background-color: #f8f8f8;
  padding: 15px;
  margin: 15px 0;
  border-left: 5px solid #4CAF50;
  border-radius: 4px;
}
</style>

  