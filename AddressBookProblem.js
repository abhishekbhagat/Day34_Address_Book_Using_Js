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
        this._firstName = firstName;
    }
    get lastName() {
        return lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
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
        this._phoneNumber = phoneNumber;
    }
    get email() {
        return email;
    }
    set email(email) {
        this._email = email;
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
    toString(){
        return "firstname="+this.firstName+" lastName= "+this.lastName +"address = " +this.address+" city= "+this.city+" state = "+ this.state+" zip ="+this.zip+"phone number = "+this.phoneNumber+" email = "+this.email;
    }
}
let contact1=new ContactPerson("abhishek","bhagat","katras","dhanbad","jharkhand","828113","123456789","abh@gmail.com");

console.log(contact1.toString());

