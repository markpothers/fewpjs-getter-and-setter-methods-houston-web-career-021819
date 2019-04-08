// Add your Circle class here

class Circle {

    constructor(radius){
        this.radius = radius
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }

    get diameter(){
        return 2 * this.radius
    }

    set circumference(newCircumference){
        this.radius = newCircumference/(2 * Math.PI)
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/(Math.PI))
    }

    set diameter(newDiameter){
        this.radius = 0.5 * newDiameter
    }
}