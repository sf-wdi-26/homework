class Animal
  attr_accessor :type

  def initialize (type)
    @type = type
  end

  def eat food
    p "The #{@type} is eating the #{food}"
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

  def initialize (age,gender,name)
    @type = "person"
    @age = age
    @gender = gender
    @name = name
    @@count += 1
  end

  def self.count
    @@count
  end
    
  end

  def eat food
    p "The #{type} is eating the #{food}"
  end

  def greet
    p "Hi, I'm #{name}. I'm a person, and a #{age} year old #{gender}."
  end
end