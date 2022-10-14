import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW] Starting deploy preview script");

const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });

const outputLines = output.split('\n')
const DEPLOY_URL = outputLines[outputLines.length - 1]

console.log("[DEPLOY_PREVIEW] Finished deploy preview script");

console.log(`[DEPLOY_PREVIEW] Deploy URL: ${DEPLOY_URL}`);
