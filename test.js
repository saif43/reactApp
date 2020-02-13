class Car{
    setDriveSound(sound) {
        this.sound = sound;
    }

    drive(){
        return this.sound;
    }
}

const car = new Car();

car.setDriveSound('vroom');

const truck = {
    sound: 'putpuput',
    driveTruck : car.drive
}

console.log(truck.driveTruck());