class ContactPerson {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    get firstName() {
        return firstName;
    }
    set firstName(firstName) {
        let nameregex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameregex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name is incorrect';
    }
    get lastName() {
        return lastName;
    }
    set lastName(lastName) {
        let nameregex = RegExp('[A-Z]{1}[a-z]{2,}');
        if (nameregex.test(lastName))
            this._lastName = lastName;
        else
            throw 'Last Name is incorrect';
    }
    get address() {
        return address;
    }
    set address(address) {
        this._address = address;
    }
    get city() {
        return city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return state;
    }
    set state(state) {
        this._state = state;
    }
    get zip() {
        return zip;
    }
    set zip(zip) {
        this._zip = zip;
    }
    get phoneNumber() {
        return phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex=RegExp('[1-9]{1}[0-9]{1}[1-9]{1}[0-9]{9}');
        if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw 'phone is incorrect';
        }
    }
    get email() {
        return email;
    }
    set email(email) {
        let emailRegexPattern = RegExp('^[a-zA-Z0-9]+[_+-.a-zA-Z0-9]{1}[a-zA-Z0-9]+@[A-Za-z]+(.)[A-Za-z]{2,4}$');
        if (emailRegexPattern.test(email)) {
            this._email = email;
        }
        else {
            throw 'Email is incorrect';
        }
    }
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return "firstname=" + this.firstName + " lastName= " + this.lastName + "address = " + this.address + " city= " + this.city + " state = " + this.state + " zip =" + this.zip + "phone number = " + this.phoneNumber + " email = " + this.email;
    }
}
function display(contact){
    console.log(contact.toString());
}
let contactPersons=new Array();
let contact1 = new ContactPerson("Abhishek", "Bhagat", "katras", "dhanbad", "jharkhand", "828113", "123456789", "abh@gmail.com");
let contact2=new ContactPerson("Naman","Kumar","dfgsfg","jamshedpur","jharkhand","831414","7209300456","klmnop@gmail.com");
let contact3=new ContactPerson("Gaurav","Kumar","naginapuri","jamshedpur","jharkhand","832544","7909015420","xyz@gmail.com");
contactPersons.push(contact1);
contactPersons.push(contact2);
contactPersons.push(contact3);
console.log(contactPersons.forEach(display));

//uc4
let contactByperson=contactPersons.filter(findPerson);
function findPerson(contactPerson){
  return contactPerson.firstName=="Naman";
}
console.log(contactByperson.forEach(display));
//uc5
let index=contactPersons.map(contact=>contact.firstName)
.indexOf("Naman");
contactPersons.splice(index,1);
console.log(contactPersons.forEach(display));
//uc6

function countNumberOfContact(count){
    return count+1;
}
let numberOfContacts=contactPersons.reduce(countNumberOfContact,0);
console.log(numberOfContacts);

