class Animal 
	attr_accessor :type

	def eat (food) 
		p "This animal is eating #{food}"
	end

	def sleep 
		@state = "asleep"
	end

	def wake 
		@state = "awake"
	end
end

class Person < Animal
	attr_accessor :age, :gender, :name

	def initialize
		@type = "person"
	end

	def eat (food)
		if food != "person"
			p "This animal is eating #{food}"
		else
			p "Woah! No cannibals allowed!"
		end
	end

end
