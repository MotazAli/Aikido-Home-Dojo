import React from 'react';
import './Member.css';
import motaz from '../../../img/motaz.jpg';

const Member=()=>{

    return (

      // col-lg-4
        <div className="col-lg-3 margin-cell ">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
              <img src={motaz} alt="motaz" />
            {/* <h5 className="card-title text-muted text-uppercase text-center">Standard Access</h5>
            <h6 className="card-price text-center">$150</h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
            </ul> */}
            {/* <hr/> */}
            <div className="text-center">
              <p> <b>Motaz Ali Ahmed</b> </p>
              {/* <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>

    );
} 



export default  Member;