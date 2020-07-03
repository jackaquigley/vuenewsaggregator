<template>
  <div id="">
    <p>Test.</p>
  </div>
</template>
<script>
export default {
  name: "comment-view",
  data() {
    return {
     comments: []
   }
 },
 components: {

 },
 created(){
   fetch('http://localhost:8080/api/sources')
   .then(response => response.json())
   .then(data => this.comments = data)
  }
}
</script>
<style lang="scss" scoped>
</style>
