import './Help.css'

export const Help = () => {
    return (
        <div className="holder">
            <div className="content">
                <div className="topo">
                    <div className="sobreNos" >
                        <h1> - Sobre Nós - </h1>
                        <p> <br ></br> Acreditamos que a colaboração é fundamental para o sucesso na vida acadêmica, principalmente em cursos de alta exigência como os oferecidos pelo DETI. Com o DETI Space, você pode se conectar com outros alunos, compartilhar conhecimentos e ajudar uns aos outros a ter sucesso. </p>
                        <p> <br></br> No DETI Space podes encontrar apontamentos de outros alunos, ler nóticias sobre todos os acontecimentos à tua volta e conversar com outros alunos ligasdos à nossa rede.</p>
                    </div>
                    <div className="linksTitulo" >
                        <h1> - Links Úteis  - </h1>
                        <br></br>
                        <div className="links">
                            <div className="links1">
                                <h5> Associações do DETI </h5>
                                <br></br>
                                <a href="https://nei.web.ua.pt/" target="_blank">NEI</a>
                                <p></p>
                                <a href="https://neect.aauav.pt/" target="_blank">NEECT </a>
                                <p></p>
                                <a href="https://www.instagram.com/neeetaauav/" target="_blank">NEET</a>
                                <p></p>
                                <a href="https://aettua.pt/" target="_blank">AETTUA</a>
                                <p></p>
                                <a href="https://aauav.pt/" target="_blank">AAUAV</a>

                            </div>
                            <div className="links2">
                                <h5>Outros</h5>
                                <br></br>
                                <a href="https://www.ua.pt/deti/PageText.aspx?id=15031" target="_blank">DETI</a>
                                <p></p>
                                <a href="https://www.ua.pt/" target="_blank">UA</a>
                                <p></p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="contato">
                    <h1> - Contato - </h1>
                    <br></br>
                    <form>
                        <div className="topoContatos">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                        <div></div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea id="mensagem" rows="5" name="mensagem" required></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                        <p>(esta ação ira enviar um email automatico para detispace@gmail.com)</p>
                    </form>
                </div>
            </div>
        </div>
    )
}