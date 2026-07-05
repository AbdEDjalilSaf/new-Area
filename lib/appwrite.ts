import { Account, Client, Databases, ID, Storage } from "appwrite";

export const appwriteConfig = {
  endpoint:
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ??
    "https://fra.cloud.appwrite.io/v1",
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "6a4a9d0c00347de63b56",
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "6a4a9d8100359041ea1c",
  storageBucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID ?? "6a4a9ddf000ee1170de6",
};

export const isAppwriteConfigured = Boolean(
  appwriteConfig.endpoint && appwriteConfig.projectId,
);

export function assertAppwriteConfigured() { 
  if (!isAppwriteConfigured) {
    throw new Error( 
      "Missing Appwrite configuration. Set NEXT_PUBLIC_APPWRITE_ENDPOINT and NEXT_PUBLIC_APPWRITE_PROJECT_ID.",
    );
  }
}

export const client = new Client().setEndpoint(appwriteConfig.endpoint);

if (appwriteConfig.projectId) {
  client.setProject(appwriteConfig.projectId);
}

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };
