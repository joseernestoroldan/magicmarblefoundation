import { fetchFiles } from "@/app/lib/apiCalls";
import { GroupedFiles } from "@/types/types";
import FinancialDocuments from "../financialDocuments/FinancialDocuments";


const Documents = async () => {
  const query = await fetchFiles();
  const data = query.data;

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
  const files: GroupedFiles[] = Object.keys(groupedFiles).map(
    (folderName) => ({
      folderName,
      files: groupedFiles[folderName],
    })
  );

  return (
    <div className="w-full">
      <FinancialDocuments files={files} />
    </div>
  );
};
export default Documents;
