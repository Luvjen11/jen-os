export default async function handler(req, res) {
    const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;
  
    if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
      res.status(500).json({ error: "Missing NOTION_API_KEY or NOTION_DATABASE_ID" });
      return;
    }
  
    try {
      const notionRes = await fetch(
        `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28", 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), 
        }
      );
  
      const data = await notionRes.json();
  
      if (!notionRes.ok) {
        console.error("Notion error response:", data);
        res.status(500).json({
          error: "Failed to fetch from Notion",
          details: data,
        });
        return;
      }
  
      const notes = (data.results || []).map((page) => {
        const props = page.properties || {};
  
        const title =
          props.Title?.title?.[0]?.plain_text || "";
  
        const date =
          props.Date?.date?.start || "";
  
        const category =
          props.Category?.select?.name || "Other";
  
        const content =
          (props.Content?.rich_text || [])
            .map((x) => x.plain_text)
            .join("") || "";
  
        const files = props.Image?.files || [];
        let imageUrl = null;
        if (files[0]) {
          imageUrl = files[0].file?.url || files[0].external?.url || null;
        }
  
        return {
          id: page.id,
          title,
          date,
          category,
          content,
          imageUrl,
        };
      });
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(notes);
    } catch (error) {
      console.error("Server error:", error);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(500).json({
        error: "Unexpected server error",
        message: error.message || null,
      });
    }
  }