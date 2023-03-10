// import logo from './logo.svg';
import './App.css';

function App() {

  const list = [
    { id: 1, name: 'John', age: 21, grade: 'A', gender: 'Male' },
    { id: 2, name: 'Jane', age: 20, grade: 'B', gender: 'Female' },
    { id: 3, name: 'Bob', age: 22, grade: 'C', gender: 'Male' },
    { id: 4, name: 'Sara', age: 19, grade: 'A', gender: 'Female' },
    { id: 5, name: 'Tom', age: 21, grade: 'B', gender: 'Male' },
    { id: 6, name: 'Ava', age: 20, grade: 'A', gender: 'Female' },
    { id: 7, name: 'Mike', age: 22, grade: 'C', gender: 'Male' },
    { id: 8, name: 'Emily', age: 19, grade: 'B', gender: 'Female' },
    { id: 9, name: 'David', age: 21, grade: 'A', gender: 'Male' },
    { id: 10, name: 'Rachel', age: 20, grade: 'B', gender: 'Female' },
    { id: 11, name: 'Chris', age: 22, grade: 'C', gender: 'Male' },
    { id: 12, name: 'Lily', age: 19, grade: 'A', gender: 'Female' },
    { id: 13, name: 'Mark', age: 21, grade: 'B', gender: 'Male' },
    { id: 14, name: 'Sophie', age: 20, grade: 'A', gender: 'Female' },
    { id: 15, name: 'Tim', age: 22, grade: 'C', gender: 'Male' },
    { id: 16, name: 'Anna', age: 19, grade: 'B', gender: 'Female' },
    { id: 17, name: 'Jack', age: 21, grade: 'A', gender: 'Male' },
    { id: 18, name: 'Olivia', age: 20, grade: 'B', gender: 'Female' },
    { id: 19, name: 'Kevin', age: 22, grade: 'C', gender: 'Male' },
    { id: 20, name: 'Mia', age: 19, grade: 'A', gender: 'Female' }

  ]

  const total = list.reduce((acc, curr) => {
    // let cost = Number(curr.Cost.charAt(curr.Cost.length-1))
    return acc +curr.age  
  }, 0)
  const total1 = list.reduce((acc, curr) => {
    // let cost = Number(curr.Cost.charAt(curr.Cost.length-1))
    return acc +(curr.age/20)
  }, 0)

  return (
    <div className="App">

     <center>
     <table border={1} className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>age</th>
            <th>grade</th>
            <th>gender</th>
            {/* <th>total</th> */}
          </tr>
        </thead>
        <tbody>
          {
            list.filter(j => j.Status == 'Done').map((i) => {
              return (
                <tr>
                  <td>{i?.id}</td>
                  <td>{i?.name}</td>
                  <td className="text">{i?.age}</td>
                  <td>{i?.grade}</td>
                  <td>{i?.gender}</td>
                </tr>
              )
            })
          }
        </tbody>
        <tbody>
          {
            list.filter(j => j.Status != '').map((i) => {
              return (
                <tr>
                  <td>{i?.id}</td>
                  <td>{i?.name}</td>
                  <td className="text">{i?.age}</td>
                  <td>{i?.grade}</td>
                  <td>{i?.gender}</td>
                </tr>
              )
            })
          }
          <tr>
            <td colspan={2}>total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td colspan={2}>total1</td>
            <td>{total1}</td>
          </tr>
        </tbody>
      </table>
     </center>
    </div>
  );
}

export default App;
