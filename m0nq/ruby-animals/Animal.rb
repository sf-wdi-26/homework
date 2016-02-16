class Animal

  def initialize(type)
    @type = type
  end

  def eat(food)
    "#{food}... delcious!"
  end

  def sleep
    @state = "sleep"
  end

  def awake
    @state = "awake"
  end
end

class Person < Animal
  attr_accessor :age, :gender, :name
  @@people_count = 0

  def initialize
    @type = "person"
    @@people_count += 1
  end

  def eat(food)
    if food == "person"
      "What's wrong with you!?!?!"
    else
      "#{food}... delcious!"
    end
  end

  def greet
    "Hi. I'm #{name}. I'm a person, and #{age} years old."
  end
end
