
# Typehead Component

## **Control**
- Inherits from AbstractControl
- Defines a part of a form that cannot be divided into other controls. Controls have values and validation state, which is determined by an optional validation function.
- Control is one of the 3 fundamental building blocks used to define forms in A2, along with ControlGroup and ControlArray. 


## **ngFormControl**
- Binds an existing Control to a DOM element.
- When the value of the input element changes, the value of the control will reflect that change. Likewise, if the value of the control changes, the input element reflects that change.
 
# RxJS Operators

## switchMap()
- Observes the observable its hanging on and when the changes happen, switchMap operator takes a function and returns another observable. This works very similar like **map()** operator. 
- In addition, when changes happens, it switches from one to the other, and it sends a signal to the **previous** observable to tell it to cancel.


 

