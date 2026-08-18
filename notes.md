--this Keyword in a Class:
In a class, if we want to call one method from another method, we use the this keyword.
We also use this to access or modify class properties (variables).

exa:
export class ClickEvent {
  Clickme() {
    console.log("You Click me!");
    this.YouClickMe();
  }

  YouClickMe() {
    console.log("Hey there, I'm a click me!");
  }
}