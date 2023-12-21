import React from 'react'

function ModalForm(props) {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Fill The Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div class="input-select">
                            <label htmlFor="qpbranch_name"><strong>Select Branch</strong></label>
                            <select name="qpbranch_name" id="qpbranch_name" class="form-control input-lg questionpaper" data-dependent="qpsem_name">
                                <option value="">Select Branch </option>
                                <option value="First Year FE Engineering">First Year FE Engineering</option>
                                <option value="Computer Engineering">Computer Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                                <option value="Information Technology Engineering">Information Technology Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Robotics and Automation">Robotics and Automation</option>
                                <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                            </select>

                        </div>
                        <div class="input-select">
                            <label htmlFor="qpsem_name"><strong>Select Semester</strong></label>
                            <select name="qpsem_name" id="qpsem_name" class="form-control input-lg"><option value="">Select Semester</option>
                                <option value="Semester 3">Semester 3</option>
                                <option value="Semester 4">Semester 4</option>
                                <option value="Semester 5">Semester 5</option>
                                <option value="Semester 5">Semester 6</option>
                                <option value="Semester 5">Semester 7</option>
                                <option value="Semester 5">Semester 8</option>
                            </select>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">{props.buttonName}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm