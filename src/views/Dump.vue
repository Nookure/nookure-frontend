<template>
  <div class="main">
    <h1 class="center">Server Dump</h1>
    <div class="parent">
      <div class="info">
        <span><b>Plugin version: </b>{{ version }}</span>
        <span><b>Server Software</b> {{ serverVersion }}</span>
        <span><b>Java Version</b> {{ javaVersion }}</span>
      </div>
    </div>
    <div class="parent">
      <div class="info">
        <h4 class="left">Config</h4>
        <Spoiler title="View it">
          {{ config }}
        </Spoiler>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dump",
  data() {
    return {
      version: "2.0.0-BETA",
      serverVersion: "NookSpigot",
      javaVersion: "Java 16",
      plugins: ["MAStaff", "MAStaffChat"],

      config: "Your config file"
    };
  },
  methods: {},
  components: {
  },
};
</script>

<style scoped>
@import "./../assets/css/dump.css";
</style>
