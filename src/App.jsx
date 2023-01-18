import './App.css';
function App() {
    return (
        <div className="container-form">
            <form>
                <div className="form-header">
                    <h1>Novo chamado</h1>
                </div>
                <div className="form-main">
                    <div className="box-user-col">
                        <label htmlFor="problem">Problema</label>
                        <input required className='input1' type="text" id='problem' />
                    </div>
                    <div className="box-user-col">
                        <label htmlFor="requester">Requisitante</label>
                        <input required className='input1' type="text" id='requester' />
                    </div>
                    <div className="box-user-row">
                        <div className="box-user-col">
                            <label htmlFor="responsible">Reponsavel</label>
                            <input className='input1' type="text" id='responsible' />
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="participant">Participante</label>
                            <input className='input1' type="text" id='participant' />
                        </div>
                    </div>

                    <div className="box-user-col">
                        <label htmlFor="task-priority">Prioridade</label>
                        <div className="box-user-row">
                            <div>
                                <input type="radio" name="task-priority" id="low" />
                                <label htmlFor="low">Baixo</label>
                            </div>
                            <div>
                                <input type="radio" name="task-priority" id="medium" />
                                <label htmlFor="medium">Media</label>
                            </div>
                            <div>
                                <input type="radio" name="task-priority" id="high" />
                                <label htmlFor="high">Alta</label>
                            </div>
                        </div>
                    </div>
                    <div className="box-user-col">
                        <label htmlFor="date">Data:</label>
                        <input required type="date" name="registerData" id="registerData" />
                    </div>
                    <div className="box-user-col">
                        <label htmlFor="description">Descricao:</label>
                        <textarea name="description" id="description" cols="5" rows="2"></textarea>
                    </div>
                </div>

                <div className="form-footer">
                    <div className='form-edit'>
                        <button id='edit'>Edit</button>
                    </div>
                    <div className="form-submit">
                        <button id='cancel'>Cancelar</button>
                        <button id='create'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
