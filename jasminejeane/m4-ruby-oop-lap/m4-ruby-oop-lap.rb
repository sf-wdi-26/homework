=begin
this is how far I got before I just went to treehouse to get more info on OBJECT ORIENTED Ruby
I understand it better now and want to work on it more after looking at the solution code
I just din't get time after reviewing on my own to tackle it
=end


class Animal
  attr_accessor :eat, :sleep, :wake
  def initialize
 def eat
    @food
    p "#{type} is eating #{@food}"
  end

  def eat
    @eat
  end

   def sleep
    @state = "asleep"
  end

  def sleep
    @state
  end

   def wake
    @state = "awake"
  end

  def wake
    @state
  end
  
end
end




class Person


   def age=(age)
    @age = age
  end

  def age
    @age
  end

   def gender=(gender)
    @gender = gender
  end

  def gender
    @gender
  end

   def name=(name)
    @name = name
  end

  def name
    @name
  end

end





















class Animal
  attr_accessor :state
  def initialize(kind)
    @type = kind
    @state = "awake"
  end

  def eat (food)
    puts "Yum! I, as a #{@type} love to eat #{food}!"
  end

  def sleep
    @state = "asleep"
  end
  def wake
    @state = "awake"
  end
end

bird = Animal.new("Parrot")
bird.eat("Crackers")
bird.sleep

puts bird.state
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

  def self.count
    @@count

  def eat(food)
    response = if food == "person"
      "Sir! I am NOT a cannibal!"
    else
      "Yum! I am eating #{food}!"
    end
    puts response
  end

  def greet
    puts "Hi, I'm #{@name}. I'm a #{@type}, and #{@age} years old."
  end
end
ustin = Person.new(33, "male", "Justin")
jimmy = Person.new(27, "male", "Jimmy")
justin.eat('dogs')
justin.greet
jimmy.eat('person')
puts Person.count
