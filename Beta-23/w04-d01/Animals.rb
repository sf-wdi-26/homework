class Animal
	def initialize(type)
		@type = type
end

	def eat(food)
		@food = food
		puts "I am a #{@type} and I eat#{@food}"	
	end

	def sleep()
		@state = "asleep"

	end

	def awake()
		@state = "awake"
	end
end

class Person < Animal
	

	def initialize(type, age, gender, name)
	
	def type()

	@type = "person"

	def age()
	@age = age
		
	end

	def gender()
	@gender = gender
		
	end

	def name()
	@name = name
		
	end
end
	
	def greet
		puts "hi, I am #{@name}. I am a #{@type}, and #{@age} years old"
	end	
end

Al = Person.new("person",35,"male","Al")
Person.count
