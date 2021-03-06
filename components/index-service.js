import { useState } from 'react'
import FirstModal from './modal-first'
import SecondModal from './modal-second'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Vamos a tu 馃彙 y te lo lavamos',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20el%20lavado%20a%20domicilio...',
    imageSrc: './lavado-img.svg',
    imageAlt: 'Lavado a domicilio de tu veh铆culo.',
    price: 'Desde $11.990',
    sizes: [
      { name: 'Simple', description: 'Limpiamos tu auto por fuera.' , price: '$11.990', id: 'lavado-simple'},
      { name: 'Full', description: 'Limpiamos tu auto por dentro y por fuera.', price: '$15.990', id: 'lavado-full'},
    ],
  },
  {
    id: 2,
    name: 'Revisi贸n t茅cnica',
    color: 'No hagas m谩s filas, vamos por t铆',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20la%20revisi贸n%20a%20t茅cnica...',
    imageSrc: './revision-img.svg',
    imageAlt: 'Revisi贸n t茅cnica imagen',
    description: 'Uno nuestros mec谩nicos inspecciona el veh铆culo, lo traslada a la plante de revisi贸n t茅cnica y gestiona su certificado. En caso de de que la revisi贸n salga rechaza nos pondremos en contacto para ayudarte a solucionar el problema.',
    price: '$29.990',
    queryString: 'revision-tecnica',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20la%20revisi贸n%20a%20t茅cnica...',
  },
  {
    id: 3,
    name: 'Mantenci贸n por kilometraje',
    color: 'Mantenlo al 馃挴',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20realizar%20la%20mantenci%C3%B3n%20de%20mi%20veh%C3%ADculo...',
    imageSrc: './mantencion-img.svg',
    imageAlt: 'Mantenci贸n imagen.',
    price: '*Sujeto a cotizaci贸n',
    description: 'Cotizamos el servicio, agendamos y llevamos tu auto al taller sin que tengas que salir de tu casa. Contamos con una red de talleres aliados o si prefieres podemos hacerlo con el taller de tu marca.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20la%20mantenci%C3%B3n%20de%20mi%20veh%C3%ADculo...'
  },
  {
    id: 4,
    name: 'Revisi贸n pre-compra',
    color: 'Revisamos el 馃殬 antes del 馃挵',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20revisi%C3%B3n%20pre-compra...',
    imageSrc: './precompra-img.svg',
    imageAlt: 'Revisi贸n pre-compra.',
    description: 'El servicio incluye inspecci贸n mec谩nica, est茅tica, scanner, prueba en ruta e informe legal.',
    price: '$25.990',
    queryString: 'revision-pre-compra',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20revisi%C3%B3n%20pre-compra...'
  },
  {
    id: 5,
    name: 'Inspecci贸n general',
    color: '驴En qu茅 estado est谩 tu 馃殬?',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20inspecci%C3%B3n%20general...',
    imageSrc: './inspeccion-img.svg',
    imageAlt: 'Inspecci贸n general imagen.',
    description: 'El servicio incluye inspecci贸n mec谩nica, est茅tica, scanner, prueba en ruta e informe legal.',
    price: '$25.990',
    queryString: 'inspeccion-general',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20inspecci%C3%B3n%20general...',
  },
  {
    id: 6,
    name: 'Desabolladura y pintura',
    color: 'Te lo arreglamos en un d铆a 馃',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...',
    imageSrc: './desabolladura-img.svg',
    imageAlt: 'Desabolladura y pintura imagen.',
    description: 'Cotizamos el arreglo seg煤n las fotos que nos env铆es, agendamos y en tan solo un d铆a desabollamos y pintamos tu auto en el lugar que mas te acomode.',
    price: '*Sujeto a cotizaci贸n',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...'
  },
  {
    id: 7,
    name: 'Cambio de aceite',
    color: 'Lo hacemos por t铆.',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20aceite...',
    imageSrc: './aceite-img.svg',
    imageAlt: 'Cambio de aceite imagen.',
    price: '*Sujeto a cotizaci贸n',
    description: 'Uno de nuestros mec谩nicos traslada tu auto a uno de nuestros talleres aliados para certificar que se haga el cambio de aceite y filtros.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20aceite...'
  },
  {
    id: 8,
    name: 'Cambio de parabrisas',
    color: 'Arr茅glalo en un par de horas',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20cambio%20de%20parabrisas...',
    imageSrc: './parabrisas-img.svg',
    imageAlt: 'Parabrisas imagen.',
    price: '*Sujeto a cotizaci贸n',
    description: 'Cotiza y agenda por Whatsapp con Sergio 馃懆馃徎鈥嶐煍?. Una vez agendado, vamos a tu domicilio, y hacemos el  cambio de parabrisas.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20cambio%20de%20parabrisas...'
  },
  {
    id: 9,
    name: 'Frenos',
    color: 'Chequeamos tus frenos 馃殫',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20revisi%C3%B3n%20de%20frenos...',
    imageSrc: './frenos-img.svg',
    imageAlt: 'Frenos imagen.',
    description: 'Cotiza y agenda por Whatsapp con Sergio 馃懆馃徎鈥嶐煍?. Una vez agendado, vamos a tu domicilio, y hacemos la revisi贸n de tus frenos, cambio de pastillas, rectificaci贸n de disco y cambio de disco, seg煤n corresponda.',
    price: '*Sujeto a cotizaci贸n',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20revisi%C3%B3n%20de%20frenos...'
  },
  {
    id: 10,
    name: 'Vulcanizaci贸n',
    color: '驴Quedaste en pana?馃槳',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20una%20vulcanizaci%C3%B3n...',
    imageSrc: './vulca-img.svg',
    imageAlt: 'Vulca imagen.',
    price: 'Desde $30.990',
    description: 'Cotiza y agenda por Whatsapp con Sergio 馃懆馃徎鈥嶐煍?. Una vez agendado, vamos al lugar que nos indiques, y hacemos el cambio de neum谩ticos.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20una%20vulcanizaci%C3%B3n...'
  },
  {
    id: 11,
    name: 'Cambio de bater铆a',
    color: '驴Tu 馃殫 no parte? 鈿★笍',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20bater%C3%ADa...',
    imageSrc: './baterias-img.svg',
    imageAlt: 'Cambio de bater铆a imagen.',
    price: '*Sujeto a cotizaci贸n',
    description: 'Cotiza y agenda por Whatsapp con Sergio 馃懆馃徎鈥嶐煍?. Una vez agendado, vamos al lugar que nos indiques, y hacemos el cambio de bater铆a.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20bater%C3%ADa...'
  },
  {
    id: 12,
    name: '驴No est谩 lo que buscas?',
    color: 'Cotiza con Sergio 馃懆馃徎鈥嶐煍?',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo',
    imageSrc: './otros-img.svg',
    imageAlt: 'Otros servicios imagen.',
    description: '驴No encontraste lo que buscabas? H谩blanos y Sergio 馃懆馃徎鈥嶐煍? solucionar谩 tu problema.',
    price: '*Sujeto a cotizaci贸n',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo'
  },  
]

export default function Service2Section() {

 
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  
  function openModal(product){
    setActiveProduct(product);
    if (product.name == 'Lavado a domicilio'){
      setOpenFirst(true);
      setOpenSecond(false);
    }
    else {
      setOpenSecond(true);
      setOpenFirst(false);
    }
  }

  return (
    <div className="bg-white" id="service-section">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <FirstModal open={openFirst} onCloseModal={()=> setOpenFirst(false)} product={activeProduct}/>
        <SecondModal open={openSecond} onCloseModal={()=> setOpenSecond(false)} product={activeProduct}/>
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Los m谩s populares</h2>
          <Link href="/servicios">
            <a className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500" >
              Ver todos los servicios<span aria-hidden="true"> &rarr;</span></a>
          </Link>
        </div>
        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center">
  
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <button 
                          onClick={()=> {
                            openModal(product);
                          }}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </button>
                      </h3>
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                      <div className="mt-3">
                          <button
                          type="button"
                          className="w-full relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                          onClick={()=> {
                            openModal(product);
                          }}
                          >
                          Ver m谩s<span className="sr-only">, {product.name}</span>
                          </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex px-4 sm:hidden">
            <Link href="/servicios">
              <a className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Ver todos los servicios<span aria-hidden="true"> &rarr;</span></a>
            </Link>
        </div>
      </div>
    </div>
  )
}