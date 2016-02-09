class Animal                                                                    # creates Animal class
  attr_accessor :type
  def initialize(type)                                                          # method to run when new Animal instance
    @type = type                                                                # is created
  end
  def eat food                                                                  # method to eat food and print food eaten
    p "#{@type} is eating #{food}"
  end
  def sleep                                                                     # method to change state to asleep
    @state = "asleep"
  end
  def wake                                                                      # method to change state to awake
    @state = "awake"
  end
end

penguin = Animal.new "penguin"
penguin.eat "fish"

class Person < Animal                                                           # creates Person class, inherits from Animal class
  attr_accessor :age, :gender, :name
  @@number_of_people = 0
  def initialize(age, gender, name)                                             # method to initialize instance of Person
    @type = "person"
    @age = age
    @gender = gender
    @name = name
    @@number_of_people += 1;
    p @@number_of_people
  end
  def greet                                                                     # method to print greeting, using instance values
    p "Hi, I'm #{@name}. I'm a #{@type}, and #{@age} years old."
  end
  def eat food                                                                  # method to print what person is eating
    if food == "person"                                                         # if person is eating person
      p "No! People don't eat people!!"                                         # prints disgust
    else                                                                        # otherwise...
      p "#{@type} is eating #{food}"                                            # prints food passed to the method
    end
  end
end

bob = Person.new(5, "male", "Bob")
jane = Person.new(27, "female", "Jane")
bob.greet
jane.greet
