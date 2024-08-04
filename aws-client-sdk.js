import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { REGION } from "./const.js";

const snsClient = new SNSClient({ region: REGION });
export { snsClient, PublishCommand };
