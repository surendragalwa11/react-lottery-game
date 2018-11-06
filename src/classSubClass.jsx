
class Person
{
  constructor(name='Anonymous',age)
  {
    this.name=name;
    this.age=age;
  }

  getName()
  {
      return `My name is ${ this.name } `;
  }

  getDetails()
  {
      return `${ this.name } is ${this.age} year old`;
  }
}

class Student extends Person
{
  constructor(name,age,major)
  {
    super(name,age);
    this.major=major;
  }

  hasMajor()
  {
      return !!this.major;
  }

  getDetails()
  {
    let details=super.getDetails();

    if(this.hasMajor())
    {
      details+= ` Their major is ${this.major} `;
    }
    
    return details;
  }
  
}

class Traveller extends Person
{
    constructor(name,age,country)
    {
        super(name,age);
        this.country=country;
    }

    hasCountry()
    {
        return !!this.country;
    }

    getDetails()
    {
       let details=super.getDetails();
       if(this.hasCountry())
       {
          details+=` He is from ${ this.country }`;
       }
    }

}

const me=new Person('Surendra',21);
console.log(me);
console.log(me.getDetails());
const other=new Person('',22);
console.log(other);

const me1=new Student('Surendra',23,'CSE');
console.log(me1);
console.log(me1.getDetails());
const other1=new Student('',22);
console.log(other1);

const me2=new Traveller('Surendra',23,'India');
console.log(me2);
console.log(me2.getDetails());
const other2=new Traveller('',22);
console.log(other2);