var defaultToWhiteSpace, escapeRegExp, ltrim, makeString, parseFile, parseFileFallback, trimLeft;
  var add, chunk, current, del, deleted_file, file, files, from_file, index, j, len, line, lines, ln_add, ln_del, new_file, noeol, normal, parse, restart, schema, start, to_file;
  start = function(line) {
    var fileNames;
    files.push(file);
    if (!file.to && !file.from) {
      fileNames = parseFile(line);
      if (fileNames) {
        file.from = fileNames[0];
        return file.to = fileNames[1];
      }
    }
    file["new"] = true;
    return file.from = '/dev/null';
    file.deleted = true;
    return file.to = '/dev/null';
    return file.from = parseFileFallback(line);
    return file.to = parseFileFallback(line);
    var j, len, m, p;
    for (j = 0, len = schema.length; j < len; j++) {
      p = schema[j];
  for (j = 0, len = lines.length; j < len; j++) {
    line = lines[j];
  var fileNames;
  if (!s) {
    return;
  }
  fileNames = s.split(' ').slice(-2);
  fileNames.map(function(fileName, i) {
    return fileNames[i] = fileName.replace(/^(a|b)\//, '');
  });
  return fileNames;
};

parseFileFallback = function(s) {