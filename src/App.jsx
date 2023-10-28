import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/globalstyles.css'


function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card bg-opacity-5 border-primary bg-light bg-opacity-50">
              <div className="card-body p-5">
                
                <h1 className="h1 text-center mt-3 mb-0 pb-3 text-primary fw-bold">To Do List</h1>
                <p className="p text-center mb-4 fw-light"><span className="fw-bolder">Day: </span>{date}</p>
                <div className="p-2">
                  <TodoForm />
                </div>
                <div className="p-2">
                  <TodoList />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
