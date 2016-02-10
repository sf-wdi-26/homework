# Make sure to run the tests in your /spec folder
# Run `rspec /spec/username_spec.rb` to get started.

def format_name(first, last)
	first = first.delete(' ')
	last = last.delete(' ')
	
	# first.sub /[$&+,:;=?@#|'<>.-^*()%!]/, ''
	# last.sub /[$&+,:;=?@#|'<>.-^*()%!]/, ''

	if (first == "" || last == "")
		return nil
	end

  newName = first[0] + last
  newName = newName.downcase
  newName = newName.sub /[\.\^\$\*\+\?\(\)\[\{\|\>\<\"\'\;\\\-\_\!\@\,\%\&\#\/\=\:0-9]/, ''
end

def format_year (year)
	year = year.to_s
	if (year.length != 4)
		return nil
	end
	newYear = year[2] + year[3]
	# newYear.to_s
end

def build_username
  
end
