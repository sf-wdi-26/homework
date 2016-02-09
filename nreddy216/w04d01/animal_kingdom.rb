
class Animal
  attr_accessor(:type, :state)

  def initialize(type)
    @type = type
  end

  def eat(food)
    p "The #{type} is eating #{food}"
  end

  def sleep
    @state = "asleep"
  end

  def wake
    @state = "awake"
  end

end


class Person < Animal

  attr_accessor(:age, :gender, :name)
  @@people_count = 0

  def initialize
    @type = "person"
  end

  def self.count
    @@people_count += 1
  end

  def eat(food)
    if food!="person"
      p "#{name} is eating #{food}"
    end
  end

  def greet
    p "Hi, I'm #{name}. I'm a #{type}, and I'm #{age} years old."
  end

end
