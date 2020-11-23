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
        let phoneRegex=RegExp('[1-9]{1}[0-9]{1}( )[1-9]{1}[0-9]{9}');
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
let contact1 = new ContactPerson("Abhishek", "Bhagat", "katras", "dhanbad", "jharkhand", "828113", "123456789", "abh@gmail.com");
console.log(contact1.toString());
try{
contact1.firstName="dk";
console.log(contact1.toString());
}
catch(e){
    console.error(e);
}

