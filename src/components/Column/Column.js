import React from 'react'

import './Column.scss'
import Task from 'components/Task/Task'

function Column() {
　return (
    <div className="column">
        <header>Brainstorm</header>
        <ul className="task-list">  
            <Task />
            <li className="task-item">カード01</li>
            <li className="task-item">カード02</li>
            <li className="task-item">カード03</li>
            <li className="task-item">カード04</li>
        </ul>
        <footer>カードを追加</footer>
    </div>
)
}

export default Column
