<template>
  <div class="card">

    <div class="card-border-top"></div>
    <div class="img" :style="{'--image': 'url(' + imageLink + ')'}"></div>
    <span>{{ cardTitle }}</span>
    <p class="job">{{ description }}</p>
    <a v-bind:href="clickLink" target="_blank">{{ linkMessage }}</a> 
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardTitle: String,  
    description: String,
    image: String,
    clickLink: String,
    linkMessage: String,
    // background: String,
    // secondBackground: String,
    // shadow: String,
  },
  data()  {
    return {
        
        imageLink: this.image,
    }
  }
};
</script>

<style scoped>
.card {
 width: 240px;
 height: 320px;
 background: #3405a3;
 border-radius: 15px;
 box-shadow: 1px 5px 60px 0px #100a886b;
}

.card .card-border-top {
 width: 65%;
 height: 3%;
 background: #6b64f3;
 margin: auto;
 margin-top: 0;
 border-radius: 0px 0px 15px 15px;
}

.card span {
 font-weight: 600;
 color: white;
 text-align: center;
 display: block;
 padding-top: 10px;
 font-size: 16px;
}

.card .job {
 font-weight: 400;
 color: white;
 display: block;
 text-align: center;
 padding-top: 3px;
 font-size: 12px;
 margin-left: 10px;
}

.card .img {
 width: 70px;
 height: 80px;
 background-image: var(--image);
 background-size: contain;
 border-radius: 15px;
 margin: auto;
 margin-top: 25px;
}

.card a {
 padding: 8px 25px;
 display: block;
 margin: auto;
 border-radius: 8px;
 border: none;
 margin-top: 30px;
 background: #6b64f3;
 color: white;
 font-weight: 600;
 text-decoration: none;
}

.card a:hover {
 background: #534bf3;
 transition: all 0.3s ease-in-out;
}
</style>