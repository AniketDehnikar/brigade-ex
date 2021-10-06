const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.image = "docker:dind"
  build.tasks = ["docker build -t aniketdehnikar11/ myimage:10 dockerfile ."];
  build.run();
})
