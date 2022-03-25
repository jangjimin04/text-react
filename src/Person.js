import React from "react" //라이브러리 호출

function Person(props){
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
    </>
  )
}

export default Person