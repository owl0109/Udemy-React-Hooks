import React,{ useContext } from 'react'
import OperationLogs from '../reducers/operationLogs'


const OperationLog = ({operationLog}) => {
    return(
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
    )
}

export default OperationLog