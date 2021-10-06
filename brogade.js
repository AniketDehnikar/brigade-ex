
const projectName = "brigade";
const dockerhubUsername= "aniketdehnikar11";

const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
 var job = new Job("AniketDehnikar/brigade", "docker:stable-dind");
  job.privileged = true;
  job.tasks = [
    "apk add --update --no-cache make git",
    "dockerd-entrypoint.sh &",
    "sleep 20",
    "cd /src",
    `docker login ${dockerRegistry} -u ${dockerhubUsername} -p ${dockerhubPassword}`,
    `DOCKER_REGISTRY=${aniketdehnikar11/aniket} DOCKER_ORG=${dockerOrg} VERSION=${20.10.7} make build-all-images push-all-images`,
    `docker logout ${aniketdehnikar11/aniket}`
    
    ]
  build.job();
})
