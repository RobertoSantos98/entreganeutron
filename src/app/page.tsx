import { ChevronRight, Truck, MapPinned } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const sobre = [
    {id: 1, title: "Comprometimento", img: "https://static.vecteezy.com/ti/fotos-gratis/t2/66580128-caminhoes-e-transporte-servicos-garantindo-a-seguro-e-eficiente-entrega-do-bens-foto.jpeg", subtitle: "Padrão de excelência rigoroso focado na satisfação total do cliente final."} ,
    {id: 2, title: "Responsabilidade", img: "https://static.vecteezy.com/ti/fotos-gratis/p1/70674634-comercial-carga-transporte-moderno-semi-caminhao-em-aberto-rodovia-entregando-bens-com-montanha-pano-de-fundo-foto.jpeg", subtitle: "Gerenciamento de riscos e segurança absoluta para cargas de qualquer valor."},
    {id: 3, title: "Entrega", img: "https://static.vecteezy.com/ti/fotos-gratis/p1/70677272-semi-caminhao-em-rodovia-as-por-do-sol-entregando-bens-atraves-pais-com-montanhas-dentro-fundo-foto.jpeg", subtitle : "Agilidade sem atrito. O menor tempo de tráfego com acompanhamento ao vivo."}
  ]

  const widget = [
    {id: 1, title: "10K+", label: "Entregas"},
    {id: 2, title: "500+", label: "Clientes Filiais"},
    {id: 3, title: "95%", label: "De Satisfação"},
  ]


  return (
    <div className="min-h-screen bg-red-50 text-slate-900 flex flex-col antialiased">

      {/* HEADER / NAVBAR */}
      <header className="w-full bg-red-500/90 backdrop-blur-md fixed top-0 z-50 border-b border-red-400/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center h-16 justify-between px-6">

          {/* LOGO */}
          <div className="text-red-200 font-bold text-xl select-none flex items-center group cursor-pointer">
            <div className="bg-red-600/50 rounded-xl p-2 group-hover:bg-red-400/50 transition-colors mr-2">
              <Truck className="w-5 h-5 text-white group-hover:translate-x-0.5 duration-300 transition-all" />
            </div>
            Entrega
            <span className="text-white ml-1">Neutron</span>
          </div>

          {/* NAV ESTILO PÍLULA */}
          <nav className="text-white text-sm hidden md:flex bg-red-600/40 h-10 w-64 items-center justify-center rounded-full font-medium p-1 backdrop-blur-sm">
            <Link href="/" className="hover:bg-white hover:text-red-600 transition-all flex-1 justify-center items-center flex rounded-full h-full">
              Início
            </Link>
            <Link href="#sobre" className="hover:bg-white hover:text-red-600 transition-all flex-1 justify-center items-center flex rounded-full h-full">
              Sobre
            </Link>
            <Link href="#servicos" className="hover:bg-white hover:text-red-600 transition-all flex-1 justify-center items-center flex rounded-full h-full">
              Serviços
            </Link>
          </nav>

          {/* BOTÃO CONTATO */}
          <Link
            href="/contato"
            className="group hover:scale-[1.02] transition-all duration-200 flex gap-2 items-center bg-white text-red-600 font-bold py-2 px-4 rounded-xl text-sm shadow-md shadow-red-900/10"
          >
            Vamos Conversar?
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 duration-200 transition-all" />
          </Link>

        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1  pt-24 pb-12 px-6  w-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto bg-linear-to-br from-red-500 to-red-600 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 shadow-2xl shadow-red-500/20 relative overflow-hidden">


          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />


          <div className="flex flex-col w-full space-y-6 flex-1 z-10">
            <div className="text-4xl md:text-5xl lg:text-4xl text-red-100 font-medium leading-tight tracking-tight">
              Suas Encomendas na <br />
              <span className="text-white text-5xl font-black drop-shadow-sm block mt-2">
                Velocidade da Luz
              </span>
            </div>

            <p className="text-red-100/80 text-lg max-w-lg leading-relaxed">
              Logística inteligente, rastreamento em tempo real e segurança de ponta a ponta para o seu negócio se mover mais rápido.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full max-w-md">

              <Link
                href="/rastreamento"
                className="bg-white rounded-xl py-4 px-6 flex text-sm w-full items-center justify-center gap-2 font-bold text-red-600 group hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-red-700/20 hover:shadow-xl"
              >
                <MapPinned className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                Rastrear Código
              </Link>


              <Link
                href="#orcamento"
                className="bg-red-500/80 backdrop-blur-sm rounded-xl py-4 px-6 flex text-sm w-full items-center justify-center gap-2 font-bold text-white group hover:scale-[1.03] transition-all duration-200 border border-white/30"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* IMAGEM ILUSTRATIVA */}
          <div className="flex-1 flex justify-center items-center z-10">
            <div className="relative transform hover:scale-105 duration-500 transition-transform">
              <Image
                width={480}
                height={340}
                alt="Modelo de caminhão 3D EntregaNeutron"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/caminhao-de-entrega-de-carga-3d-icon-png-download-6293582.png"
                className="object-contain"
                priority // Carrega a imagem principal mais rápido (Next.js Best Practice)
              />
            </div>
          </div>

        </div>
      </main>

      <section className='w-full flex bg-red-50'>
        <div className='max-w-7xl mx-auto px-8 py-24 gap-8 flex flex-col'>
          <div className='flex flex-col items-center px-10 gap-4'>
            <h2 className='md:text-4xl text-2xl text-red-500 text-center font-extrabold leading-tight'>Conectando negócio e pessoas na velocidade do agora</h2>
            <p className='md:text-xl text-md text-slate-500 text-center'>A EntregaNeutron nasceu para redefinir a logística moderna. Unimos algoritmos de rotas inteligentes, monitoramento em tempo real de ponta a ponta e uma frota ultra-eficiente para garantir que a distância entre a sua empresa e o seu cliente desapareça em questão de minutos. Para nós, segurança e rapidez andam lado a lado.</p>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-8'>

            {sobre.map((s)=> (
              <div key={s.id} className='rounded-xl max-w-[350px] gap-2 border border-red-300/50 w-full bg-white flex flex-col hover:shadow-lg items-center overflow-hidden group hover:-translate-y-1 duration-300 transition-all'>
                <div className='relative overflow-hidden w-full h-56'>
                  <Image className='group-hover:scale-105 duration-500 transition-all object-cover' fill alt='Foto Sobre' src={s.img} />
                </div>
                <div className='flex flex-col items-center p-4 gap-1'>
                  <span className='text-red-600 text-sm font-bold uppercase'>{s.title}</span>
                  <p className='text-zinc-500 text-xs text-center'>{s.subtitle}</p>
                </div>

              </div>
            ))}



          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='max-w-7xl mx-auto flex px-8 py-24'>
          <div className='px-10 flex lg:flex-row flex-col h-full w-full items-center'>
              <div className='w-full h-80 lg:h-120 relative overflow-hidden rounded-2xl'>
                <div className='hover:scale-102 transition-all duration-500 w-full h-full'>
                  <Image fill src={sobre[2].img} alt='foto' className='object-cover' />
                </div>
              </div>

              <div className='w-full h-full items-center justify-center flex flex-col '>

                <div className='flex items-center justify-center gap-4 border-t border-b border-red-100 mx-8 py-4'>
                  {widget.map((w) => (
                    <div key={w.id} className='hover:bg-red-100/50 p-4 rounded-xl'>
                        <span className='text-red-600 font-extrabold text-2xl'>{w.title}</span>
                        <p className='text-red-300 font-bold text-sm'>{w.label}</p>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col gap-4 p-8'>

                  <p className='uppercase font-bold text-zinc-600'>
                    Por muitos anos, a logistica de entrega tem mudado: mais caminhões, mais carros e mais pessoas. Com nossa ajuda, tudo isso se conecta facilitando e simplificando o processo do fornecedor até a entrega.
                  </p>


                  <Link href={"/sobre"} className=' flex group hover:shadow-md border border-zinc-300 shadow-gray-300/70 bg-white gap-2 p-1 rounded-full items-center pl-4 font-bold text-zinc-500 self-start hover:scale-102 transition-all duration-300'>
                    Conheça nossa história
                    <div className='bg-red-500 p-2 rounded-full text-white group-hover:translate-x-0.5 transition-all duration-100'>
                      <ChevronRight className=' transition-all duration-100'/>
                    </div>
                  </Link>

                </div>

              </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-slate-400 border-t border-slate-200/60 w-full max-w-7xl mx-auto px-6">
        &copy; {new Date().getFullYear()} EntregaNeutron. Todos os direitos reservados.
      </footer>

    </div>
  );
}