import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const drive = google.drive({ version: "v3", auth });

    const folderResponse = await drive.files.list({
      q: "'11JIdhvvpGF3cTWjomHuS02eH8ZZ8zCOt' in parents",
      fields: "files(id, name, webViewLink, mimeType, parents)",
    });

    if (!folderResponse.data.files || folderResponse.data.files.length === 0) {
      return NextResponse.json({ error: "No folders found", success: false }, { status: 404 });
    }

    const folders = folderResponse.data.files;

    // Step 2: Fetch files from each folder
    const filesWithFolderInfo = await Promise.all(
      folders.map(async (folder) => {
        const fileResponse = await drive.files.list({
          q: `'${folder.id}' in parents`, // Fetch files inside this folder
          fields: "files(id, name, webViewLink, mimeType)",
        });

        if (!fileResponse.data.files || fileResponse.data.files.length === 0) {
          return [];
        }

        // Add folder information to each file
        return fileResponse.data.files.map((file) => ({
          ...file,
          folderId: folder.id,
          folderName: folder.name,
        }));
      })
    );

    // Step 3: Flatten the array of arrays into a single array
    const allFiles = filesWithFolderInfo.flat();

    return NextResponse.json({data: allFiles, success: true}, {status: 200});
  } catch (error) {
    console.error("Google Drive API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents. Please try again later.", success: false },
      { status: 500 }
    );
  }
}
