const storyUrl = "http://localhost:8080/api/stories/";
const sourceUrl = "http://localhost:8080/api/sources/";
const commentUrl = "http://localhost:8080/api/comments";
const tagUrl = "http://localhost:8080/api/tags";

export default {
  getStories(){
    return fetch(storyUrl)
    .then(res => res.json());
  },
  getStoryById(id){
    return fetch(storyUrl + id)
    .then(res => res.json());
  },
  getStoriesByTag(tag){
    return fetch(storyUrl + 'tagSearch/' + tag)
    .then(res => res.json());
  },
  getSources(){
    return fetch(sourceUrl)
    .then(res => res.json());
  },
  getTags(){
    return fetch(tagUrl)
    .then(res => res.json());
  },
  getComments(){
    return fetch(commentUrl)
    .then(res => res.json());
  },
  postComment(payload){
    return fetch(commentUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  updateSource(id, payload){
    return fetch(sourceUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
