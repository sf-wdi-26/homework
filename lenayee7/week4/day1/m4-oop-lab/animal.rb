class Animal

	def initialize(type)
		@type = type
	end

	def eat(food)
		p "#{@type}'s eat #{food}."
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

	def self.count
		p "The count is #{@@count}"
	end

	def initialize(type,age,gender,name) 
		@type = "person"
		@age = age
		@gender = gender
		@name = name
		@@count = @@count + 1
	end

	def eat(food)
		if food === "person" 
			p "I do not eat people"
		else 
			p "#{@name} eats #{food}." 
		end
	end

	def greet 
		p "Hi, I am a person. My name is #{@name}. I am a #{@age} year old #{@gender}."
	end
end

luca = Person.new(@type,22,"male","Luca")
luca.greet

franchini = Person.new("person",28,"female","Francini")
franchini.greet

daniel = Person.new("person",25,"male","Daniel")
daniel.greet


giraffe = Animal.new('Giraffe\'s')
giraffe.eat('bananas')
# giraffe.sleep
giraffe.class

Person.count





	






		#attr_accessor - if you want to get and set  