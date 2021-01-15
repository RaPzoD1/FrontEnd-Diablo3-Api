<template>
  <div class="home">
    <home-title/>
    <home-form/>
  </div>
</template>

<script>
import HomeForm from './HomeForm.vue'
import HomeTitle from './HomeTitle.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>
