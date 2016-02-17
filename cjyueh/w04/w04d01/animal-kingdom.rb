class Animal
  attr_accessor :type

  def initialize(type)
  	@type = type    
  end

  def eat(food)
    p "I am eating #{food}."
  end

  def sleep
    @state = "asleep"
  end

  def wake
    @state = "awake"
  end
end

class Person < Animal
  attr_accessor :age, :gender, :name
  @@count = 0

  def initialize(type, age, gender, name)
    @type = "person"
    @age = age
    @gender = gender
    @name = name
    @@count += 1
  end

  def age
    @age
  end

  def gender
    @gender
  end

  def name
    @name
  end

  def eat(food)
    if food == "person"
      p "Don't eat me!"
    else
      p "I am eating #{food}."
    end
  end

  def greet
    p "Hi, I'm #{name}. I'm a #{type}, and #{age} years old."
  end

  def self.count
    @@count
  end
end