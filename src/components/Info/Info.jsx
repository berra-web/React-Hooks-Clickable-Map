import React from 'react';
import Loader from "react-loader-spinner";


export default function Info({ info, flag }) {
    return (
        <div className="card">
            {info ?
            <ul className="list-group list-group-flush">
                <img className="card-img-top" src={flag} alt="Card cap" />
                <li className="list-group-item">Country :{info.commonName}</li>
                <li className="list-group-item">Capital :{info.capital}</li>
                <li className="list-group-item">Official languages : {info.officialLanguages}</li>
                <li className="list-group-item">Currency : {info.currency}</li>
                <li className="list-group-item">CurrencyCode : {info.currencyCode}</li>
                <li className="list-group-item">AreaKm2 : {info.areaKm2}</li>
                <li className="list-group-item">LeaderName1 : {info.leaderName1}</li>
                <li className="list-group-item">Religion : {info.religion}</li>
            </ul> : <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
                />}
        </div>
    )
}
