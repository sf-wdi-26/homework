class Animal
	attr_accessor :type
	def initialize 
		@type = type
	end
	def eat(food)
		print "the #{@type} is eating #{food}"
	end
	def sleep
		@state = "sleep"
	end
	def wake
		@state = "awake"
	end
end

class Person < Animal
	attr_accessor :age, :gender, :name
	@@total_people = 0
	def initialize
		@type = "person"
		p "i am a #{@type}"
		# @age = age
		# @gender = gender
		# @name = name
		@@total_people += 1
	end
	def eat(food)
		unless food == "person"
			print "the #{@type} is eating #{food}" 
		end 
	end
	def greet
		print "Hi I'm #{name}. and I'm #{age} years old."
	end
	def self.get_total_people
		print @@total_people
	end
end

Person.get_total_people
paul = Person.new
paul.age = 23
paul.gender = "male"
paul.name = "Paul"
paul.eat("chips")
paul.greet
Person.get_total_people


