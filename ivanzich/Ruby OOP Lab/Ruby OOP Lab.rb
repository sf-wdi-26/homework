## Exercises: The Animal Kingdom

##### Create the following:

# 1. An `Animal` class, with the following:
#   * Properties:
#     * `type`: A string that stores the type of animal
#   * Instance Methods:
#     * `eat`: Takes a parameter `food` to eat and prints out a message that the <type> of animal is eating `food`
#     * `sleep` & `wake`: These two methods should NOT be passed any arguments. Instead, they will set an instance variable `@state` to the string `"asleep"` or `"awake"` respectively.

# 2. A `Person` class, with the following characteristics:
#   * Inherits from `Animal`
#   * Automatically sets `@type` to `"person"`
#   * Adds 3 new instance vars:
#     * age
#     * gender
#     * name
#   * Also, people aren't cannibals! Make sure your `Person` class *overrides* the existing `eat` method (in `Animal`) so that a `Person` cannot eat a `"person"`

###### Animal Class

class Animal
 attr_accessor :state
 def initialize(friendly)
  @type = friendly
  @state = "awake"
end

def eat (food)
  " #{@type} love to eat #{food}!"
  end

  def sleep
    @state = "asleep"
  
  end

  def wake
    @state = "awake"
  end
end

dog = Animal.new("Pincher")
dog.eat(" bones ")
dog.sleep

puts dog.state

end

### Person Class 

class Person < Animal
attr_accessor :age, :gender, :name
def initialize(age, gender,name)
  @type = "person"
  @age = age
  @gender = gender
  @name = name
  




  end 