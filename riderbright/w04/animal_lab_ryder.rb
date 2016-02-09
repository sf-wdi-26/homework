class Animal
    def initialize (type,eat,sleep)
        @type = (type)
        @eat = (eat)
        @state = (sleep)
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
        @type = ("Person")
        @eat = eat
        @sleep = sleep
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
end

def zebra = new.Animal('mammal','grass','sleeping') 

     

