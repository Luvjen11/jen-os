import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    const notes = response.results.map((page) => {
      const props = page.properties;

      return {
        id: page.id,
        title: props.Title?.title?.[0]?.plain_text || "",
        date: props.Date?.date?.start || "",
        category: props.Category?.select?.name || "Other",
        content:
          props.Content?.rich_text?.map((x) => x.plain_text).join("") || "",
        imageUrl:
          props.Image?.files?.[0]?.file?.url ||
          props.Image?.files?.[0]?.external?.url ||
          null,
      };
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(notes);
  } catch (error) {
    console.error("Notion API error:", error);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(500).json({ error: "Failed to fetch Jen dev notes" });
  }
}