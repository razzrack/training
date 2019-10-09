import React from 'react'

const Pelatih = ({ trainers }) => {
    return (
    <div>
        {/* <center><h1>Trainer List</h1></center> */}
        {trainers.map((trainer) => (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">{trainer.nama_trainer}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{trainer.skill_trainer}</h6>
            <p class="card-text">{trainer.email_trainer}</p>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Pelatih