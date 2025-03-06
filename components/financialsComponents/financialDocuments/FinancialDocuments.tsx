import { GoogleDriveFile } from "@/types/types";
import Link from "next/link";
import React from "react";

type FolderTypes = {
  folderName: string;
  files: GoogleDriveFile[];
};

type FinancialDocumentsProps = {
  files: FolderTypes[];
};

const Folder: React.FC<FolderTypes> = React.memo(({ folderName, files }) => (
  <div className="p-4 w-[300px] flex flex-col items-center justify-center">
    {folderName === "other documents" && (
      <h2 className="text-2xl font-bold w-fit mb-4 text-gray-500 lowercase underline">
        {folderName}
      </h2>
    )}
    <ul>
      {files.map((file) => (
        <li key={file.id} className="flex flex-row items-center justify-between">
          <Link
            className="text-cyan-500 text-lg font-bold underline hover:text-cyan-400"
            href={file.webViewLink}
            target="_blank"
            rel="noreferrer"
          >
            {file.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

Folder.displayName = "Folder";

type ListOfDocumentsProps = {
  title: string;
  folders: FolderTypes[];
};

const ListOfDocuments: React.FC<ListOfDocumentsProps> = React.memo(
  ({ title, folders }) => {
    // Reverse the folders array once, outside the render logic
    const reversedFolders = [...folders].reverse();

    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center py-4 space-y-4">
        <h1 className="text-center text-4xl font-bold text-gray-500">{title}</h1>
        <div className="flex flex-col gap-4">
          {reversedFolders.map((folder) => (
            <Folder
              key={folder.folderName}
              folderName={folder.folderName}
              files={folder.files}
            />
          ))}
        </div>
      </div>
    );
  }
);

ListOfDocuments.displayName = "ListOfDocuments";

const FinancialDocuments: React.FC<FinancialDocumentsProps> = React.memo(
  ({ files }) => {
    // Filter folders once and pass them directly
    const financialFolders = files.filter(
      (folder) => folder.folderName !== "Other Documents"
    );
    const otherFolders = files.filter(
      (folder) => folder.folderName === "Other Documents"
    );

    return (
      <div className="w-full">
        <ListOfDocuments title="Financial Documents" folders={financialFolders} />
        <ListOfDocuments title="Other Documents" folders={otherFolders} />
      </div>
    );
  }
);

FinancialDocuments.displayName = "FinancialDocuments";

export default FinancialDocuments;