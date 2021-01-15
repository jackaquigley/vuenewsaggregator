<template lang="html">
  <div class="storyPage">
    <div class="storyTitle">
      <h2> <router-link :to="{ name: 'story'}"> {{story.title}} </router-link> </h2>
    </div>
    <div v-for="(source, index) in story.sources" :key="index" :source="source" class="storyPageSourceList">
      <article>
      <div class="sourceItem">
        <div class="sourceData">
          <div class="sourceTitle">
            <p>{{source.sourceTitle}}</p>
          </div>
          <div class="sourceJournalist">
            <p>{{source.journalist}}</p>
          </div>
          <div class="sourcePublisherName">
            <p>{{source.publisher}}</p>
          </div>
          <div class="sourceLink">
            <a v-bind:href="source.sourceLink">View Article</a>
          </div>
          <div class="sourceRating">
            <p>Rating: {{source.rating}}</p>
          </div>
          <div class="upvoteDownvote">
            <button v-on:click.prevent="upvote(source)">Upvote</button>
            <button v-on:click.prevent="downvote(source)">Downvote</button>
          </div>
        </div>
      <div class="sourceImgWrapper">
        <img class="sourceImg" v-bind:src="source.sourceImg" alt="">
      </div>
      </div>
      <div class="articleSample">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div v-for="(comment, index) in source.comments" :key="index" :commeny="comment">
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
      </div>
    </article>
  </div>
</div>
</template>

<script>
  export default {
    name: 'story-page',
    props: ['story', 'comment']
  }

</script>

<style lang="css">

</style>
