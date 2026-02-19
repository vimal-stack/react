import './App.css'

function App() {


const first = [1, 2, 3]
const second = [...first, 7, 11, 27] 

const fruit = ['Mango', 'Grapes', 'Pinapple']

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  const p = new Person("vimal", 20)


  const [a, b, c] = first 

  return (

    <div>
    <ul>
      {fruit.map((item) => <li key={item}>{item}</li>)}
    </ul>
    <p>First array: {first}</p><p>Second array: {second}</p>

    <p>Person: {p.name}, Age: {p.age}</p>
    <p>{p.greet()}</p>

    <p>Destructured values: a={a}, b={b}, c={c}</p>
</div>
  )
}

export default App