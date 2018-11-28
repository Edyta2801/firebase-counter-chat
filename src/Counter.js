import React from 'react'


class Counter extends React.Component {
    state = {
        number: 0
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })


    saveToFirebase = () => {
        fetch(
            'https://monday-482dc.firebaseio.com/counter.json',
            {
                method: 'PUT',
                body: JSON.stringify(this.state.counter)
            }
        )
    }
    componentDiDUpdate() {
        this.saveToFirebase()
    }



    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

export default Counter 