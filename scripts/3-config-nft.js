import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x65b3C7Ad15047AfC989A96D0C8234C5b90238030",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Lucky four-leaf clover",
        description: "This NFT will give you access to LeprechaunDAO!",
        image: readFileSync("scripts/assets/four-leaf-clover.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()