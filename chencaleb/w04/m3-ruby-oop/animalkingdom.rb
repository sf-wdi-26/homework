class Animal
	def initialize(arg)
		@type = arg
	end
	def eat(food)
		p "I am eating #{food}."
	end
	def sleep
		@state = "asleep"
	end
	def wake
		@state = "wake"
	end
end

class Person < Animal
	attr_accessor :age, :gender, :name
	def initialize(age, gender, name)
		@type = "person"
		@age = age
		@gender = gender
		@name = name
	end
	def eat(food)
		if food == "person"
			p "You can't eat other people!"
		else
			p "I am eating #{food}."
	end
end