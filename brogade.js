const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.tasks = ["docker build -t aniketdehnikar11/ myimage:10 dockerfile .",
                 "docker push aniketdehnikar11/ myimage:10"];
  build.run();
})
