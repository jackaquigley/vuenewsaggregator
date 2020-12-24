<template lang="html">
  <div class="tagLink">
  <h4>{{tag}}</h4>
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
