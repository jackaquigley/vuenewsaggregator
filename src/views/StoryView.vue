<template>
  <div id="">
    <source-view />
  </div>
</template>
<script>
import SourceView from './SourceView.vue'

export default {
  name: 'story-view',
  data() {
    return {
      stories: []
    }
  },
  components: {
    'source-view': SourceView
  },
  created() {
    fetch('http://localhost:8080/api/stories/')
    .then(response => response.json())
    .then(data => this.stories = data)
}
}
</script>
<style lang="scss" scoped>
</style>
