<script lang='ts'>
    export let data: any;
</script>

<div id="slide1" class="carousel-item relative w-full">
    <img src={data.url} class="w-full  object-contain" alt={data}/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 