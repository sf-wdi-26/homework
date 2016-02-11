class animal
	attr_accessor(:type, :state)
	def initialize(kind)
		@type = type
		@state = state
	end
	def eat (food)
		p "I am eating #{food}"
		
	end
	def sleep
		@state = "asleep"
		
	end
	def wake
		@state = "awake"
	end
end
	mammal = animal.new("Elephant")
	mammal.eat = ("peanuts")
	mammal.sleep
	puts mammal.state

	 class person < animal
	 	attr_accessor(:age, :gender, :name)
	 	@type = "person"
	 	@age = age
	 	@gender = gender
	 	@name = name
	 end 
	 def eat(food)
	 	response = if == "person"
	 		"Excuse me!?"
	 	else 
	 		"Hello?! Food!!"
	 	end
	 	p "Yes"
	 end