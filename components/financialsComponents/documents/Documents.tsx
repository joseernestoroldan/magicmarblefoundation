import { fetchFiles } from "@/lib/apiCalls";
import { GroupedFiles } from "@/types/types";
import Link from "next/link";

const Documents = async () => {
  const files = await fetchFiles();
  const data = files.data;

  // Reorganize the array by folderName
  const groupedFiles = data.reduce((acc: { [key: string]: any[] }, file) => {
    const { folderName } = file;

    // If the folderName doesn't exist in the accumulator, create a new array for it
    if (!acc[folderName]) {
      acc[folderName] = [];
    }

    // Push the file into the corresponding folderName array
    acc[folderName].push(file);

    return acc;
  }, {});

  // Convert the grouped object into an array of arrays
  const result: GroupedFiles[] = Object.keys(groupedFiles).map(
    (folderName) => ({
      folderName,
      files: groupedFiles[folderName],
    })
  );

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center py-4 space-y-4">
      <h1 className="text-center text-4xl font-bold text-gray-500">
        Financials Documents
      </h1>
      <div className="flex flex-row flex-wrap gap-4">
        {result.map((folder) => {
          console.log(folder.folderName)
          console.log(folder.files)
          if (folder.folderName !== "Other Documents") {
            return (
              <div
                key={folder.folderName}
                className="p-4 w-[300px] flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold w-fit mb-4 text-gray-500 lowercase">
                  {folder.folderName}
                </h2>
                <ul className="">
                  {folder.files.map((file) => (
                    <li
                      key={file.id}
                      className="flex flex-row items-center justify-between">
                      <Link
                        className="text-cyan-500 text-xl"
                        href={file.webViewLink}
                        target="_blank"
                        rel="noreferrer">
                        {file.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return (
              null
            );
          }
        })}
      </div>
    </div>
  );
};
export default Documents;
