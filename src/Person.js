import React from "react" //라이브러리 호출

//비구조화 할당 => 객체의 프로퍼티 값들을 변수에 풀어서 복사해준다
/*const Person = ({name, age}) => {
  return (
    <>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </>
  )
}

export default Person*/

class Person extends React.Component {
  state = {
    name:"sunrise",
    age : 23,
    friends : [
      "Victoria",
      "deniel",
      "hanna"
    ]
  }
  displayInfo = () => {
    const {name, age, friends} = this.state
    alert(`
      *신상정보*
      ---------------
      이름 : ${name}
      나이 : ${age}
      친구 : ${friends.join(' ')}
    `
    )
  }
  render(){
    return(
      <>
        <button onClick={this.displayInfo}>신상정보 확인하기</button>
      </>
    )
  }
}

export default Person;