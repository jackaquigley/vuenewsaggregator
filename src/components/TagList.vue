<template lang="html">
  <div class="tagLink">
  <h4> <router-link :to="{ name: 'tagSearch', params: { tag: this.tag }}"> {{tag}} </router-link> </h4>
  </div>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['tag']
}
</script>

<style lang="css" scoped>

.tagLink {
  background: lightgrey;
  margin: 12px;
}

</style>
