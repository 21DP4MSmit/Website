<template>
  <div>
    <h2>All Reviews</h2>

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
</template>

  
  <script>
export const reviewsData = [
  
];

export default {
  props: ['reviews']
}

</script>
