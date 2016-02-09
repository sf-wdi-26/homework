class Animal
	attr_accessor(:type)

	def initialize(type)
		@type = type
		@state = "awake"
	end

	def eat(food)
		p "The #{type} is eating #{food}"
	end

	def sleep
		@state = "asleep"
	end

	def wake
		@state = "awake"
	end
end

class Person < Animal
	attr_accessor(:age, :gender, :name)
	@@person_count = 0

	def initialize(age, gender, name)
		@type = "person"
		@age = age
		@gender = gender
		@name = name
		@@person_count += 1
	end

	def eat(food)
		if food == "person"
			p "YOU CANNOT BE A CANNIBAL"
		else
			p "The #{type} is eating #{food}"
		end
	end

	def greet
		p "Hi, I'm #{name}. I'm a #{gender} #{type}, and #{age} years old."
	end

	def people_count
		@@person_count
	end
end