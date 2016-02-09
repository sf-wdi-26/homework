class Animal
	def initialize(typeOfAnimal)
		@type = typeOfAnimal
	end
	def kindOfFood(food)
		@eat = food
		puts "#{@type} #{food} is good!"
	end
	def sleep
		@state = "asleep"
		
	end
	def kindOfFood
		@state = "awake"
		
	end

	
end

    
class Person < Animal
		@@count=0
	def initialize(type,age,gender,name)
		@@count+=1
		@type = "person"
		@age = age
		@gender = gender
		@name = name
	end

	def eat(food)
		if food == "person"
			p "I don't eat people"
		else
			p "#{@name} eats #{food}"
		end
	end
	def greeting
		p "Hi, I'm #{@name}. I'm a #{@gender}, and #{@age} years old."
		
	end

	def self.count
		@@count
	end
end


lena = Person.new("person",30,"M", "lena")
lena.greeting
Person.count