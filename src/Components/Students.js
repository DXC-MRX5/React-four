import React from 'react'

const Students = () => {
  return (
    <div className='student'>
        <div className='heading'>
            <h1>Students Details</h1>
            <button>Add new Student</button>
        </div>
        <div className='table-cntnr'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
                <tr>
                    <td>Biden</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>Sepetember</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
                <tr>
                    <td>Barar</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
                <tr>
                    <td>Christ</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
                <tr>
                    <td>Elent</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Students