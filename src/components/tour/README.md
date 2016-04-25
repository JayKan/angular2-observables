
# Tourist Example

# Subjects
* The Subject class represents an object that is both an **observable** sequence as well as an **observer**. Each notification is broadcasted to all **subscribed observers**.
* The Subject can act as a proxy for a group of subscribers and a source.
* By default, subjects do not perform any synchronization across threads. They do not take a **scheduler** but rather assume that all **serialization** and **grammatical** correctness are handled by the caller of the subject. 

# Transforming Operators

### Scan:
* The scan operator applies a function to the first item emitted by the **source Observable** and then **emits** the **result** of that function as its own first emission. It also feeds the result of the function back into the function along with the second emitted by the source Observable in order to **generate** its second emission. It continues to feed back its own subsequent emissions along with the subsequent emissions from the **source Observable** in order to create the rest of its sequence. [This sort of operator is sometimes called **"accumulator"** in other contexts.
* To visualize how **scan()** operator works, please [visit](http://rxmarbles.com/#scan) here.  

