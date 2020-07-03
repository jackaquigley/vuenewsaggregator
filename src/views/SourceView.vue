<template>
  <div id="">
    <comment-view />
  </div>
</template>
<script>
import CommentView from './CommentView.vue'

export default {
  name: "source-view",
  data() {
    return {
      sources: [],
      publishers: []
    }
  },
  components: {
    'comment-view': CommentView
  },
  created() {
    fetch('http://localhost:8080/api/sources')
    .then(response => response.json())
    .then(data => this.sources = data)
    fetch('http://localhost:8080/api/publishers')
    .then(response => response.json())
    .then(data => this.publishers = data)
  }
}

</script>
<style lang="scss" scoped>
</style>
