import React from 'react'
import Card from './Card'

function Dashboard() {
    const product = [
        {
            name: "EARNINGS(MONTHLY)",
            price: 40000
        },
        {
            name: "EARNINS(ANNUVAL)",
            price: 21500
        },
        {
            name: "TASK",
            price: "50%"
        },
        {
            name: "PENDING REQUESTS",
            price: 18
        },
    ]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                {
                    product.map((props) => {
                        return (
                            <Card props={props} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard