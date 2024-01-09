import React from 'react'

export default function BasicExpense() {
    let expense=
        [
            {
              "expenses": "Dune",
              "amount": 15
            },
            {
              "expenses": "Foundation",
              "amount": 12
            },
            {
              "expenses": "Neuromancer",
              "amount": 10
            },
            {
              "expenses": "1984",
              "amount":100
            },
            {
              "expenses": "Brave New World",
              "amount": 9
            },
            {
                'expenses':'Siva',
                "amount":0
            }
            
          ]
          let values=Object.values(expense)

          let sum=values.reduce((a,b)=>{
            return a+parseFloat(b.amount)
          },0)

          console.log(sum);
  return (
    <div>
        <center>
            <h1>React expenses app</h1>

            <h3>
                Total expense :{sum}
            </h3>
        </center>

        <table className='table'>
            <tr>
                <td className='text-danger'>Expenses</td>
                <td>Amount</td>
            </tr>
            {expense.map((s)=>(
                <tr>
                    <td>
                        {s.expenses}
                    </td>
                    <td>
                        {s.amount}
                    </td>
                </tr>
            ))}
        </table>
    </div>
  )
}
