import React from 'react';

function DashboardBody() {
    return (
        <div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" className="align-text-bottom"></span>
                            This week
                        </button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {/* First Container */}
                        <div className="col-md-8">
                            <div className="card text-center">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="true" href="#">Active</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        {/* Second Container */}
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Calendar Here</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 mt-3 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default DashboardBody;