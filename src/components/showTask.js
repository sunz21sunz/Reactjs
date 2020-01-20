import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

function ShowTask() {
    const taskList = useSelector(state => state.taskListReducer);
    let visibleTaskList = taskList;

    const [showTask, setShowTask] = useState('all');
    const showTaskList = visibleTaskList ?
        (visibleTaskList.map(task => {
            if(showTask ==='all') {
                return (<div>{task.taskName} {task.taskstatus}</div>)
            } else if (showTask === task.taskstatus){
                return (<div>{task.taskName} {task.taskstatus}</div>)
            }
            else return '';
        })) : '';

     

    return (
        <div>

            <Row className="justify-content-md-center">
                <Col md="auto">
                    <input type="radio" name="showItems" value='all' defaultChecked onChange={(e) => setShowTask(e.target.value)}></input>
                    <label className="radio-inline">All</label>
                    <input type="radio" name="showItems" value='incomplete' onChange={(e) => setShowTask(e.target.value)}></input>
                    <label className="radio-inline">Incomplete</label>
                    <input type="radio" name="showItems" value='complete' onChange={(e) => setShowTask(e.target.value)}></input>
                    <label className="radio-inline">Complete</label>
                </Col>
            </Row>



            <p>hello</p>
            <br /> <ul>
                {showTaskList}
            </ul>

        </div>
    );
}

export default ShowTask;