      isNormal: true,
      oldLineNumber: deletedLineCounter++,
      newLineNumber: addedLineCounter++,
      oldPath: fromFileName,
      newPath: toFileName,
      type: "modify",
    currentFile.type = "add";
    currentFile.oldPath = "/dev/null";
    currentFile.type = "delete";
    currentFile.newPath = "/dev/null";
    const revisions = line.split(" ")[1].split("..");
    currentFile.oldRevision = revisions[0];
    currentFile.newRevision = revisions[1];
      type: "delete",
      isDelete: true,
      lineNumber: deletedLineCounter++,
      type: "insert",
      isInsert: true,
      lineNumber: addedLineCounter++,
  const eof = () => {
    if (!mostRecentChange.isDelete) {
      currentChunk.newEndingNewLine = false;
    }
    if (!mostRecentChange.isInsert) {
      currentChunk.oldEndingNewLine = false;
    }