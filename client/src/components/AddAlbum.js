// import React, { useState } from "react";
// import { Fragment } from "react";
// import { useDispatch, useSelecto } from "react-redux";
// import { toast } from "react-toastify";
// import { addAlbum } from "../_actions/album";

// // we pass "props" b/c we need to get the album id from the url 
// // THIS FUNC NOT TO BE CONFUSED W/ ADDALBUM FROM OUR _ACTIONS 
// // THIS ONE IS CAPITALIZED. IT'S A WHOLE ASS COMPONENT THAT WE EXPORT.
// function AddAlbum(props) {
//   const dispatch = useDispatch();

//   // value of the album name & description, set by handleInputChange() vvv 
//   const [values, setvalues] = useState({}); 

//   // used to...
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setvalues({
//       ...values,
//       [name]: value,
//     });
//   };

//   // What to do after submitting new album data.
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addAlbum(values)).then((res) => {    // we pass the addAlbum ACTION w/ our state values
//       if (res.payload.status) {
//         // toast.success(res.payload.message);
//         console.log("~~~~data: ", res.payload.result._id);

//         // if res.payload.status is true...we do this: ?? This navigates us to the uploads page
//         // what is props.history??
//         props.history.push(`/upload/${res.payload.result._id}`);
//       }
//     });
//   };

//   return (
//     // OBTAINED FROM BOOTSTRAP (https://getbootstrap.com/docs/4.0/components/breadcrumb/)
//     <Fragment>
//       <nav aria-label="breadcrumb">
//         <ol class="breadcrumb">
//           <li class="breadcrumb-item">
//             <a href="/">Albums</a>
//           </li> {/* <- we modify here lol*/}
//           <li class="breadcrumb-item active" aria-current="page">
//             Add Album
//           </li>
//         </ol>
//       </nav>
//       {/* vvv ALL THIS OTHER SHIT COPIED */}
//       <div className="card shadow-sm">
//         <div className="card title p-2 bg-light">
//           <h5>Add Album</h5>
//         </div>
//         <div className="card-body">
//           <div className="mb-3">
//             <label className="form-label">Album Name</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter album name"
//               // WHY DO WE USE HANDLEINPUTCHANGE TWICE? ONCE FOR ALBUM NAME, OTHER FOR DESCRIPTION (EASY)
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               name="description"
//               rows="3"
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <button
//               type="button"
//               // SUBMIT OUR SHIT:
//               onClick={handleSubmit}  
//               className="btn btn-success"
//             >
//               <i class="fas fa-plus"></i> Save and next
//             </button>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   )
// }
// export default AddAlbum

// WHY DON'T WE USE USEEFFECT HERE?
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addAlbum } from "../_actions/album";
import {useNavigate} from "react-router-dom"


function AddAlbum(props) {
  //let history = useHistory()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [values, setvalues] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAlbum(values)).then((res) => {
      if (res.payload.status) {
        // toast.success(res.payload.message);
        console.log("~~~~data: ", res.payload.result._id);        
        //props.history.push(`/upload/${res.payload.result._id}`);  
        // ^^ USEHISTORY IS DEPRECATED. Replaced w/ this (thanks reddit):
        navigate(`/upload/${res.payload.result._id}`);
      }
    });
  };
  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Albums</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Add
          </li>
        </ol>
      </nav>
      <div className="card shadow-sm">
        <div className="card title p-2 bg-light">
          <h5>Add Album</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Album Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter album name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              <i class="fas fa-plus"></i> Save and next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddAlbum;
// export default withRouter(AddAlbum);   NOPE LOL