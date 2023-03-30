import { GraphQLClient } from "graphql-request";
// import { useStore } from "@builder.io/qwik";
import { print } from "graphql";
import type { Requester } from "./__generated/sdk";
import { getSdk as getSdkWithClient } from "./__generated/sdk";
import * as dotenv from "dotenv";
dotenv.config();

const requester: Requester<any> = async (doc: any, vars: any) => {
  const CAISY_PROJECT_ID = process.env.CAISY_PROJECT_ID;
  const CAISY_API_KEY = process.env.CAISY_API_KEY;
  const NODE_ENV = process.env.NODE_ENV;
  if (!CAISY_PROJECT_ID || CAISY_PROJECT_ID == "") {
    throw new Error(
      "CAISY_PROJECT_ID is not defined - please add it to the env file"
    );
  }
  if (!CAISY_API_KEY || CAISY_API_KEY == "") {
    throw new Error(
      "CAISY_API_KEY is not defined - please add it to the env file"
    );
  }

  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${CAISY_PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": `${CAISY_API_KEY}`,
      },
    }
  );

  try {
    const res = await client.rawRequest(print(doc), vars);
    return res?.data as any;
  } catch (err: any) {
    if (NODE_ENV == "development") {
      console.error(
        "Error in GraphQL request:",
        "\n" + print(doc) + "\n",
        vars,
        "\n" + err.message
      );
    } else {
      console.error(err);
    }
  }
};

export const caisySDK = getSdkWithClient(requester);
