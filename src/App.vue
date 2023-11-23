<template>
  <div>
    <h1>Item Reviews</h1>
    <nav>
      <router-link to="/add-review">Add Review</router-link> |
      <router-link to="/all-reviews">View All Reviews</router-link>
    </nav>
    <router-view @submit-review="addReview" :reviews="reviews"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: []
    };
  },
  methods: {
  addReview(newReview) {
    this.reviews.push(newReview);
  }
}
};
</script>
 
<style>
/* Global styles for the app*/
body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
  color: #333;
}

h1 {
  text-align: center;
  padding: 50px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 2.5em;
  letter-spacing: 2px;
}

nav {
  background-color: #282c34;
  text-align: center;
  padding: 15px 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

nav a {
  color: #4CAF50;
  text-decoration: none;
  font-size: 1.2em;
  padding: 10px 25px;
  margin: 0 10px;
  border-radius: 4px; 
  transition: all 0.3s ease-in-out;
}

nav a:hover, .router-link-active {
  background-color: #4CAF50; 
  color: #282c34;
  transform: scale(1.05);
}

nav a {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
