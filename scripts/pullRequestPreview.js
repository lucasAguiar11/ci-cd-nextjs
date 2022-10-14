import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW] Starting deploy preview script");

const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });

console.log("[DEPLOY_PREVIEW] Finished deploy preview script");

console.log(output);
