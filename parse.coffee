	start = (line) ->
		if not file.to and not file.from
			fileNames = parseFile line

			if fileNames
				file.from = fileNames[0]
				file.to = fileNames[1]

		file.from = '/dev/null'
		file.to = '/dev/null'
		file.from = parseFileFallback line
		file.to = parseFileFallback line
		[/^\s+/, normal]
		[/^---\s/, from_file],
		[/^\+\+\+\s/, to_file],
		parse line
	return if not s

	fileNames = s.split(' ').slice(-2)
	fileNames.map (fileName, i) ->
		fileNames[i] = fileName.replace(/^(a|b)\//, '')

	return fileNames

# fallback function to overwrite file.from and file.to if executed
parseFileFallback = (s) ->