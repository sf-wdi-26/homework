class Animal
    def initialize (type,eat,sleep)
        @type = type
        @eat = eat
        @state = sleep
    end
    
    def eat(food)
        p  "#{@type}is eating #{food}"    
    end
    
    def sleep
        @state = "sleeping"
    end

    def wake
        @state = "awake"
    end
end

class Person < Animal 
    def initialize(eat, sleep, age, gender, name)
    end    
        @type = ("Person")
        @eat = eat
        @state = sleep
        @age = age
        @gender = gender
        @name = name
    end

    def eat(food)
        if food == "Person"
            p "Don't be a cannibal bro!!"
        else
            p "#{@name} is eating #{food}"
    end

end

zebra = Animal.new("mammal","grass","sleeping")
mercedes = Person.new("flaminghot cheetos","awake","immortal","female","TheBoss")
ilias = Person.new("deconstructed mimosas","awake","immortal","male","TheMaster")
ben = Person.new("all the pancakes","awake","immortal","male","TheObiWan")
dani = Person.new("with alex","awake","immortal","female","TheLegitOne")

zombro = Person.new("Person","sleeping","undead","idk","TheZombie")
     

