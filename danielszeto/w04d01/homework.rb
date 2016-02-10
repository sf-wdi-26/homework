class Animal 
	attr_accessor :state, :type
	def initialize(type)
		@type = type
		@state = state
	end

	def eat (food)
		puts "I am a #{@type} and im eating #{food}!"

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
	def initialize(age, gender, name)
	@type = "person"
	@age = age
	@gender = gender
	@name = name
	@@count = @@count + 1
	end

	def greet
		puts "Hi, I'm #{@name}. I'm a #{@type}, and #{@age} years old."

	end


	def self.count 
		@@count
	end


end