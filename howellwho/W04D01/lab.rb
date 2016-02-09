class Animal
  def initialize (type)
    @type = type
    p "I am a #{@type}"
  end
  def eat food
    p "#{@type} is eating #{food}"
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

cat = Animal.new("cat")
cat.sleep
cat.wake
cat.eat("lasagna")

    class Person < Animal
      attr_accessor (:type)
      def initialize (age, gender, name)
        @type = "Person"
        p "I am a #{Person}"
        @age = age
        p "I am #{@age} years old"
        @gender = gender
        p "I am a #{@gender}"
        @name = name
        p "My name is #{@name}"
      end
      def eat food
        unless food == Person
          p "Not a cannibal!"
        end
      end
    end

dave = Person.new(22, "male", "dave")
