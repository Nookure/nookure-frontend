<template>
  <div class="main">
    <h1 class="center">Server Dump</h1>
    <div class="parent">
      <div class="info">
        <h4>Server Info</h4>
        <span><b>Plugin name: </b>{{ pluginName }}</span>
        <span><b>Plugin version: </b>{{ version }}</span>
        <span><b>Server Software</b> {{ serverVersion }}</span>
        <span><b>Java Version</b> {{ javaVersion }}</span>
      </div>
    </div>
    <!-- <div class="parent">
      <div class="info">
        <h4 class="left">Config</h4>
        <Spoiler title="View it">
          {{ config }}
        </Spoiler>
      </div>
    </div> -->

    <div class="parent">
      <div class="info">
        <h4>Git Info</h4>
          <span><b>Commit: </b>{{ gitCommit }}</span>
          <span><b>Commit user: </b> {{ gitUser }}</span>
          <span><b>Branch: </b> {{ gitBranch }}</span>
          <span><b>Build time: </b> {{ buildTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dump",
  data() {
    return {
      invalid: false,
      pasteID: "",
      
      pluginName: "Loading...",
      version: "Loading...",
      serverVersion: "Loading...",
      javaVersion: "Loading...",
      plugins: ["MAStaff", "MAStaffChat"],

      config: "Loading...",

      gitUser: "Loading...",
      gitBranch: "Loading...", 
      gitCommit: "Loading...",
      buildTime: "Loading..."
    };
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onload() {
      this.loadData();
    },

    async loadData() {
      this.pasteID = this.$route.params.id
      if (!this.pasteID) {
        this.invalid = true
        console.log("Invalid paste id")
        console.log(this.pasteID)
        return;
      }
      try {
        const { data } = await axios.get(`https://api.paste.gg/v1/pastes/${this.pasteID}?full=true`)
        data.result.files.forEach(file => {
          if(!(file.name == "dump")) return;
          const dump = JSON.parse(file.content.value)

          console.log(dump)

          this.version = dump.version
          this.serverVersion = dump.serverVersion
          this.javaVersion = dump.javaVersion
          this.gitBranch = dump.git.branch
          this.gitCommit = dump.git.commit
          this.gitUser = dump.git.user
          this.buildTime = dump.git.buildTime
          this.pluginName = dump.pluginName
          
        })
        console.log(data)

        this.loaded = true
      } catch (e) {
        console.log(e)
        this.error = e.response ? e.response.data : e.message
      }
    }
  
  },
  components: {
  },
  computed: {
    pasteId() {
      return this.$route.hash ? this.$route.hash.substring(1) : this.$route.query.id;
    },
    originalUrl() {
      return `https://paste.gg/p/anonymous/${this.pasteId}`;
    },
  }
  
};
</script>

<style scoped>
@import "./../assets/css/dump.css";
</style>
