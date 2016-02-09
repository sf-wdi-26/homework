#The Animal Kingdom Lab 

# An animal class 
class Animal
	# write and read instance variables @____ using reader and writer methods
	attr_accessor :state

	def initialize(type)

		# type: A string that stores the type of animal
    @type = type
    @state = "awake"
  end

  # eat: Takes a parameter food to eat 
	def eat (food) 
		@food = food
		# and prints out a message that the of animal is eating food
		p "The #{@type} eats #{@food}."
	end

	# sleep
	def sleep 
		# instance variable @state
		@state = 'asleep'
	end 

	# awake
	def wake 
		# instance variable @state
		@state = 'awake'
	end
end 

# Making an animal
house_cat = Animal.new("house cat")
house_cat.eat("kibble")
house_cat.sleep


# A Person class, with the following characteristics: Inherits from Animal
class Person < Animal
	# write and read instance variables @____ using reader and writer methods
	attr_accessor :age, :gender, :name
	# Automatically sets @type to "person"
	def initialize(age, gender, name)
		@age = age
		@gender = gender
		@name = name
		# Automatically sets @type to "person"
		@type = "person"
	end

	def eat(food)
    response = if food == "person"
      "People don't eat people!"
    else
      "#{name} likes to eat #{food}."
    end
    p response
  end

  def greet
    p "Hi, I'm #{@name}. I'm a #{@type}, and #{@age} years old."
  end
end

