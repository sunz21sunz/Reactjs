import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { addTaskAction } from '../actions/actions.js'

function AddTask() {
    const taskList = useSelector(state => state.taskList);
    const dispatch = useDispatch();

    const [taskName, setTaskName] = useState('');
    const [taskstatus, setTaskStatus] = useState('incomplete');
    const getTaskDetails = () => {
         return { taskName: taskName, taskstatus: taskstatus };
        };
    const resetTaskName = () => {setTaskName('')};

    return (
        <div>
            <br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input>
                </Col>
                <Col md="auto">
                    <Button size="sm" onClick={() => {dispatch(addTaskAction(getTaskDetails())); resetTaskName()}}>Add Task</Button>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md="auto">
                    <input type="radio" name="taskStatus" value='incomplete' defaultChecked onChange={(e)=>setTaskStatus(e.target.value)}></input>
                    <label className="radio-inline">Incomplete</label>
                    <input type="radio" name="taskStatus" value='complete' onChange={(e)=>setTaskStatus(e.target.value)}></input>
                    <label className="radio-inline">Complete</label>
                </Col>
            </Row>

            <Row>
                {taskList}
            </Row>
        </div>
    );
}

export default AddTask;