import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders')
      .then((res) => res.json())
      .then((json) => {
        let tmpArray = []
        for (var i = 0; i < json.length; i++) {
          // tmpArray.push(json[i].product)
          tmpArray.push(json[i].country)
        }
        this.setState({
          isLoaded: true,
          items: json,
          other: tmpArray,
        })
      })
  }

  render() {
    var { isLoaded, items, other } = this.state

    if (!isLoaded) {
      return <div>Loading..</div>
    } else {
      // return <div className='App'>
      //   {items.map((item) => item.order_id)}

      // </div>
      // other.sort()
      // for (var i = 0; i < other.length; i++) {
      //   console.log(other[i])
      // }
      return (
        <div className='container'>
          <div className='header'>
            <div className='orders'>
              <h2>All orders {items.length}</h2>
              <br />
            </div>
          </div>
          <table>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th>DATE ORDER</th>
              <th>STATUS</th>
            </tr>
            {items.map((item) => {
              return (
                <tr key={item.order_id}>
                  <td className='order_id'> #{item.order_id}</td>
                  <td className='order_id'>{item.customer}</td>

                  <td className='pointer'>
                    <p className='order_id'>{item.country}</p>
                    <p>{item.address}</p>
                  </td>

                  <td className='pointer'>
                    <p className='order_id'>{item.product_title}</p>
                    <p>{item.product_description}</p>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`${item.status}`}>{item.status}</span>
                  </td>
                </tr>
              )
            })}
            console.log(a)
          </table>
        </div>
      )
    }
  }
}
export default App
