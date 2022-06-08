import React from 'react'
import BudgetCard from './BudgetCard'

const BudgetList = () => {
  return (
    <div>
      <BudgetCard name="Total" amount={23} max={100}/>
    </div>
  )
}

export default BudgetList
