import React from 'react';
import './FolderCreator.css';
const FolderCreator=(props)=>{
    return (
        <div  className="folderCreator">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
              <button onClick={props.hideClick}  type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form method="POST" action="#">
                <div className="form-group">
                  <input type="text" className="form-control" name="Name" placeholder="Name"/>
                </div>
                <div className="form-group">
                  {/* <input type="file" name="uploadfile" id="img" style={{display:"none"}}/>
                  <label for="img">Click me to upload team image</label> */}
                  <input type="file" className="form-control" title=" " name="Image" placeholder="Image"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="FacebookURL" placeholder="Facebook Link"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="InstagramURL" placeholder="Instagram Link"/>
                </div>
                <div className="form-group">
                  <select id="team-type" name="TeamTypeID" className="form-control" >
                    <option value="">-- Select Your Team Category --</option>
                    { props.selectOption.map((element)=>{
                      return <option value={element.ID}>{element.Name}</option>
                    })}
                    
                    {/* <option value="standard-access">Standard Access</option>
                    <option value="pro-access">Pro Access</option>
                    <option value="premium-access">Premium Access</option> */}
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FolderCreator;