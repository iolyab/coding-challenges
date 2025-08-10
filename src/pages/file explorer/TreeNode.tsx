import { useState } from "react";
import classes from "./fileExplorer.module.scss";

export const TreeNode = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isDirectory = item.type === "directory";

  const sortedChildren = isDirectory
    ? [...item.children].sort((a, b) => {
        if (a.type !== b.type) {
          return a.type === "directory" ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      })
    : [];

  const handleClick = () => {
    if (isDirectory) {
      setIsOpen((prev) => !prev);
    }
  };
  return (
    <div>
      <div onClick={handleClick} className={classes.item}>
        {isDirectory ? (isOpen ? "📂" : "📁") : "📄"} {item.name}
      </div>

      <div>
        {isDirectory && isOpen && (
          <div className={classes.subItem}>
            {sortedChildren.map((child) => (
              <TreeNode key={child.id} item={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
