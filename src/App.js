import logo from './logo.svg';
import './App.css';

function App() {
  let arr1 =["Android","Blackberry","iPhone","Windows Phone"];
  let arr2 =["Samsung","HTC","Micromax","Apple"];
  const data = [
    {title: "Mobile Operating System", subjects:arr1},
    {title: "Mobile Manufacturers", subjects:arr2}
]
  //return <div>{data.map((user) => userComponent(user))}</div>
  return (
    
  <div>
    <div className='App blueish'><h1>REACT MOBILE OS</h1></div>
    <div className='lilSpaceLeft'>
    {
      data.map((user) => (<UserComponent title={user.title} subject={user.subjects}/>))
    }
    </div>
  </div>)
}

function UserComponent({title,subject}){
  const numbers = [1,2,3,4,5];
  const number = ['a','b','c','d','e'];
  return (
    <div>
      <h1>{title}</h1>
      <ul key={title.toString()}>
        {subject.map((e) => (
          <li key={e.toString()}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
