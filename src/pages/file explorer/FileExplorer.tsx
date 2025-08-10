import { TreeNode } from "./TreeNode";
import { data } from "./data";

export const FileExplorer = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <TreeNode key={item.id} item={item} />
      ))}
    </div>
  );
};
