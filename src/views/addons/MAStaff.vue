<template>
  <div>
    <h1 class="intro">Welcome to MAStaff Addons page</h1>
    <div class="addons">
      <Card
        cardTitle="Discord Addon"
        description="With this addon you can hook your discord server with mastaff"
        image="https://play-lh.googleusercontent.com/s7SUyvveKqEgpwVz74VDeQWGGhob_Vyj9_ubJGwUPvAXpPe4xAJeZ0l3pF2F7njB_NYM"
        clickLink="https://github.com/Nookure/MAStaffAddons/releases"
        linkMessage="Download"
      ></Card>
    </div>
  </div>
</template>
<script>
import Card from "../../components/Card.vue";
export default {
  name: "MAStaff",
  components: {
    Card,
  },
};
</script>
<style scoped>
.title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-top: 10rem;
}

.intro {
  margin-top: 10rem;
  text-align: center;
}

.addons {
    display: table;
    margin: auto;
}
</style>
