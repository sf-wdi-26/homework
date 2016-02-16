class Animal
	attr_accessor :state
	def initialize(kind)
		@type = kind
		@state = "awake"
	end

	def eat(food)
		p "#{@type} eating #{food}"
	end
	def wake
		@state = "awake"
	end
	def sleep
		@state = "asleep"
	end
end

class Person < Animal
attr_accessor :age, :name, :gender 
	def initialize(age, name, gender)
		@type = "person"
		@age = age
		@gender = gender
		@name = name
		@@count = @@count + 1
	end

	def self.count
		@@count
	end

	def eat(food)
		while food == "person"
			p "Ain't a cannibal"
			p "eating #{food}"
		end
	end
	def greet
		p "Hi, it's #{@name}. I'm a #{@type}, and #{@age} yrs old"
	end 
end

Harry = Person.new(27, "male", "Harry")
Sarah = Person.new(22,"male","Sarah")
Harry.eat('dogs')
Sarah.eat('person')
puts person.count


