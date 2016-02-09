class Animal
    def initialize type
      @type = type
      p "I am a #{type}"
    end
    def eat food
      p "I am eating #{food}"
    end
    def sleep
      @state = "asleep"
      p "I am #{@state}"
    end
    def wake
      @state = "awake"
      p "I am #{@state}"
    end
end


class Person < Animal
@@count = 0
  def initialize age, gender, name
    @type = "Person"
    p "I am a #{@type}"
    @age = age
    @gender = gender
    @name = name
    @@count += 1
  end

  def eat food
    unless food == 'person'
      p "I am eating #{food}"
    end
  end

  def greet
    p "#{@name} is a #{@gender} of #{@age} years old"
  end

  def self.total_count
    p "We have created #{@@count} people!"
  end
end

dog = Animal.new('dog')
dog.sleep
dog.wake
dog.eat("Bananas")

vien = Person.new(24, "Male", "Vien")
vien.eat('person')
vien.greet

you = Person.new(nil, nil, nil)
Person.total_count
