class Animal
	def initialize (type)
		p "Creating a new animal"
		@type = type
	end

	def eat(food)
		p "i eat #{{food}}"
	end

	def sleep
		@state = "asleep"
	end 

	def wake
		@state = "awake"
	end
end

class Person < Animal
	@@count = 0
	attr_accessor :age, :gender, :name
	def initialize (age,gender,name)
		@type = Person
		@age = age
		@gender = gender
		@name = name
		@@count++
	end

	def greet 
		p "yo i'm #{name}, I'm a #{gender}, I'm #{age} and I'm a #{person}"	
	end

	def eat(food)
		if food == Person
			p "I can't eat that"
	end
end