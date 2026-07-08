import { databases, ID, Query, DATABASE_ID, ARTICLES_COLLECTION_ID } from "./appwrite";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
// This assumes your Appwrite collection ("table-a") has these attributes.
// Rename the keys below (left side stays the same in the app; only touch the
// string values if your Appwrite attribute IDs differ) to match your console:
//   title    -> string
//   content  -> string   (body of the article, shown in the details view)
//   status   -> string   ("Draft" | "Published")
//   views    -> integer
// Appwrite also auto-adds: $id, $createdAt, $updatedAt
// ---------------------------------------------------------------------------

export type ArticleStatus = "Published" | "Draft";

export type Article = {
  $id: string;
  title: string;
  content: string;
  featured_image?: string;
  $createdAt?: string;
  $updatedAt?: string;
};

export type ArticleInput = {
  title: string;
  content: string;
  featured_image?: string;
};

// ---------------------------------------------------------------------------
// CRUD
// ---------------------------------------------------------------------------

export async function listArticles(searchTerm?: string): Promise<Article[]> {
  const queries = [Query.orderDesc("$createdAt"), Query.limit(100)];
  if (searchTerm) queries.push(Query.search("title", searchTerm));

  const res = await databases.listDocuments(DATABASE_ID, ARTICLES_COLLECTION_ID, queries);
  return res.documents as unknown as Article[];
}

export async function getArticle(id: string): Promise<Article> {
  const doc = await databases.getDocument(DATABASE_ID, ARTICLES_COLLECTION_ID, id);
  return doc as unknown as Article;
}

export async function createArticle(data: ArticleInput): Promise<Article> {
  const doc = await databases.createDocument(DATABASE_ID, ARTICLES_COLLECTION_ID, ID.unique(), {
    ...data,
  });
  return doc as unknown as Article;
}

export async function updateArticle(id: string, data: Partial<ArticleInput>): Promise<Article> {
  const doc = await databases.updateDocument(DATABASE_ID, ARTICLES_COLLECTION_ID, id, data);
  return doc as unknown as Article;
}

export async function deleteArticle(id: string): Promise<void> {
  await databases.deleteDocument(DATABASE_ID, ARTICLES_COLLECTION_ID, id);
}