import React, { Component } from "react";

class Counter extends Component {
    state= {
        count :0
    }
    increase = () => {
        const {count} = this.state
        console.log(`before update state: ${count}`) //업데이트 전
        this.setState({ count: count + 1})
        console.log(`after updating state : ${count}`) //업데이트 후
    }
    render(){
        //여기서 state가 업데이트 된다
        // 모든 이벤트가 종료되는 이 시점에서 state를 변경하고 함수를 한번만 호출한다
        console.log('child')
        const {count} = this.state
        console.log(`state in render function:${count}`)
        return (
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase}>increase count</button>
            </>
        )
    }
}

export default Counter