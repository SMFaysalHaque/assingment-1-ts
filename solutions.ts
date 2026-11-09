const multiplyValue = (value: number, multiplier: number = 2): number => {
    return multiplier == 0 ? 0 : value * multiplier
}



type Value = string | number | boolean
type Result = string | number

const processInput = (value: Value): Result => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    } else if (typeof value === "number") {
        return value * 10
    } else {
        return value === true ? "Active" : "Inactive"
    }
}



type Coordinate = readonly [ number, number, string]

const formatCoordinate = (coordinate: Coordinate): string   => {
    const [latitude, longitude, locationName] = coordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const array: T[] = []

    for (const eachArray of arrays) {
        for (const eachElement of eachArray) {
            array[array.length] = eachElement
        }
    }

    return array
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const filteredCourse: Course[] = courses.filter((course: Course) => {
       return course.isPublished === true && course.students >= minStudents
    })

    return filteredCourse
}



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key])
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor (name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor (name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise ((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}