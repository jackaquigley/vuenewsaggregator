<template>
    <div class="comment">
      <p>
      <span class="username">
        {{comment.username}}
      </span>
      <span class="commentBody">
        {{comment.commentBody}}
      </span>
      </p>
    </div>
</template>
<script>

export default {
  name: "comment-list",
  props: ['comment']
}
</script>
<style lang="scss" scoped>

.comment {
  height: auto;
  margin-left: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 12px;
  width: auto;
  border: 0.2px lightblue solid;
  text-align: center;
}

.username {
  color: white;
  margin-right: 12px;
  background-color: darkblue;
  text-align: center;
}

</style>
