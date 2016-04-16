# Learning observables with Angular2

# Observables

Observables are just functions that tie a **producer** to a **consumer** and return a **cancellation** function.

# Operators

Operators are also functions that simply return an **observable** that subscribes to another observable and (generally) join their subscriptions.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.


You must have `ts-node` and `typings` installed as global. If you don't, use:

```bash
npm install -g ts-node
```

```bash
npm install -g typings
```

Then you can run: 

```bash
npm install 
```

To run the **demo-app**, use:

```bash
npm run demo-app
```