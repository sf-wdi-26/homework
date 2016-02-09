#Question 1
class Animal 
	attr_accessor :state, :type # we don't have to put type here because we're passing
	#it in below and also because of formatting of Question 2
	def initialize(type) #You don't need to initialize with state because we don't
		#want to have to pass something through it and also since we have a default variable below
		@type = type
		@state = "awake"
	end
	def eat(food)
		p "As a #{type}, I love eating #{food}"
	end
	def sleep
		@state = "asleep"	
		p "I am #{state}"
	end
	def wake
		@state = "awake"	
		p "I am #{state}"
	end
end

rat = Animal.new("rodent")
rat.eat("garbage")
rat.sleep


#Question 2
class Person < Animal
	@@count = 0 #keep track of instances made
	attr_accessor :age, :gender, :name
	def initialize(age, gender, name)
		@type = "person" #define this so we don't have to pass in every instance of person
		@age = age
		@gender =gender
		@name = name
		@@count = @@count +1
	end
	def self.count
		@@count #updates count for class
	end 
	def eat(food)
		response = if food == "person"  #if the food argument is a person ...
			"Sir! I am not a cannibal!"
		else 
			"Yum! I am eating #{food}!"
		end
			p response  #prints the response for all cases, more efficient to 
			#write here then after each line
		end
	def greet
		p "Hi, I am #{@name}. I am a #{@type}, and #{@age} years old"
		#@name overrides what was assigned to Animal class
	end
end

cindy = Animal.new("rodent")
cindy = Person.new(25, "female", "Cindy")
cindy.eat('person')
cindy.greet

