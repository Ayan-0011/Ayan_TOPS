import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container-fluid mt-3">
                <h2>More Unequal Columns</h2>
                <div className="row">
                    <div className="col-8 bg-success">1 of 2</div>
                    <div className="col-4 bg-warning">2 of 2</div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 bg-success">1 of 4</div>
                    <div className="col-2 bg-warning">2 of 4</div>
                    <div className="col-2 bg-success">3 of 4</div>
                    <div className="col-6 bg-warning">4  of 4</div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4 bg-success">1 of 4</div>
                    <div className="col-6 bg-warning">2 of 4</div>
                    <div className="col bg-success">3 of 4</div>
                    <div className="col bg-warning">4  of 4</div>
                </div>
            </div>

        </div>
    )
}

export default About
