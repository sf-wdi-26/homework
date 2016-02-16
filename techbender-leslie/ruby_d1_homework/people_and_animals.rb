class Animal
  attr_accessor(:type, :state)
  #give :type getter and setter methods to be called on Animal class

  def initialize(type)
    @type = type
    @state= state
  end

  def eat(food)
    p "Your #{self.type} is eating #{food}"
  end

  def sleep
    @state = "asleep"
    p "Your #{self.type} is #{state}"
  end

  def wake
    @state = "awake"
    p "Your #{self.type} is #{state}"
  end
end


class Person < Animal
  attr_accessor :name, :age, :gender
  
  def initialize(name, age, gender)
    @type = "person"
    @age = age
    @gender = gender
    @name = name
  end

  def eat(food)
    if food == self.type || food == "people"
      p "We do not support canibalism, please find another type of food for your person to eat"
    else
      p "Your #{self.type} is eating #{food}"
    end
  end

end



