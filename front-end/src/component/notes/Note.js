import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Note.css";
import { UserContext } from "../../App";
function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteData, setNoteData] = useState("");
  const [renderWhenUpdated, setRenderWhenUpdated] = useState("");
  const [renderWhenDelete, setRenderWhenDelete] = useState();
  const token = useContext(UserContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getNote/10", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setNoteData(result.data.result);
      })
      .catch((error) => {});
  }, [renderWhenDelete, renderWhenUpdated, content, title, token]);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addContent = (e) => {
    setContent(e.target.value);
  };
  const addNote = () => {
    axios
      .post(
        `http://localhost:5000/createNote`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        setContent("");
        setTitle("");
        if (result.data.success === true) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `${result.data.message}`,
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Please Enter Data",
          });
        }
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "error",
        });
      });
  };
  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:5000/deleteNote/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setRenderWhenDelete(result);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `${result.data.message}`,
        });
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `${err.message}`,
        });
      });
  };
  const updateNote = async (id, content, title) => {
    let inputValues = content;

    const { value: formValues } = await Swal.fire({
      title: "Multiple inputs",

      html:
        `<input type="text"  id="swal-input1" value='${title}' class="swal2-input">` +
        `<textarea id="swal-input2"  class="swal2-input">${inputValues} </textarea>`,
      focusConfirm: true,
      showCancelButton: true,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      axios
        .put(
          `http://localhost:5000/updateNote/${id}`,
          {
            title: document.getElementById("swal-input1").value,
            content: document.getElementById("swal-input2").value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          setRenderWhenUpdated(result);
          Swal.fire(result.data.message);
        });
    }
  };
  return (
    <div className="Note ">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <div className="d-flex flex-row mb-3">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoSSgXVIfZjYAgkASQmMOSeh7_VSsjDu8vg&usqp=CAU"
                  width="70"
                />
                <div className="d-flex flex-column ml-2">
                  <span>Add New Note</span>
                  <input
                    className="ddd"
                    value={title}
                    placeholder="Enter Tilte"
                    onChange={addTitle}
                  />
                </div>
              </div>
              <textarea
                className="ddd"
                value={content}
                placeholder="Enter your content"
                onChange={addContent}
              />
              <div className="d-flex justify-content-between install mt-3">
                <h6>Manage Your Life</h6>
                <button
                  type="button"
                  className="btn btn-primary btn-sm rounded"
                  onClick={addNote}
                >
                  Add Note <i className="fas fa-add"></i>
                </button>
              </div>
            </div>
          </div>
          {noteData &&
            noteData.map((element) => {
              return (
                <div key={element.id} className="col-md-4">
                  <div className="card p-3">
                    <div className="d-flex flex-row mb-3">
                      <img
                        alt=""
                        src="https://i.imgur.com/S2In5pz.png"
                        width="70"
                      />

                      <div className="d-flex flex-column ml-2">
                        <span>
                          {element.FirstName} {element.LasttName}
                        </span>
                        <input
                          className="ddd"
                          type="text"
                          placeholder={`${element.title}`}
                          disabled
                        />
                      </div>
                      <i
                        style={{ marginLeft: "110px", cursor: "pointer" }}
                        className="fas fa-times"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete Note"
                        onClick={() => deleteNote(element.id)}
                      ></i>
                    </div>

                    <input
                      className="ddd"
                      type="text"
                      placeholder={`${element.content}`}
                      disabled
                    />

                    <div className="d-flex justify-content-end install mt-3">
                      <button
                        onClick={() =>
                          updateNote(element.id, element.content, element.title)
                        }
                        className="btn btn-primary "
                      >
                        Update <i className="fas fa-edit"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Note;
