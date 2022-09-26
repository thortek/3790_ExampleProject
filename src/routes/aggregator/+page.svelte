<script>
  export let data, errors
  $: console.log(data.newsData)

  let storyContent = ''

  function getStory(story) {
    storyContent = story.description
  }
</script>

<div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
      <div class="hero bg-base-200">
        <p>{storyContent}</p>
      </div>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
<!--         {#each data.newsData as story (story.uuid) }
        <li class="card" on:click={getStory(story)}>
          <figure class="flex flex-col">
            <img src={story.image_url} alt="Story pic"/>
            <figcaption>{story.title}</figcaption>
          </figure>
        </li>
        {/each} -->
      </ul>
    
    </div>
  </div>