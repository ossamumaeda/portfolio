import image from '../assets/dev.png'
/* 
sm	640px
md	768px
lg	1024px
xl	1280px
2xl	1536px
*/

export const Resume = () => {
    return (
        <section className='grid md:grid-cols-2 md:flex-row-reverse p-4 gap-4'>
            <div className='order-1 md:order-2'>
                <img className="w-auto h-[60vw] md:h-[35vw] rounded-lg mx-auto"
                    src={image} alt={'pingpong'}
                />
            </div>
            <div className="order-2 text-center md:order-1 md:content-start md:text-left">
                <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-5xl font-medium">
                    Hi, I'm Gabriel, a Full Stack Developer
                </h1>
                <br/>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
                    Desenvolvedor Júnior na
                    <a className="font-semibold" href="https://vertti.com.br/"> Vertti↗</a>
                    <br />
                    Já trabalhei com as empresas
                    <br />
                    <a className="font-semibold" href="https://www.transpanorama.com.br/"> Transpanorama↗</a>
                    <a className="font-semibold" href="https://solumobi.com.br/"> Solumobi↗</a> e
                    <a className="font-semibold" href="https://www.tatilfish.com.br/"> TatilFish↗</a>
                </h2>
                <br/>
                <h2 className="">
                    Graduado em Ciência da Computação pela
                    <br/>
                    <a className="font-semibold" href="https://www.uem.br//"> Universidade Estadual de Maringá↗</a>
                </h2>
            </div>
        </section>
    )
}

/*
 -------------------------------------------                   IMAGE ILUSTRATION
  |                                         |
  |  RESUME BLOCK                           |
  |  WHO AM I - WHAT I DO - WHAT I ENJOY    |
  |  WHERE I AM WORKING                     |   
  |  WHERE I WORKED                         |
  |  WHERE I GRADUATED                      |
  -------------------------------------------


*/