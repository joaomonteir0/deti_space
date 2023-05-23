import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './News.css'

export const Example_new = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.pageYOffset > 150);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    
    return (
        <div className="holder" id='topo'>
            <div className="content">
                <div className="img-new" id='aqui'>
                    <img src="src/assets/1.jpg" alt="" />
                </div>
                <div className="">
                        <Link to="/news">
                            <button className='btn btn-primary rounded'>
                            <i class="fa-solid fa-backward"></i> Voltar à página das notícias
                            </button>
                        </Link>
                    </div>
                <div className="topo">
                    <div className='fs-1'><bold> Lorem ipsum dolor sit amet.</bold></div>
                </div>
                <div className="infos">
                    <div className="tags" style={{maxHeight:'25px'}}>
                        <div className='fs-5' style={{borderRadius:'8px'}}>Categorias:</div>
                        <div className="tag bgred"  style={{borderRadius:'8px'}}>DETI</div>
                        <div className="tag bggreen"  style={{borderRadius:'8px'}}>Students@DETI</div>
                        <div className="tag bgblue"  style={{borderRadius:'8px'}}>Eventos</div>
                    </div>
                    <p style={{lineHeight:'20px', marginBottom:'0', marginTop:'10px'}}>Autor: <b>Lorem ipsum</b></p>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus, eveniet enim magnam provident nemo vitae ducimus quidem. Odio ut sit accusamus quae non explicabo, repellendus veritatis iusto, praesentium necessitatibus autem unde impedit. Reiciendis dolorum cum laudantium accusantium corporis! Soluta quod cupiditate necessitatibus iste ipsam, laboriosam, quae, tenetur dolorum laborum sit pariatur veritatis odio placeat quos. Totam, soluta ratione expedita quisquam autem veritatis eaque quo cumque iure placeat illo fugiat consequuntur porro exercitationem illum tempore, numquam ad vero quos deserunt distinctio ut suscipit! Saepe totam sit ducimus et! Qui inventore consequuntur ut similique animi consequatur id a. Autem, eligendi praesentium repellendus harum expedita ea ducimus corporis laborum ut amet saepe! Pariatur est illum ullam itaque commodi, quis nostrum fuga illo dolores voluptatibus officia tempora libero doloremque et totam ex dignissimos beatae unde. Eum minus nostrum odio possimus consectetur unde minima assumenda fuga nemo architecto, est dolores facere? Velit blanditiis officia sed ratione voluptas omnis, aperiam eaque! Veritatis et nulla porro assumenda impedit optio, minus possimus sapiente suscipit, doloribus modi! Ex excepturi debitis veritatis! Quasi molestiae corrupti repudiandae perspiciatis neque quia deleniti voluptatum temporibus dolores sed, reprehenderit quam blanditiis saepe vero odio sint odit error, id soluta maiores voluptatibus, doloribus nobis?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus fuga dignissimos molestiae recusandae magni ducimus sequi quisquam inventore tempora quam vero sunt similique eaque, facilis dolorem molestias suscipit est, numquam eligendi ipsam repellat, id dolorum. Maxime totam soluta dolor magni eaque saepe veritatis suscipit esse voluptatum ullam architecto voluptates laudantium quam nobis, provident ab quasi atque impedit similique numquam. Id ipsam, doloremque fugiat quos non quis, necessitatibus ipsum, tenetur laudantium ducimus velit blanditiis culpa quidem nulla porro voluptates? Aliquid eum hic ipsam dicta iusto veritatis nemo suscipit atque obcaecati aut? Numquam, odio cum ducimus voluptatum repellat voluptatibus sapiente id labore explicabo, molestias fuga unde nulla non iste enim libero, harum similique assumenda laboriosam. Ex voluptates, aperiam tenetur quidem sunt delectus nesciunt reprehenderit id maxime eligendi officia accusantium, exercitationem maiores, et ipsa voluptatum voluptatem quisquam aut! Laborum doloremque explicabo accusamus voluptatum laudantium iure ipsum fuga cum perspiciatis aliquid aut inventore, asperiores obcaecati iusto quaerat libero tempora odit expedita provident dolorum et repellat. Blanditiis sit ducimus saepe veniam quasi odio incidunt quod debitis soluta neque, minus reiciendis alias sequi nam, pariatur quibusdam reprehenderit ipsa vitae quaerat voluptatum ad nesciunt! Odit recusandae sit modi. Commodi cum quidem mollitia tempore temporibus doloribus reprehenderit vero nisi nihil tempora aspernatur modi iste nam necessitatibus natus consequuntur ut, atque laborum non repellendus earum. Asperiores iste nihil doloremque vero? Consectetur, animi quod incidunt earum ipsum dolores voluptatibus?</p>
                </div>
                {showButton && (
                <a onClick={handleClick} className='coisa-que-anda-para-cima'><i class="fa-solid fa-circle-arrow-up"></i></a>
                )}
            </div>
        </div>
    )
}