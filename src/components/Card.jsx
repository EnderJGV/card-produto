import ImgProdut from './img/image-product-desktop.jpg'
import './Card.css'

function Card(){
    return(
    <>
        <div className="card">
            <div className="card_main">
                <div className='card_main_img'>
                    <div>
                        <img src={ImgProdut} alt="" />
                    </div>
                </div>
                <div className='cardMainDescription'>
                    <p className='card_title_primary'>PERFUME</p>
                    <p className='card_title_second'>Gabrielle Essence Eau De Parfum</p>
                    <p className='card_title_third'>A floral, solar and volutouous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className='card_price'>
                        <span className='price_primary'>$149.99</span>
                        <span className='price_second'>$169.99</span>
                    </div>
                    <div className="button">
                        <button>Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>  
    )
}

export default Card