class Animal
  attr_accessor :type

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

  def type
    @type = "person"
  end

  def eat food
    p "The #{type} is eating the #{food}"
  end

  def greet
    p "Hi, I'm #{name}. I'm a person, and a #{age} year old #{gender}."
  end
end