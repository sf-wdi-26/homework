class Animal
	def initialize(arg)
		@type = arg
	end
	#eat method
	def eat(food)
		p "I am eating #{food}."
	end
	#sleep method
	def sleep
		@state = "asleep"
	end
	#wake method
	def wake
		@state = "wake"
	end
end

#person inherits animal
class Person < Animal
	#getter/setter
	attr_accessor :age, :gender, :name
	def initialize(age, gender, name)
		@type = "person"
		@age = age
		@gender = gender
		@name = name
	end

	#eat method
	def eat(food)
		if food == "person"
			p "You can't eat other people!"
		else
			p "I am eating #{food}."
	end
end